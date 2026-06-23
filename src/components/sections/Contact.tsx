"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { personalInfo } from "@/lib/data";
import { Mail, MessageCircle, Github, Linkedin, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Central aurora glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.08) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--violet)' }}>06. Contact</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-4 tracking-tight">
            Travaillons ensemble
          </h3>
          <p className="text-base mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: '#64748b' }}>
            Disponible pour des opportunités de stage, des missions freelance ou des collaborations sur des projets ambitieux.
          </p>
        </AnimatedSection>

        {/* Primary CTAs */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <GlowButton href={`mailto:${personalInfo.email}`} color="blue"
              className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </GlowButton>
            <GlowButton href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer"
              variant="outline" color="green"
              className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </GlowButton>
          </div>
        </AnimatedSection>

        {/* Social links card */}
        <AnimatedSection delay={0.4}>
          <motion.div
            className="glass-card glass-card-hover rounded-2xl p-6 card-shine"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--blue)' }}>
              Retrouvez-moi sur
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              {[
                { href: personalInfo.github,  icon: Github,   label: "GitHub",           color: '#94a3b8' },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn",          color: '#60a5fa' },
                { href: "/cv_fr.pdf",          icon: Download, label: "Télécharger CV",   color: '#a78bfa', download: true },
              ].map(({ href, icon: Icon, label, color, download }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={!download ? "_blank" : undefined}
                  rel={!download ? "noopener noreferrer" : undefined}
                  download={download}
                  className="flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded-xl transition-all duration-300"
                  style={{
                    color: '#64748b',
                    background: 'rgba(99,102,241,0.06)',
                    border: '1px solid rgba(99,102,241,0.12)',
                  }}
                  whileHover={{ scale: 1.06, y: -2, color, borderColor: `${color}40`, background: `${color}10` }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
