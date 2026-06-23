"use client";
import { useState, useEffect } from "react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { CV } from "@/components/sections/CV";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { navItems } from "@/lib/data";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "certifications", "cv", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-base)' }}>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-slate-200" style={{ background: 'var(--bg-base)' }}>
      <ParticleBackground />
      
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <CV />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}