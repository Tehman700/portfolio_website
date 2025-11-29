# Email Functionality Setup

The email functionality now uses **Vercel Serverless Functions** instead of a separate backend server. This means everything deploys together - no separate backend deployment needed!

## How It Works

- The contact form sends data to `/api/send-email`
- This endpoint is a serverless function that runs on Vercel
- The function uses Nodemailer to send emails via Gmail SMTP
- Everything deploys automatically when you push to Vercel

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Important:** You need to use a Gmail App Password, not your regular password.

#### How to get a Gmail App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Select Security
3. Under "Signing in to Google," select 2-Step Verification (you must have this enabled)
4. At the bottom, select App passwords
5. Select "Mail" and your device, then click Generate
6. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)
7. Use this password in your `.env.local` file

### 2. Local Development

For local development with the serverless function working:

```bash
# Option 1: Use Vercel CLI (Recommended - tests serverless functions locally)
npm install -g vercel
npm run dev:vercel

# Option 2: Regular Vite dev server (API won't work locally)
npm run dev
```

**Note:** If you use regular `npm run dev`, the contact form won't work locally because the serverless function needs Vercel's environment to run. Use `npm run dev:vercel` instead.

### 3. Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel: https://vercel.com/new
3. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `EMAIL_USER` with your Gmail address
   - Add `EMAIL_PASS` with your Gmail app password
4. Deploy!

The serverless function will automatically deploy with your frontend.

## File Structure

```
portfolio-app/
├── api/
│   └── send-email.js          # Vercel serverless function
├── src/
│   └── components/
│       └── Contact/
│           └── Contact.jsx     # Contact form component
├── .env.local                  # Local environment variables (gitignored)
├── .env.example                # Example environment variables
└── vercel.json                 # Vercel configuration
```

## Removing the Old Server

You can now safely:
1. Delete the `server/` directory
2. Remove any backend deployment from Render or other platforms
3. Remove the `VITE_API_URL` environment variable (no longer needed)

## Troubleshooting

### Contact form doesn't work locally
- Make sure you're using `npm run dev:vercel` instead of `npm run dev`
- Check that `.env.local` exists and has the correct credentials
- Verify you're using a Gmail App Password, not your regular password

### Email not sending in production
- Check Vercel environment variables are set correctly
- Check Vercel function logs: Project → Deployments → Click deployment → Functions tab
- Verify Gmail App Password is still valid

### "Less secure app" error
- Make sure you're using an App Password, not your regular Gmail password
- App Passwords require 2-Step Verification to be enabled on your Google account
