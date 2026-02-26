# Sayeed Ibne Saif - Portfolio Website 🚀

A modern, sleek, and fully responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](preview.png)

## ✨ Features

- 🎨 **Modern Design**: Futuristic, clean, and premium design with glassmorphism effects
- ⚡ **High Performance**: Optimized for speed with Next.js 14 and App Router
- 🎭 **Smooth Animations**: Advanced animations using Framer Motion and GSAP
- 📱 **Fully Responsive**: Perfect experience across all devices
- 🌙 **Dark/Light Mode**: Toggle between themes with smooth transitions
- 🎯 **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- ♿ **Accessible**: ARIA support and keyboard navigation
- 📧 **Contact Form**: Integrated with EmailJS for seamless communication 
- 🎨 **Custom Cursor**: Interactive custom cursor effect (desktop)
- 📊 **Animated Stats**: Counting animations and progress bars
- 🔄 **Scroll Animations**: Smooth reveal animations on scroll
- ⬆️ **Back to Top**: Animated button for easy navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
sayeed-portfolio/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with typing animation
│   │   ├── About.tsx        # About section with stats
│   │   ├── Education.tsx    # Timeline-based education section
│   │   ├── Experience.tsx   # Experience cards with animations
│   │   ├── Leadership.tsx   # Leadership roles and impact
│   │   ├── Skills.tsx       # Tabbed skills with progress bars
│   │   ├── Projects.tsx     # Project showcase with filters
│   │   └── Contact.tsx      # Contact form with EmailJS
│   ├── BackToTop.tsx        # Back to top button
│   ├── CustomCursor.tsx     # Custom cursor effect
│   ├── Footer.tsx           # Footer with social links
│   ├── Header.tsx           # Sticky navbar with mobile menu
│   ├── ParticlesBackground.tsx  # Animated particles
│   ├── ScrollProgress.tsx   # Scroll progress indicator
│   └── ThemeProvider.tsx    # Theme context provider
├── public/
│   └── resume.pdf           # Resume file for download
├── .env.local.example       # Environment variables template
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sisayeedcse/sayeed-portfolio.git
cd sayeed-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory (optional - form works without it):

```env
# Optional: Configure EmailJS for direct email sending
# Without these, the form will use mailto: fallback
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note**: The contact form works perfectly without EmailJS! It will use your default email client as a fallback. See [EMAILJS-SETUP.md](EMAILJS-SETUP.md) for optional EmailJS configuration.

To get EmailJS credentials (optional):
- Sign up at [EmailJS](https://www.emailjs.com/)
- Create an email service
- Create an email template
- Copy your service ID, template ID, and public key

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **components/sections/Hero.tsx** - Name, titles, and description
2. **components/sections/About.tsx** - About text and stats
3. **components/sections/Education.tsx** - Educational background
4. **components/sections/Experience.tsx** - Work experience
5. **components/sections/Leadership.tsx** - Leadership roles
6. **components/sections/Skills.tsx** - Skills and expertise
7. **components/sections/Projects.tsx** - Portfolio projects
8. **components/sections/Contact.tsx** - Contact information
9. **components/Footer.tsx** - Social media links

### Colors and Theme

Modify `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: { ... }, // Change primary color
  dark: { ... },    // Change dark theme colors
}
```

### Animations

Adjust animation speeds and styles in `app/globals.css`:

```css
@keyframes float { ... }
@keyframes glow { ... }
```

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Adding Your Resume

Place your resume PDF in the `public` folder as `resume.pdf`. The download button in the header will automatically link to it.

## 🎯 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minimal dependencies
- ✅ Optimized animations with GPU acceleration
- ✅ SSR and SSG for faster initial load

## 🐛 Known Issues

- Custom cursor may not work on touch devices (intentional)
- Animations might be reduced for users with motion preferences

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sisayeedcse/sayeed-portfolio/issues).

## 💖 Support

If you like this project, please give it a ⭐ on GitHub!

## 📬 Contact

**Sayeed Ibne Saif**

- Location: Chattogram, Bangladesh
- Email: tech.sisayeed@gmail.com
- LinkedIn: [linkedin.com/in/sisayeedofficial](https://www.linkedin.com/in/sisayeedofficial/)
- GitHub: [@sisayeedcse](https://github.com/sisayeedcse)
- Instagram: [@s.i.s_sayeed](https://www.instagram.com/s.i.s_sayeed/)
- Facebook: [S.I.Sayeed.official](https://www.facebook.com/S.I.Sayeed.official/)
- X/Twitter: [@SISayeed31](https://x.com/SISayeed31)

---

Built with 💙 using Next.js and Tailwind CSS
This is my personal portfolio with all my experiences
