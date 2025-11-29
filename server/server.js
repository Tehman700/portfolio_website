import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://your-portfolio.vercel.app'] // Update this after deploying frontend
    : ['http://localhost:5173', 'http://localhost:5174']
}));
app.use(express.json());

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'tehmanhassan@gmail.com',
    pass: process.env.EMAIL_PASS || 'eaxv ggrk bdzf mmcy'
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Send email route
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Email HTML template
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
          padding: 20px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .email-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .email-header h1 {
          margin: 0;
          font-size: 24px;
        }
        .email-body {
          padding: 30px;
        }
        .info-row {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          font-weight: bold;
          color: #667eea;
          margin-bottom: 5px;
        }
        .info-value {
          color: #555;
        }
        .message-content {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #667eea;
        }
        .email-footer {
          background: #f4f4f4;
          padding: 20px;
          text-align: center;
          color: #888;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class="email-body">
          <div class="info-row">
            <div class="info-label">From:</div>
            <div class="info-value">${name}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Email:</div>
            <div class="info-value">${email}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Subject:</div>
            <div class="info-value">${subject}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Message:</div>
            <div class="message-content">${message}</div>
          </div>
        </div>
        <div class="email-footer">
          <p>This email was sent from your portfolio contact form.</p>
          <p>Received on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Email options
  const mailOptions = {
    from: `"Portfolio Contact Form" <tehmanhassan@gmail.com>`,
    to: 'tehmanhassan@gmail.com',
    subject: `Portfolio: ${subject}`,
    replyTo: email,
    html: emailHTML
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
