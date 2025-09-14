# Contact Form Implementation

This document describes the complete contact form implementation for the Trilok Singh Jabinda Lawn website.

## Features Implemented

### 1. Frontend Form (React)
- **Form Fields**: Name, Phone Number, Message
- **Validation**: Client-side validation for required fields
- **Loading States**: Submit button shows loading state during submission
- **Status Messages**: Success/error messages displayed to user
- **Form Reset**: Form clears after successful submission
- **Responsive Design**: Works on all device sizes

### 2. Backend API (Django)
- **Database Storage**: All inquiries stored in MySQL database
- **Email Notifications**: Admin receives immediate email notifications
- **Data Validation**: Server-side validation of form data
- **Error Handling**: Comprehensive error handling and responses
- **CORS Support**: Configured for frontend integration

### 3. Database Model
- **ContactInquiry Model**: Stores all form submissions
- **Fields**: name, phone_number, message, created_at, is_read, is_responded
- **Admin Interface**: Full admin panel for managing inquiries
- **Status Tracking**: Track read/responded status of inquiries

## Email Configuration

**Configured Email**: `kolekargauri8@gmail.com`

The contact form is pre-configured to use `kolekargauri8@gmail.com` for:
- **From Email**: All outgoing emails
- **Admin Email**: Form submission notifications
- **SMTP Settings**: Gmail SMTP server

### Gmail Setup Required

To enable email notifications, you need to:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password** for this application
3. **Update the .env file** with your App Password

#### Steps to get Gmail App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Factor Authentication** if not already enabled
3. Go to **App passwords** section
4. Generate a new app password for **Mail**
5. Copy the 16-character password
6. Update `EMAIL_HOST_PASSWORD` in `.env` file

## File Structure

```
backend/
├── apps/
│   └── contact/
│       ├── __init__.py
│       ├── admin.py          # Admin interface configuration
│       ├── apps.py           # App configuration
│       ├── models.py         # ContactInquiry model
│       ├── urls.py           # URL routing
│       └── views.py          # API endpoints
├── config/
│   └── settings/
│       └── base.py           # Updated with email and CORS settings
└── requirements.txt          # Updated with django-cors-headers

frontend/
├── src/
│   ├── components/
│   │   └── Contact.jsx       # Updated with API integration
│   └── styles/
│       └── contact.css       # Updated with status message styling
└── package.json              # No changes needed

.env.example                  # Environment variables template
setup_contact_form.sh         # Setup script
```

## Setup Instructions

### 1. Backend Setup
```bash
# Run the setup script
./setup_contact_form.sh

# Or manually:
cd backend
pip3 install -r requirements.txt
cp ../.env.example .env
# Edit .env with your settings
python3 manage.py makemigrations contact
python3 manage.py migrate
python3 manage.py runserver
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Environment Configuration
Edit `.env` file with your settings:
```env
# Database Settings
DB_NAME=trilok_lawn
DB_USER=root
DB_PASSWORD=your-password

# Email Settings (Pre-configured for Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=kolekargauri8@gmail.com
EMAIL_HOST_PASSWORD=your-gmail-app-password
DEFAULT_FROM_EMAIL=kolekargauri8@gmail.com
ADMIN_EMAIL=kolekargauri8@gmail.com
```

## API Endpoints

### POST /api/contact/submit/
Submit contact form data

**Request Body:**
```json
{
  "name": "John Doe",
  "phoneNumber": "+1234567890",
  "message": "I would like to book your lawn for a wedding."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your inquiry! We will contact you soon.",
  "inquiry_id": 123
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "All fields are required."
}
```

## Database Schema

### ContactInquiry Table
| Field | Type | Description |
|-------|------|-------------|
| id | AutoField | Primary key |
| name | CharField(100) | Customer name |
| phone_number | CharField(15) | Phone number |
| message | TextField | Inquiry message |
| created_at | DateTimeField | Submission timestamp |
| is_read | BooleanField | Admin read status |
| is_responded | BooleanField | Response status |

## Email Notifications

When a form is submitted:
1. Data is saved to database
2. Email is sent to `kolekargauri8@gmail.com` with inquiry details
3. Email includes: name, phone, message, timestamp
4. Admin can respond directly to customer

**Email Subject**: "New Contact Inquiry from [Customer Name]"

**Email Content**:
```
New contact inquiry received:

Name: [Customer Name]
Phone: [Phone Number]
Message: [Customer Message]

Received at: [Timestamp]

Please respond to this inquiry as soon as possible.
```

## Admin Panel Features

Access at: `http://localhost:8000/admin/`

- **View All Inquiries**: List all form submissions
- **Filter & Search**: Filter by read status, date, search by name/phone
- **Status Management**: Mark inquiries as read/responded
- **Bulk Actions**: Select multiple inquiries for bulk operations
- **Detailed View**: See full inquiry details

## Error Handling

### Frontend Errors
- Network errors (connection issues)
- Server errors (500, 400 responses)
- Validation errors (missing fields)
- User feedback with clear error messages

### Backend Errors
- JSON parsing errors
- Database connection errors
- Email sending failures (logged but doesn't fail request)
- Validation errors with appropriate HTTP status codes

## Security Features

- **CSRF Protection**: Disabled for API endpoint (appropriate for this use case)
- **Input Validation**: Both client and server-side validation
- **SQL Injection Protection**: Using Django ORM
- **XSS Protection**: Proper data sanitization
- **CORS Configuration**: Restricted to frontend domains

## Testing the Implementation

1. **Start Backend**: `python3 manage.py runserver`
2. **Start Frontend**: `npm run dev`
3. **Visit**: `http://localhost:5173`
4. **Submit Form**: Fill and submit contact form
5. **Check Database**: Verify data in admin panel
6. **Check Email**: Verify email received at `kolekargauri8@gmail.com`

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure CORS settings include frontend URL
2. **Database Errors**: Check database connection settings
3. **Email Not Sending**: 
   - Verify Gmail App Password is correct
   - Check 2-Factor Authentication is enabled
   - Verify email settings in .env file
4. **Migration Errors**: Run `python3 manage.py migrate` again

### Debug Mode
Set `DJANGO_DEBUG=True` in `.env` for detailed error messages.

## Email Testing

To test email functionality:

1. **Submit a test form** on the website
2. **Check your Gmail inbox** at `kolekargauri8@gmail.com`
3. **Look for email** with subject "New Contact Inquiry from [Name]"
4. **Verify email content** includes all form data

If emails are not received:
- Check spam folder
- Verify Gmail App Password is correct
- Check Django logs for email errors
- Ensure 2-Factor Authentication is enabled

## Future Enhancements

- **Email Templates**: HTML email templates for better formatting
- **SMS Notifications**: Add SMS notifications for urgent inquiries
- **Auto-Response**: Send automatic confirmation emails to customers
- **Analytics**: Track form submission metrics
- **File Uploads**: Allow customers to upload event photos/requirements
- **Calendar Integration**: Show available dates for booking
