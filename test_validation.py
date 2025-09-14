#!/usr/bin/env python3
"""
Test script for contact form validation
This script demonstrates the validation features implemented
"""

import requests
import json

# Test cases for validation
test_cases = [
    # Valid cases
    {
        "name": "John Doe",
        "phoneNumber": "+91 98765 43210",
        "message": "I would like to book your lawn for a wedding ceremony on 15th March 2024. We expect around 200 guests.",
        "expected_status": "success"
    },
    {
        "name": "Priya Sharma",
        "phoneNumber": "9876543210",
        "message": "Hello, I am interested in booking your venue for a corporate event. Please let me know about availability and pricing.",
        "expected_status": "success"
    },
    
    # Invalid name cases
    {
        "name": "",
        "phoneNumber": "+91 98765 43210",
        "message": "Valid message for testing",
        "expected_status": "error",
        "expected_error": "Name is required"
    },
    {
        "name": "A",
        "phoneNumber": "+91 98765 43210",
        "message": "Valid message for testing",
        "expected_status": "error",
        "expected_error": "Name must be at least 2 characters long"
    },
    {
        "name": "John123",
        "phoneNumber": "+91 98765 43210",
        "message": "Valid message for testing",
        "expected_status": "error",
        "expected_error": "Name can only contain letters, spaces, hyphens, and apostrophes"
    },
    
    # Invalid phone cases
    {
        "name": "John Doe",
        "phoneNumber": "",
        "message": "Valid message for testing",
        "expected_status": "error",
        "expected_error": "Phone number is required"
    },
    {
        "name": "John Doe",
        "phoneNumber": "123",
        "message": "Valid message for testing",
        "expected_status": "error",
        "expected_error": "Phone number must be 10-15 digits long"
    },
    {
        "name": "John Doe",
        "phoneNumber": "abc1234567",
        "message": "Valid message for testing",
        "expected_status": "error",
        "expected_error": "Phone number can only contain digits"
    },
    
    # Invalid message cases
    {
        "name": "John Doe",
        "phoneNumber": "+91 98765 43210",
        "message": "",
        "expected_status": "error",
        "expected_error": "Message is required"
    },
    {
        "name": "John Doe",
        "phoneNumber": "+91 98765 43210",
        "message": "Short",
        "expected_status": "error",
        "expected_error": "Message must be at least 10 characters long"
    },
    {
        "name": "John Doe",
        "phoneNumber": "+91 98765 43210",
        "message": "This is a very long message. " * 50,  # Over 1000 characters
        "expected_status": "error",
        "expected_error": "Message must be less than 1000 characters"
    },
    
    # Spam detection cases
    {
        "name": "John Doe",
        "phoneNumber": "+91 98765 43210",
        "message": "Check out this amazing offer at http://spam.com! Click here to win free prizes!",
        "expected_status": "error",
        "expected_error": "Message contains suspicious content"
    },
    {
        "name": "John Doe",
        "phoneNumber": "+91 98765 43210",
        "message": "Contact me at spam@example.com for more details",
        "expected_status": "error",
        "expected_error": "Message contains suspicious content"
    },
    
    # XSS prevention cases
    {
        "name": "John Doe",
        "phoneNumber": "+91 98765 43210",
        "message": "Hello <script>alert('xss')</script> world",
        "expected_status": "success"  # Should be sanitized, not rejected
    }
]

def test_validation():
    """Test the validation endpoints"""
    base_url = "http://localhost:8000/api/contact/submit/"
    
    print("🧪 Testing Contact Form Validation")
    print("=" * 50)
    
    passed = 0
    failed = 0
    
    for i, test_case in enumerate(test_cases, 1):
        print(f"\n📝 Test Case {i}: {test_case.get('expected_status', 'unknown').upper()}")
        print(f"Name: '{test_case['name']}'")
        print(f"Phone: '{test_case['phoneNumber']}'")
        print(f"Message: '{test_case['message'][:50]}{'...' if len(test_case['message']) > 50 else ''}'")
        
        try:
            response = requests.post(
                base_url,
                json=test_case,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            result = response.json()
            
            if test_case['expected_status'] == 'success':
                if response.status_code == 200 and result.get('success'):
                    print("✅ PASSED - Valid data accepted")
                    passed += 1
                else:
                    print(f"❌ FAILED - Expected success but got error: {result.get('message', 'Unknown error')}")
                    failed += 1
            else:
                if response.status_code == 400 and not result.get('success'):
                    print(f"✅ PASSED - Validation error caught: {result.get('message', 'Unknown error')}")
                    if 'expected_error' in test_case:
                        if test_case['expected_error'] in result.get('message', ''):
                            print("✅ PASSED - Correct error message")
                        else:
                            print(f"⚠️  WARNING - Expected error message '{test_case['expected_error']}' but got '{result.get('message', '')}'")
                    passed += 1
                else:
                    print(f"❌ FAILED - Expected validation error but got success or wrong status")
                    failed += 1
                    
        except requests.exceptions.ConnectionError:
            print("❌ FAILED - Could not connect to server. Make sure Django server is running.")
            failed += 1
        except Exception as e:
            print(f"❌ FAILED - Unexpected error: {str(e)}")
            failed += 1
    
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {passed} passed, {failed} failed")
    
    if failed == 0:
        print("�� All tests passed! Validation is working correctly.")
    else:
        print("⚠️  Some tests failed. Check the validation logic.")

if __name__ == "__main__":
    test_validation()
