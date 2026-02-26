# Customization Guide

## 🎨 Personalizing Your Portfolio

### 1. Basic Information

#### Update Your Details in Hero Section
**File: `components/sections/Hero.tsx`**

```typescript
// Line ~70-75
<h1 className="text-hero leading-tight mb-6">
  <span className="gradient-text">Your Name Here</span>
</h1>

// Line ~80-89
<TypeAnimation
  sequence={[
    "Your Title 1",
    2000,
    "Your Title 2",
    2000,
    // Add more titles
  ]}
/>
```

#### Update Location
**File: `components/sections/Contact.tsx`**

```typescript
// Line ~18-24
{
  icon: FiMapPin,
  title: "Location",
  value: "Your City, Your Country",
  link: null,
}
```

### 2. Social Media Links

**Files to update:**
- `components/sections/Contact.tsx` (Lines ~11-35)
- `components/Footer.tsx` (Lines ~13-45)

Replace with your actual social media URLs:
```typescript
{
  name: "LinkedIn",
  link: "https://www.linkedin.com/in/YOUR_USERNAME",
},
{
  name: "GitHub",
  link: "https://github.com/YOUR_USERNAME",
},
```

### 3. Resume/CV

1. Place your resume PDF in `public/resume.pdf`
2. Or change the link in `components/Header.tsx`:

```typescript
// Line ~106
<motion.a
  href="/your-custom-resume-name.pdf"
  download
>
```

### 4. About Section

**File: `components/sections/About.tsx`**

Update your bio (Lines ~80-120):
```typescript
<p>
  Write your personal story here...
</p>
```

Update stats (Lines ~135-144):
```typescript
const stats = [
  { icon: FiBriefcase, value: "X+", label: "Your Metric" },
  // Add your own stats
];
```

### 5. Education

**File: `components/sections/Education.tsx`**

Update education data (Lines ~7-32):
```typescript
const educationData = [
  {
    degree: "Your Degree",
    institution: "Your University",
    period: "Year - Year",
    // ... add your details
  },
];
```

### 6. Experience

**File: `components/sections/Experience.tsx`**

Modify experiences (Lines ~13-72):
```typescript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start - End",
    responsibilities: [
      "Your achievement 1",
      "Your achievement 2",
    ],
    technologies: ["Tech1", "Tech2"],
  },
];
```

### 7. Leadership Roles

**File: `components/sections/Leadership.tsx`**

Update leadership positions (Lines ~7-52):
```typescript
const leadershipRoles = [
  {
    title: "Your Leadership Position",
    organization: "Organization Name",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
];
```

Update impact stats (Lines ~54-59):
```typescript
const impactStats = [
  { value: "X+", label: "Your Metric", icon: FiUsers },
];
```

### 8. Skills

**File: `components/sections/Skills.tsx`**

Customize your skills (Lines ~26-76):
```typescript
const skillCategories = {
  "Your Category": [
    { 
      name: "Skill Name", 
      icon: SiIconName, 
      level: 85, // 0-100
      color: "#hexcolor" 
    },
  ],
};
```

### 9. Projects

**File: `components/sections/Projects.tsx`**

Add your projects (Lines ~8-95):
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description",
    technologies: ["Tech1", "Tech2"],
    liveLink: "https://project-url.com",
    githubLink: "https://github.com/user/repo",
    category: "Category",
    featured: true, // or false
    stats: {
      metric1: "value1",
      metric2: "value2",
    },
  },
];
```

**Adding Project Images:**
1. Place images in `public/projects/` folder
2. Update image path in project object:
```typescript
image: "/projects/your-image.jpg"
```

### 10. Contact Information

**File: `components/sections/Contact.tsx`**

Update email and contact details (Lines ~11-35):
```typescript
const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
];
```

### 11. EmailJS Setup

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
4. Update `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 12. SEO & Metadata

**File: `app/layout.tsx`**

Update metadata (Lines ~10-36):
```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your Name",
    url: "https://your-domain.com",
  },
};
```

### 13. Color Scheme

**File: `tailwind.config.ts`**

Customize colors (Lines ~12-34):
```typescript
colors: {
  primary: {
    // Choose your primary color shades
    500: "#0ea5e9", // Main color
    600: "#0284c7",
  },
}
```

### 14. Favicon

1. Generate favicon at [favicon.io](https://favicon.io/)
2. Place files in `public/` folder:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-32x32.png`
   - `favicon-16x16.png`

3. Add to `app/layout.tsx` in `<head>`:
```typescript
<link rel="icon" href="/favicon.ico" />
```

### 15. Google Analytics (Optional)

1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
  `}
</Script>
```

## 🎭 Advanced Customizations

### Custom Animations

Edit `app/globals.css` to add custom animations:
```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

### New Sections

1. Create new file in `components/sections/YourSection.tsx`
2. Import and add to `app/page.tsx`:
```typescript
import YourSection from "@/components/sections/YourSection";

<YourSection />
```

### Mobile Menu Customization

**File: `components/Header.tsx`**

Modify navigation links (Lines ~10-19):
```typescript
const navLinks = [
  { name: "Your Link", href: "#your-section" },
];
```

## 🔍 Testing Your Changes

After customizations:
1. Run `npm run dev`
2. Check all sections
3. Test on mobile (Chrome DevTools)
4. Verify all links work
5. Test contact form
6. Check console for errors

## 📱 Responsive Design Tips

- Test at breakpoints: 320px, 768px, 1024px, 1440px
- Use Chrome DevTools device mode
- Check on actual devices if possible
- Ensure text is readable at all sizes

## 🚀 Ready to Deploy?

Once customization is complete:
```bash
npm run build
npm start
```

If no errors, you're ready to deploy! See `DEPLOYMENT.md` for details.
