#!/bin/bash

echo "Setting up Contact Form Backend..."

# Navigate to backend directory
cd backend

# Install Python dependencies
echo "Installing Python dependencies..."
pip3 install -r requirements.txt

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file from example..."
    cp ../.env.example .env
    echo ""
    echo "IMPORTANT: Email Configuration Required!"
    echo "======================================"
    echo "The contact form is configured to use: kolekargauri8@gmail.com"
    echo ""
    echo "To enable email notifications, you need to:"
    echo "1. Enable 2-Factor Authentication on your Gmail account"
    echo "2. Generate an App Password for this application"
    echo "3. Update the .env file with your App Password"
    echo ""
    echo "Steps to get Gmail App Password:"
    echo "1. Go to https://myaccount.google.com/security"
    echo "2. Enable 2-Factor Authentication if not already enabled"
    echo "3. Go to 'App passwords' section"
    echo "4. Generate a new app password for 'Mail'"
    echo "5. Copy the 16-character password"
    echo "6. Update EMAIL_HOST_PASSWORD in .env file"
    echo ""
    echo "Please edit .env file with your database and email settings"
fi

# Create database migrations
echo "Creating database migrations..."
python3 manage.py makemigrations contact

# Apply migrations
echo "Applying database migrations..."
python3 manage.py migrate

echo ""
echo "Contact form backend setup complete!"
echo ""
echo "Email Configuration:"
echo "- From Email: kolekargauri8@gmail.com"
echo "- Admin Email: kolekargauri8@gmail.com"
echo "- SMTP Host: smtp.gmail.com"
echo "- Port: 587 (TLS)"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your database and Gmail App Password"
echo "2. Start the Django server: python3 manage.py runserver"
echo "3. Start the frontend: cd ../frontend && npm run dev"
echo ""
echo "The contact form will be available at:"
echo "- Frontend: http://localhost:5173"
echo "- Backend API: http://localhost:8000/api/contact/submit/"
echo "- Admin Panel: http://localhost:8000/admin/"
echo ""
echo "Test the form by submitting an inquiry - you should receive an email at kolekargauri8@gmail.com"
