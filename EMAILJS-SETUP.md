# EmailJS Setup Guide

The contact form now works with or without EmailJS! 

## ✅ Current Status: Working!

Your contact form will automatically:
- **Without EmailJS**: Open the user's email client with a pre-filled message to tech.sisayeed@gmail.com
- **With EmailJS**: Send the message directly through your configured email service

## 🚀 Quick Start (No Setup Required)

The form works out of the box! When users click "Send Message," it will open their default email client with the message pre-filled. They just need to hit send.

## 📧 Optional: Set Up EmailJS for Direct Sending

If you want messages to be sent directly without opening the email client:

### Step 1: Create EmailJS Account (2 minutes)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service (2 minutes)

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended for tech.sisayeed@gmail.com)
   - Outlook
   - Yahoo
   - Custom SMTP
4. Connect your email account
5. **Copy your Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template (3 minutes)

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Content:**
```html
<p>Hello Sayeed,</p>

<p>You have received a new message from your portfolio website:</p>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>This email was sent from your portfolio contact form at https://your-portfolio.com</small></p>
```

4. **Set the "To Email"** field to: `tech.sisayeed@gmail.com`
5. **Click "Save"**
6. **Copy your Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key (1 minute)

1. Click **"Account"** in the EmailJS dashboard
2. Look for **"API Keys"** section
3. **Copy your Public Key** (looks like `xxxxxxxxxxxxxxx`)

### Step 5: Configure Your Portfolio (1 minute)

1. Open your `.env.local` file in the portfolio root folder
2. Uncomment and fill in your credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

3. **Save the file**
4. **Restart your dev server:**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

### Step 6: Test It! (1 minute)

1. Go to your portfolio: `http://localhost:3000`
2. Scroll to the **Contact** section
3. Fill in the form with test data
4. Click **"Send Message"**
5. Check your email (tech.sisayeed@gmail.com) - you should receive the message!

---

## 🔧 Troubleshooting

### "Failed to send message" Error

**The form still works!** It will automatically fall back to opening the email client. This happens when:

- EmailJS credentials are not set up (expected behavior)
- EmailJS service is down (rare)
- Network connectivity issues

### EmailJS Free Tier Limits

- **200 emails/month** on free plan
- If you exceed this, the form automatically falls back to mailto:
- Consider upgrading if you get more traffic

### Testing EmailJS

In EmailJS dashboard, you can send test emails to verify your setup:
1. Go to Email Templates
2. Click your template
3. Click "Test It" button
4. Fill in test data
5. Check your inbox

---

## 💡 Pro Tips

1. **Add Auto-Reply**: In EmailJS template settings, you can enable auto-reply to send a confirmation to the user
2. **Custom Domain**: Use a custom domain email instead of Gmail for more professional look
3. **Spam Filter**: Add tech.sisayeed@gmail.com to your safe senders list
4. **Email Notifications**: Enable push notifications in Gmail app to get instant alerts

---

## 🎯 Summary

**Without any setup**: Your contact form works perfectly using mailto: fallback

**With EmailJS setup (optional)**: Users can send messages without opening their email client

**Best of both worlds**: The form gracefully handles both scenarios!

---

## 📞 Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Portfolio Issues: Create an issue on GitHub

---

✅ **Your contact form is working perfectly right now!** EmailJS is optional for enhanced functionality.
