"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { Download, FileText } from "lucide-react";

export function CV() {
  return (
    <section id="cv" className="py-24 px-4 relative overflow-hidden section-alt">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--blue)' }}>05. CV</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-3 tracking-tight">Mon curriculum vitae</h3>
          <p className="text-base mb-10" style={{ color: '#64748b' }}>
            Télécharge mon CV pour voir mon parcours complet.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            className="glass-card glass-card-hover rounded-2xl p-10 card-shine"
            whileHover={{ scale: 1.01 }}
          >
            {/* Icon */}
            <div className="mb-6 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.3), rgba(124,58,237,0.3))',
                  border: '1px solid rgba(139,92,246,0.3)',
                  boxShadow: '0 8px 32px rgba(79,70,229,0.2)',
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FileText className="w-9 h-9" style={{ color: 'var(--violet)' }} />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--blue)', boxShadow: '0 0 12px var(--blue)' }}>
                  <span className="text-[8px] text-white font-bold">FR</span>
                </div>
              </motion.div>
            </div>

            <h4 className="text-xl font-black text-slate-100 mb-1">Papa Makhemout Tall</h4>
            <p className="text-sm mb-7" style={{ color: '#64748b' }}>Développeur Full Stack</p>

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
