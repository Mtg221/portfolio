"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { certifications } from "@/lib/data";
import { ExternalLink, Award, Star, Trophy } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <div className="absolute inset-0 dot-grid opacity-22 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Floating stars */}
      {[
        { top: "8%",  left: "4%",  dur: 3, delay: 0 },
        { top: "80%", left: "92%", dur: 4, delay: 1 },
        { top: "50%", left: "96%", dur: 5, delay: 2 },
        { top: "20%", left: "88%", dur: 3.5, delay: 0.5 },
      ].map((s, i) => (
        <motion.div key={i} className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0], rotate: [0, 180, 360] }}
          transition={{ duration: s.dur, repeat: Infinity, delay: s.delay }}>
          <Star className="w-3 h-3 fill-current" style={{ color: "var(--cyan)", opacity: 0.5 }} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: "var(--cyan)" }}>04. Certifications</h2>
          </div>
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">Certifications obtenues</h3>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}>
              <Trophy className="w-7 h-7" style={{ color: "#fbbf24" }} />
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.id} delay={index * 0.15}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block group">
                <motion.div
                  className="rounded-2xl p-6 card-shine glass-card glass-card-hover relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated corner glow */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                    style={{ background: `${cert.color}15` }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />

                  <div className="flex items-start justify-between mb-5 relative z-10">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
                        style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                        whileHover={{ rotate: 20, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Award className="w-7 h-7" style={{ color: cert.color }} />
                        {/* Sparkle on hover */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                          style={{ background: cert.color, boxShadow: `0 0 12px ${cert.color}` }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star className="w-2 h-2 text-white fill-white" />
                        </motion.div>
                      </motion.div>
                      <div>
                        <p className="text-xs font-mono font-bold" style={{ color: cert.color }}>{cert.issuer}</p>
                        <p className="text-[10px] mt-0.5" style={{ color: "#4b5563" }}>{cert.date}</p>
                      </div>
                    </div>
                    <motion.span
                      className="text-[10px] font-mono flex items-center gap-1"
                      style={{ color: "#374151" }}
                      whileHover={{ color: "var(--blue)", x: -2 } as never}
                    >
                      Vérifier
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ExternalLink className="w-3 h-3" />
                      </motion.span>
                    </motion.span>
                  </div>

                  <h4 className="font-black text-slate-200 text-base mb-3 group-hover:text-slate-100 transition-colors relative z-10">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-mono relative z-10" style={{ color: "#374151" }}>
                    ID · {cert.id}
                  </p>

                  {/* Bottom color bar */}
                  <div className="mt-5 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
