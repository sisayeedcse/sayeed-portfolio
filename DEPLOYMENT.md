# Deployment Guide

## Vercel Deployment (Recommended)

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - Custom domain can be added in Settings

### Automatic Deployments

Every push to `main` branch will trigger automatic deployment.

## Alternative Platforms

### Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

### Railway

```bash
railway login
railway init
railway up
```

### AWS Amplify

1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy

## Custom Domain

### Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS records as instructed

### DNS Configuration

Add these records to your DNS:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Post-Deployment Checklist

- [ ] Test all sections on mobile
- [ ] Test contact form
- [ ] Check all links work
- [ ] Verify SEO meta tags
- [ ] Test dark/light mode
- [ ] Check performance with Lighthouse
- [ ] Set up Google Analytics (optional)

## Performance Tips

1. **Images**: Optimize images before uploading (use WebP format)
2. **Fonts**: Use font-display: swap for custom fonts
3. **Analytics**: Add analytics after deployment
4. **Monitoring**: Set up Vercel Analytics or similar

## Troubleshooting

### Build Errors
- Check Node.js version (18+)
- Clear `.next` folder and rebuild
- Verify all dependencies are installed

### Environment Variables Not Working
- Prefix must be `NEXT_PUBLIC_` for client-side variables
- Redeploy after adding variables

### EmailJS Not Working
- Verify credentials in .env.local
- Check EmailJS dashboard for service status
- Ensure template is properly configured
