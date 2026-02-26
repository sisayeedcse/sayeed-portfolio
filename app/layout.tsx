import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayeed Ibne Saif | Software Engineer & Digital Strategist",
  description: "CSE undergraduate building scalable digital systems, high-performance eCommerce platforms, and leading tech communities in Chattogram, Bangladesh.",
  keywords: ["Software Engineer", "WordPress Developer", "Digital Strategist", "IEEE", "Web Development", "eCommerce"],
  authors: [{ name: "Sayeed Ibne Saif" }],
  openGraph: {
    title: "Sayeed Ibne Saif | Software Engineer & Digital Strategist",
    description: "CSE undergraduate building scalable digital systems and high-performance eCommerce platforms",
    url: "https://sayeed-portfolio.vercel.app",
    siteName: "Sayeed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayeed Ibne Saif | Software Engineer & Digital Strategist",
    description: "CSE undergraduate building scalable digital systems",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
