"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface HeroProps { scrollTo: (id: string) => void; }

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full py-20">
        <motion.div {...fade(0)} className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#4ade80" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponible · Open to work
          </span>
        </motion.div>

        <motion.h1 {...fade(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] mb-6"
          style={{ color: "var(--text-bright)" }}>
          Papa Makhemout<br />
          <span style={{ color: "var(--accent)" }}>Tall.</span>
        </motion.h1>

        <motion.p {...fade(0.2)}
          className="text-lg md:text-xl max-w-xl mb-4 leading-relaxed"
          style={{ color: "var(--text)" }}>
          Développeur Full Stack basé à Dakar — je construis des applications web complètes, rapides et orientées produit.
        </motion.p>

        <motion.p {...fade(0.25)} className="text-sm font-mono mb-10" style={{ color: "var(--text-dim)" }}>
          React · Node.js · MongoDB · TypeScript
        </motion.p>

        <motion.div {...fade(0.35)} className="flex flex-wrap gap-3 mb-12">
          <button onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}>
            Voir mes projets
          </button>
          <a href="/cv_fr.pdf" download
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ border: "1px solid var(--border)", color: "var(--text)", background: "transparent" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.color = "var(--text-bright)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}>
            Télécharger CV ↓
          </a>
        </motion.div>

        <motion.div {...fade(0.45)} className="flex gap-6">
          {[
            { href: personalInfo.github,            Icon: Github,   label: "GitHub" },
            { href: personalInfo.linkedin,          Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, Icon: Mail,     label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--text-dim)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text-bright)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"}>
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-200"
        style={{ color: "var(--text-dim)" }}
        animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text)"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"}>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
