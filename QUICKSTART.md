# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies (2 minutes)
```bash
cd sayeed-portfolio
npm install
```

### Step 2: Set Up EmailJS (3 minutes)

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. Click "Add New Service" → Choose Gmail/Outlook
3. Click "Create New Template" → Use this template:

```
Subject: New Contact from {{from_name}}

Hello Sayeed,

You have a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Copy your Service ID, Template ID, and Public Key
5. Create `.env.local` file in root folder:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

🎉 **Done! Your portfolio is running!**

---

## 📝 Essential Customizations

### Update These 3 Files First:

#### 1. Hero Section: `components/sections/Hero.tsx`
- Line 70: Change name
- Line 80-89: Update titles in TypeAnimation
- Line 95: Update description

#### 2. Contact Info: `components/sections/Contact.tsx`
- Lines 11-35: Update email and social links

#### 3. About Section: `components/sections/About.tsx`
- Lines 80-120: Write your story

### Add Your Content:
- Replace `public/resume.txt` with `public/resume.pdf` (your actual resume)
- Update experience in `components/sections/Experience.tsx`
- Add your projects in `components/sections/Projects.tsx`

---

## 🔧 Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript Errors
```bash
# Generate types
npm run build
```

### Animations Not Working
- Check browser console for errors
- Ensure all dependencies installed correctly
- Try clearing browser cache

---

## 📱 Testing Checklist

- [ ] Navigate through all sections
- [ ] Test mobile menu (resize browser)
- [ ] Fill and submit contact form
- [ ] Click all social media links
- [ ] Test dark/light mode toggle
- [ ] Try resume download button
- [ ] Check scroll animations
- [ ] Test on actual mobile device

---

## 🚢 Deploy to Vercel (5 minutes)

### Option 1: Connect GitHub (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables (EmailJS keys)
6. Click "Deploy"

### Option 2: Deploy from CLI
```bash
npm i -g vercel
vercel login
vercel
```

---

## 💡 Pro Tips

1. **Use Images**: Add project screenshots to `public/projects/`
2. **Custom Domain**: Add in Vercel dashboard after deployment
3. **Analytics**: Set up Google Analytics for visitor tracking
4. **SEO**: Update metadata in `app/layout.tsx`
5. **Performance**: Run Lighthouse in Chrome DevTools

---

## 🆘 Need Help?

- **Documentation**: Read `CUSTOMIZATION.md` for detailed guide
- **Deployment**: Check `DEPLOYMENT.md` for hosting options
- **Issues**: Check [GitHub Issues](https://github.com/sisayeedcse/sayeed-portfolio/issues)

---

## ✅ You're All Set!

Your portfolio is ready. Now customize it, deploy it, and share it with the world! 🌍

Good luck! 🚀
