"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, MessageCircle, Github, Linkedin, Download } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="max-w-2xl">
          <motion.div {...fade(0)} className="mb-12">
            <p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>06. Contact</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--text-bright)" }}>Travaillons ensemble</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              Disponible pour des opportunités de stage, des missions freelance ou des collaborations sur des projets ambitieux.
            </p>
          </motion.div>

          <motion.div {...fade(0.1)} className="flex flex-wrap gap-3 mb-10">
            <a href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--accent)", color: "#fff" }}>
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.color = "var(--text-bright)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div {...fade(0.2)} className="flex flex-wrap gap-3">
            {[
              { href: personalInfo.github,  Icon: Github,   label: "GitHub",          ext: true  },
              { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn",         ext: true  },
              { href: "/cv_fr.pdf",          Icon: Download, label: "Télécharger CV",   dl:  true  },
            ].map(({ href, Icon, label, ext, dl }) => (
              <a key={label} href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                download={dl}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.color = "var(--text-bright)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}>
                <Icon className="w-3.5 h-3.5" />
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
