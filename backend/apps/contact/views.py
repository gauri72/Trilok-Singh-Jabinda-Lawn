from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from django.utils.html import strip_tags
import json
import re
import html
from .models import ContactInquiry


def validate_phone_number(phone):
    """
    Validate phone number format
    - Only digits, spaces, +, -, (, ), and . allowed
    - Length between 10-15 digits
    - Must contain at least 10 digits
    """
    # Remove all non-digit characters except + at the beginning
    cleaned_phone = re.sub(r'[^\d+]', '', phone)
    
    # Check if it starts with + and has country code
    if cleaned_phone.startswith('+'):
        # Remove + and check if remaining are digits
        digits_only = cleaned_phone[1:]
        if not digits_only.isdigit():
            return False, "Phone number can only contain digits after country code"
        if len(digits_only) < 10 or len(digits_only) > 15:
            return False, "Phone number must be 10-15 digits long"
    else:
        # No country code, check if all digits
        if not cleaned_phone.isdigit():
            return False, "Phone number can only contain digits"
        if len(cleaned_phone) < 10 or len(cleaned_phone) > 15:
            return False, "Phone number must be 10-15 digits long"
    
    return True, cleaned_phone


def sanitize_input(text):
    """
    Sanitize input text to prevent XSS and other malicious content
    - Strip HTML tags
    - Escape HTML entities
    - Remove excessive whitespace
    - Limit length
    """
    if not text:
        return ""
    
    # Convert to string if not already
    text = str(text)
    
    # Strip HTML tags
    text = strip_tags(text)
    
    # Escape HTML entities
    text = html.escape(text)
    
    # Remove excessive whitespace and normalize
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Limit length to prevent abuse
    if len(text) > 1000:
        text = text[:1000] + "..."
    
    return text


def validate_name(name):
    """
    Validate name field
    - Not empty
    - Only letters, spaces, hyphens, and apostrophes
    - Length between 2-100 characters
    """
    if not name or not name.strip():
        return False, "Name is required"
    
    name = name.strip()
    
    # Check length
    if len(name) < 2:
        return False, "Name must be at least 2 characters long"
    if len(name) > 100:
        return False, "Name must be less than 100 characters"
    
    # Check for valid characters (letters, spaces, hyphens, apostrophes)
    if not re.match(r"^[a-zA-Z\s\-']+$", name):
        return False, "Name can only contain letters, spaces, hyphens, and apostrophes"
    
    # Check for excessive spaces or special characters
    if re.search(r'\s{2,}', name):  # Multiple consecutive spaces
        return False, "Name cannot contain multiple consecutive spaces"
    
    return True, name.strip()


def validate_message(message):
    """
    Validate message field
    - Not empty
    - Length between 10-1000 characters
    - Check for spam patterns
    """
    if not message or not message.strip():
        return False, "Message is required"
    
    message = message.strip()
    
    # Check length
    if len(message) < 10:
        return False, "Message must be at least 10 characters long"
    if len(message) > 1000:
        return False, "Message must be less than 1000 characters"
    
    # Check for spam patterns (basic detection)
    spam_patterns = [
        r'http[s]?://',  # URLs
        r'www\.',        # www links
        r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',  # Email addresses
        r'\b(?:free|win|winner|congratulations|click here|buy now|limited time)\b',  # Common spam words
    ]
    
    for pattern in spam_patterns:
        if re.search(pattern, message, re.IGNORECASE):
            return False, "Message contains suspicious content"
    
    # Check for excessive repetition
    words = message.split()
    if len(words) > 5:  # Only check if there are enough words
        word_counts = {}
        for word in words:
            word_lower = word.lower()
            word_counts[word_lower] = word_counts.get(word_lower, 0) + 1
            if word_counts[word_lower] > len(words) * 0.3:  # More than 30% repetition
                return False, "Message contains excessive repetition"
    
    return True, message


@csrf_exempt
@require_http_methods(["POST"])
def submit_contact_form(request):
    """
    Handle contact form submission with comprehensive validation
    """
    try:
        # Parse JSON data
        data = json.loads(request.body)
        
        # Extract and validate form data
        name = data.get('name', '').strip()
        phone_number = data.get('phoneNumber', '').strip()
        message = data.get('message', '').strip()
        
        # Validate required fields
        if not name:
            return JsonResponse({
                'success': False,
                'message': 'Name is required.'
            }, status=400)
        
        if not phone_number:
            return JsonResponse({
                'success': False,
                'message': 'Phone number is required.'
            }, status=400)
        
        if not message:
            return JsonResponse({
                'success': False,
                'message': 'Message is required.'
            }, status=400)
        
        # Validate name
        name_valid, name_result = validate_name(name)
        if not name_valid:
            return JsonResponse({
                'success': False,
                'message': name_result
            }, status=400)
        
        # Validate phone number
        phone_valid, phone_result = validate_phone_number(phone_number)
        if not phone_valid:
            return JsonResponse({
                'success': False,
                'message': phone_result
            }, status=400)
        
        # Validate message
        message_valid, message_result = validate_message(message)
        if not message_valid:
            return JsonResponse({
                'success': False,
                'message': message_result
            }, status=400)
        
        # Sanitize inputs
        sanitized_name = sanitize_input(name_result)
        sanitized_phone = phone_result  # Phone is already cleaned in validation
        sanitized_message = sanitize_input(message_result)
        
        # Create database record
        inquiry = ContactInquiry.objects.create(
            name=sanitized_name,
            phone_number=sanitized_phone,
            message=sanitized_message
        )
        
        # Send email notification to admin
        try:
            send_admin_notification(inquiry)
        except Exception as e:
            # Log email error but don't fail the request
            print(f"Email notification failed: {str(e)}")
        
        return JsonResponse({
            'success': True,
            'message': 'Thank you for your inquiry! We will contact you soon.',
            'inquiry_id': inquiry.id
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Invalid JSON data.'
        }, status=400)
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': 'An error occurred. Please try again later.'
        }, status=500)


def send_admin_notification(inquiry):
    """
    Send email notification to admin about new inquiry
    """
    subject = f"New Contact Inquiry from {inquiry.name}"
    
    message = f"""
    New contact inquiry received:
    
    Name: {inquiry.name}
    Phone: {inquiry.phone_number}
    Message: {inquiry.message}
    
    Received at: {inquiry.created_at.strftime('%Y-%m-%d %H:%M:%S')}
    
    Please respond to this inquiry as soon as possible.
    """
    
    # Send email to admin
    send_mail(
        subject=subject,
        message=message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[settings.ADMIN_EMAIL],
        fail_silently=False,
    )
