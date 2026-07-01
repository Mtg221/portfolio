"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface HeroProps { scrollTo: (id: string) => void; }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24">

        <motion.p
          className="text-xs font-mono text-[#555555] mb-8 tracking-widest uppercase"
          {...fadeUp(0)}
        >
          Développeur Full Stack · Dakar, Sénégal
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.0] mb-8"
          {...fadeUp(0.1)}
        >
          {personalInfo.firstName}
          <br />
          {personalInfo.lastName}
          <span className="text-[#aaaaaa]">.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-[#333333] max-w-xl leading-relaxed mb-12"
          {...fadeUp(0.2)}
        >
          Je transforme des idées en applications web complètes — systèmes rapides, propres et évolutifs adaptés aux besoins réels.
        </motion.p>

        <motion.div className="flex flex-wrap gap-3 mb-16" {...fadeUp(0.3)}>
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium hover:bg-[#333] transition-colors"
          >
            Voir mes projets
          </button>
          <a
            href="/cv_fr.pdf"
            download
            className="px-6 py-2.5 border border-[#e5e5e5] text-sm font-medium text-[#333333] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
          >
            Télécharger CV
          </a>
        </motion.div>

        <motion.div className="flex items-center gap-6" {...fadeUp(0.4)}>
          {[
            { href: personalInfo.github,            Icon: Github,   label: "GitHub" },
            { href: personalInfo.linkedin,          Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, Icon: Mail,     label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 text-xs text-[#555555] hover:text-[#0a0a0a] transition-colors"
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto w-full pb-12">
        <div className="h-px bg-[#e5e5e5]" />
        <div className="flex gap-12 pt-8">
          {[
            { value: "5+", label: "Projets" },
            { value: "10+", label: "Technologies" },
            { value: "3", label: "Langues" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-black">{value}</p>
              <p className="text-xs text-[#555555] mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
