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
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-blue-400 text-sm font-mono animate-pulse">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
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