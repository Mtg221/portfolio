"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 overflow-hidden" style={{ background: '#020310' }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px glow-divider" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div
          className="text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono" style={{ color: '#374151' }}>
            Conçu & développé par{" "}
            <span style={{ color: 'var(--violet)' }} className="font-bold">{personalInfo.name}</span>
            {" "}· {year}
          </p>
        </motion.div>

        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { href: personalInfo.github,            icon: Github,   label: "GitHub" },
            { href: personalInfo.linkedin,          icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: Mail,     label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.12)', color: '#374151' }}
              whileHover={{ scale: 1.1, y: -2, color: 'var(--violet)', borderColor: 'rgba(167,139,250,0.3)', background: 'rgba(167,139,250,0.1)' }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
