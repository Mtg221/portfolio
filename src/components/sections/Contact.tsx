"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { personalInfo } from "@/lib/data";
import { Mail, MessageCircle, Github, Linkedin, Download, Send, Zap } from "lucide-react";

const floatingIcons = [
  { Icon: Mail,    top: "12%", left: "5%",  dur: 5, delay: 0,   color: "var(--e-300)" },
  { Icon: Send,    top: "72%", left: "91%", dur: 4, delay: 1,   color: "var(--e-200)" },
  { Icon: Zap,     top: "80%", left: "4%",  dur: 6, delay: 2,   color: "var(--e-100)" },
  { Icon: Github,  top: "15%", left: "89%", dur: 3, delay: 0.5, color: "var(--e-400)" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {floatingIcons.map(({ Icon, top, left, dur, delay, color }, i) => (
        <motion.div key={i} className="absolute pointer-events-none" style={{ top, left }}
          animate={{ y: [-8, 8, -8], opacity: [0.15, 0.45, 0.15], rotate: [0, 12, 0] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </motion.div>
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,85,255,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(0,255,100,0.07)", border: "1px solid rgba(0,255,100,0.22)" }}
            animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[11px] font-mono font-bold text-green-400">Disponible · Open to work</span>
          </motion.div>

          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: "var(--e-300)" }}>06. Contact</h2>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Travaillons ensemble</h3>
          <p className="text-base mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: "#3a5a7a" }}>
            Disponible pour des opportunités de stage, des missions freelance ou des collaborations sur des projets ambitieux.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <GlowButton href={`mailto:${personalInfo.email}`} color="blue"
              className="flex items-center justify-center gap-2">
              <motion.div animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
                <Mail className="w-4 h-4" />
              </motion.div>
              {personalInfo.email}
            </GlowButton>
            <GlowButton href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer"
              variant="outline" color="blue"
              className="flex items-center justify-center gap-2">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <MessageCircle className="w-4 h-4" />
              </motion.div>
              WhatsApp
            </GlowButton>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.div className="glass-card glass-card-hover rounded-2xl p-6 card-shine"
            whileHover={{ scale: 1.01 }}>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-5" style={{ color: "var(--e-300)" }}>
              Retrouvez-moi sur
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              {[
                { href: personalInfo.github,   Icon: Github,   label: "GitHub" },
                { href: personalInfo.linkedin,  Icon: Linkedin, label: "LinkedIn" },
                { href: "/cv_fr.pdf",           Icon: Download, label: "Télécharger CV", dl: true },
              ].map(({ href, Icon, label, dl }) => (
                <motion.a key={label} href={href}
                  target={!dl ? "_blank" : undefined}
                  rel={!dl ? "noopener noreferrer" : undefined}
                  download={dl}
                  className="flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded-xl"
                  style={{ color: "#2a3f5a", background: "rgba(0,85,255,0.06)", border: "1px solid rgba(0,85,255,0.12)" }}
                  whileHover={{ scale: 1.06, y: -3, color: "var(--e-200)", borderColor: "rgba(0,153,255,0.35)", background: "rgba(0,85,255,0.12)" } as never}
                  whileTap={{ scale: 0.97 }}>
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Icon className="w-3.5 h-3.5" />
                  </motion.div>
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
