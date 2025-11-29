# 🚀 Portfolio Deployment Guide

Complete guide to deploy your portfolio to **Vercel (Frontend)** + **Render (Backend)**

---

## 📦 Prerequisites

1. GitHub account
2. Vercel account (sign up at https://vercel.com)
3. Render account (sign up at https://render.com)
4. Your code pushed to a GitHub repository

---

## PART 1: Deploy Backend to Render

### Step 1: Push Your Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render

1. Go to https://render.com and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name:** `portfolio-backend` (or any name you like)
   - **Region:** Choose closest to you
   - **Root Directory:** `server`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`

5. **Add Environment Variables** (Click "Advanced" → "Add Environment Variable"):
   - `NODE_ENV` = `production`
   - `EMAIL_USER` = `tehmanhassan@gmail.com`
   - `EMAIL_PASS` = `eaxv ggrk bdzf mmcy`
   - `PORT` = `5000`

6. Click **"Create Web Service"**

7. **IMPORTANT:** Copy your backend URL (it will look like: `https://portfolio-backend-xxxx.onrender.com`)

### Step 3: Update Backend CORS Settings

Once you have your Render backend URL, you'll need to update it after deploying the frontend (we'll do this in Part 3).

---

## PART 2: Deploy Frontend to Vercel

### Step 1: Deploy on Vercel

1. Go to https://vercel.com and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. **Add Environment Variable:**
   - Click **"Environment Variables"**
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com` (paste your Render URL from Part 1, Step 7)

6. Click **"Deploy"**

7. **IMPORTANT:** Copy your Vercel URL (it will look like: `https://your-portfolio-username.vercel.app`)

---

## PART 3: Update Backend CORS Settings

Now that you have both URLs, update your backend:

1. Go back to your Render dashboard
2. Go to your backend service
3. Go to **"Environment"** tab
4. Add a new environment variable:
   - `FRONTEND_URL` = `https://your-portfolio-username.vercel.app` (your Vercel URL)

5. **Update server.js CORS settings:**
   - In your local code, open `server/server.js`
   - Replace `'https://your-portfolio.vercel.app'` with your actual Vercel URL on line 14
   - Commit and push the changes:
   ```bash
   git add server/server.js
   git commit -m "Update CORS for production"
   git push
   ```

6. Render will automatically redeploy with the new settings

---

## ✅ Verification

### Test Your Deployed Site:

1. Visit your Vercel URL: `https://your-portfolio-username.vercel.app`
2. Navigate to the "Hire Me" section
3. Fill out the contact form and submit
4. Check your email at **tehmanhassan@gmail.com**

---

## 🎉 You're Done!

Your portfolio is now live on the internet!

- **Frontend:** https://your-portfolio-username.vercel.app
- **Backend:** https://portfolio-backend-xxxx.onrender.com

---

## 🔄 Future Updates

### To Update Frontend:
Just push to your GitHub repository:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel will automatically redeploy!

### To Update Backend:
Same process - push to GitHub and Render will auto-redeploy:
```bash
git add .
git commit -m "Update backend"
git push
```

---

## ⚠️ Important Notes

1. **Render Free Tier:** Your backend may sleep after 15 minutes of inactivity. First request after sleep may take 30-60 seconds.

2. **Custom Domain (Optional):**
   - In Vercel: Go to your project → Settings → Domains
   - In Render: Go to your service → Settings → Custom Domain

3. **Environment Variables:**
   - Never commit `.env` files to GitHub
   - Always use the platform's environment variable settings

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check browser console for errors
- Verify the `VITE_API_URL` in Vercel matches your Render backend URL
- Check Render logs for backend errors
- Make sure CORS settings are correct

**Backend not responding?**
- Render free tier sleeps - first request may be slow
- Check Render dashboard for deployment status
- Verify environment variables are set correctly

**Need help?**
- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
