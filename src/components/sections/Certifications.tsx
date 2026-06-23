"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { certifications } from "@/lib/data";
import { ExternalLink, Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--cyan)' }}>04. Certifications</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-10 tracking-tight">Certifications obtenues</h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.id} delay={index * 0.12}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block group">
                <motion.div
                  className="rounded-2xl p-6 card-shine glass-card glass-card-hover"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${cert.color}18`,
                          border: `1px solid ${cert.color}30`,
                        }}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Award className="w-6 h-6" style={{ color: cert.color }} />
                      </motion.div>
                      <div>
                        <p className="text-xs font-mono font-bold" style={{ color: cert.color }}>{cert.issuer}</p>
                        <p className="text-[10px] mt-0.5" style={{ color: '#4b5563' }}>{cert.date}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono flex items-center gap-1 transition-colors duration-200"
                      style={{ color: '#374151' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#374151')}>
                      Vérifier <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-200 text-base mb-3 group-hover:text-slate-100 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-[10px] font-mono" style={{ color: '#374151' }}>
                    ID · {cert.id}
                  </p>

                  {/* Bottom color bar */}
                  <div className="mt-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />
                </motion.div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
