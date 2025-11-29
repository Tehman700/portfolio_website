# Portfolio Contact Form Backend

This is the backend server for handling contact form submissions from your portfolio website.

## Setup Instructions

### 1. Install Dependencies

Navigate to the server folder and install the required packages:

```bash
cd server
npm install
```

### 2. Start the Server

To start the server in development mode:

```bash
npm run dev
```

Or to start in production mode:

```bash
npm start
```

The server will run on `http://localhost:5000`

### 3. Start Your React App

In a separate terminal, navigate back to the root folder and start your React app:

```bash
cd ..
npm run dev
```

## How It Works

1. When a user fills out the contact form and clicks "Send Message"
2. The form data is sent to the backend server at `http://localhost:5000/api/send-email`
3. The server uses Nodemailer with Gmail SMTP to send a beautifully formatted email to: **tehmanhassan@gmail.com**
4. The email includes:
   - Sender's name
   - Sender's email address
   - Subject
   - Message
   - Timestamp

## Email Configuration

The server is already configured with:
- **Email:** tehmanhassan@gmail.com
- **SMTP Service:** Gmail
- **App Password:** Already configured in server.js

## Features

✅ Beautiful HTML email template with gradient header
✅ Professional formatting
✅ Reply-to address set to sender's email
✅ Error handling
✅ Success/Error feedback to user
✅ CORS enabled for frontend communication

## API Endpoints

### GET `/api/test`
Test endpoint to verify server is running.

### POST `/api/send-email`
Sends an email with the contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about your services",
  "message": "Hi, I would like to hire you for a project..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Failed to send email. Please try again later."
}
```

## Notes

- The server must be running for the contact form to work
- Make sure both the server (port 5000) and the React app (port 5173) are running
- The email will be sent from tehmanhassan@gmail.com to tehmanhassan@gmail.com
- The reply-to address will be set to the sender's email for easy responses
