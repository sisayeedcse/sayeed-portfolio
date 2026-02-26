"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Leadership from "@/components/sections/Leadership";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Leadership />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
