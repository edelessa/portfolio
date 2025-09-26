# 📧 Email Setup Guide

## How to Set Up Email Notifications for Contact Form

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to your Google Account settings
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the prompts to enable 2FA

### Step 2: Generate App Password
1. In Google Account settings, go to "Security"
2. Under "Signing in to Google", click "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Portfolio Contact Form"
5. Click "Generate"
6. Copy the 16-character password (no spaces)

### Step 3: Update Your .env File
Replace `your_gmail_app_password` in your `.env` file with the app password:

```
EMAIL_USER=edel.m.waters@gmail.com
EMAIL_PASS=your_16_character_app_password_here
```

### Step 4: Test the Setup
1. Start your backend server: `npm run server`
2. Submit a test contact form
3. Check your email at edel.m.waters@gmail.com

## 📧 What You'll Receive

When someone submits your contact form, you'll get an email with:
- ✅ **Sender's name and email**
- ✅ **Subject line**
- ✅ **Full message content**
- ✅ **Timestamp**
- ✅ **Professional HTML formatting**

## 🔒 Security Notes

- ✅ **App passwords are secure** - they're different from your regular password
- ✅ **Can be revoked anytime** if needed
- ✅ **Only works for this specific app**
- ✅ **Messages are still saved to database** even if email fails

## 🚀 Deployment

When you deploy to Render:
1. Add these environment variables in Render dashboard:
   - `EMAIL_USER=edel.m.waters@gmail.com`
   - `EMAIL_PASS=your_app_password`
2. Your contact form will work on your live site!

## 🎯 Result

Every contact form submission will:
1. ✅ **Save to your database** (as before)
2. ✅ **Send you an email notification** (new!)
3. ✅ **Show success message to user**

You'll never miss a potential client or opportunity again!
