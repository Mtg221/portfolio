"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { Download, FileText, Briefcase, MapPin, Code2 } from "lucide-react";

const floatingBadges = [
  { icon: Code2,     text: "Full Stack",    top: "20%", left: "5%",  dur: 4, delay: 0,   color: "var(--blue)" },
  { icon: MapPin,    text: "Dakar, SN",     top: "70%", left: "88%", dur: 5, delay: 1,   color: "var(--cyan)" },
  { icon: Briefcase, text: "Open to work",  top: "75%", left: "4%",  dur: 3, delay: 0.5, color: "var(--green)" },
];

export function CV() {
  return (
    <section id="cv" className="py-24 px-4 relative overflow-hidden section-alt">
      <div className="absolute inset-0 cyber-grid opacity-18 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Floating info badges */}
      {floatingBadges.map(({ icon: Icon, text, top, left, dur, delay, color }, i) => (
        <motion.div key={i}
          className="absolute hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg pointer-events-none"
          style={{ top, left, background: "rgba(8,9,28,0.7)", border: "1px solid rgba(99,102,241,0.18)", backdropFilter: "blur(8px)" }}
          animate={{ y: [-4, 4, -4], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}>
          <Icon className="w-3 h-3" style={{ color }} />
          <span className="text-[10px] font-mono font-bold" style={{ color }}>{text}</span>
        </motion.div>
      ))}

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>05. CV</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-3 tracking-tight">Mon curriculum vitae</h3>
          <p className="text-base mb-10" style={{ color: "#64748b" }}>
            Télécharge mon CV pour voir mon parcours complet.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div className="glass-card glass-card-hover rounded-2xl p-10 card-shine"
            whileHover={{ scale: 1.01 }}>
            {/* Animated icon */}
            <div className="mb-7 flex items-center justify-center">
              <motion.div
                className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(79,70,229,0.3), rgba(124,58,237,0.3))",
                  border: "1px solid rgba(139,92,246,0.3)",
                  boxShadow: "0 8px 32px rgba(79,70,229,0.2)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
              >
                <FileText className="w-10 h-10" style={{ color: "var(--violet)" }} />
                {/* FR badge */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white"
                  style={{ background: "var(--blue)", boxShadow: "0 0 12px var(--blue)" }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  FR
                </motion.div>
                {/* Download indicator */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                  animate={{ y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className="w-4 h-4" style={{ color: "var(--cyan)" }} />
                </motion.div>
              </motion.div>
            </div>

            <h4 className="text-xl font-black text-slate-100 mb-1">Papa Makhemout Tall</h4>
            <p className="text-sm mb-2" style={{ color: "#64748b" }}>Développeur Full Stack</p>

            {/* Tags */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
              {["React", "Node.js", "MongoDB", "TypeScript"].map((t) => (
                <motion.span key={t}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}
                  whileHover={{ scale: 1.1, y: -2 }}>
                  {t}
                </motion.span>
              ))}
            </div>

            <GlowButton href="/cv_fr.pdf" download color="blue" className="mx-auto">
              <Download className="w-4 h-4 mr-2 inline" />
              Télécharger mon CV (PDF)
            </GlowButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
