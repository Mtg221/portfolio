"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { education, languages, personalInfo } from "@/lib/data";
import { MapPin, Mail, BookOpen, Languages, Briefcase, Code2, Globe, Sparkles } from "lucide-react";

const quickStats = [
  { icon: Briefcase, countTo: 5, suffix: "+", label: "Projets réalisés", color: "var(--blue)",   glow: "rgba(96,165,250,0.1)" },
  { icon: Code2,     countTo: 10, suffix: "+", label: "Technologies",     color: "var(--violet)", glow: "rgba(167,139,250,0.1)" },
  { icon: Globe,     countTo: 3, suffix: "",   label: "Langues parlées",  color: "var(--cyan)",   glow: "rgba(103,232,249,0.08)" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden section-alt">
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Floating sparkles */}
      {[
        { top: "15%", left: "88%", dur: 3, delay: 0 },
        { top: "72%", left: "4%",  dur: 4, delay: 1 },
        { top: "40%", left: "92%", dur: 5, delay: 2 },
      ].map((s, i) => (
        <motion.div key={i} className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 180, 360] }}
          transition={{ duration: s.dur, repeat: Infinity, delay: s.delay }}>
          <Sparkles className="w-4 h-4" style={{ color: "var(--violet)", opacity: 0.4 }} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: "var(--violet)" }}>01. À propos</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-8 tracking-tight">Qui suis-je ?</h3>
        </AnimatedSection>

        {/* Animated stats */}
        <AnimatedSection delay={0.15}>
          <div className="flex gap-4 mb-12 flex-wrap">
            {quickStats.map(({ icon: Icon, countTo, suffix, label, color, glow }) => (
              <motion.div
                key={label}
                className="glass-card glass-card-hover rounded-2xl p-4 flex items-center gap-3 card-shine min-w-[160px]"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: glow }}
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </motion.div>
                <div>
                  <p className="text-2xl font-black leading-none" style={{ color }}>
                    <CountUp to={countTo} suffix={suffix} />
                  </p>
                  <p className="text-[10px] font-mono mt-0.5" style={{ color: "#4b5563" }}>{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              {[
                <>Développeur fullstack spécialisé dans la création de solutions web modernes et orientées produit, je transforme des idées en applications complètes — commandes, gestion, expérience client.</>,
                <>Je travaille avec <span style={{ color: "var(--blue)" }} className="font-semibold">React</span>, <span style={{ color: "var(--green)" }} className="font-semibold">Node.js</span> et <span style={{ color: "var(--cyan)" }} className="font-semibold">MongoDB</span> pour construire des systèmes rapides, propres et évolutifs adaptés aux besoins réels.</>,
                <>Je ne fais pas juste des sites — je construis des <span className="text-slate-200 font-semibold">outils qui améliorent concrètement ton activité</span> dès le premier jour.</>,
              ].map((text, i) => (
                <motion.p key={i} className="leading-relaxed text-base" style={{ color: "#64748b" }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}>
                  {text}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-3">
              {/* Education */}
              <motion.div className="glass-card glass-card-hover rounded-2xl p-5 card-shine"
                whileHover={{ scale: 1.02, x: 4 }}>
                <div className="flex items-center gap-3 mb-3">
                  <motion.div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(96,165,250,0.1)" }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}>
                    <BookOpen className="w-4 h-4" style={{ color: "var(--blue)" }} />
                  </motion.div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: "var(--blue)" }}>Formation</p>
                </div>
                <p className="font-bold text-slate-200 text-sm leading-tight">{education.degree}</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>{education.school}</p>
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(96,165,250,0.08)", color: "var(--blue)", border: "1px solid rgba(96,165,250,0.2)" }}>
                    {education.period}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(100,116,139,0.08)", color: "#64748b", border: "1px solid rgba(100,116,139,0.2)" }}>
                    {education.location}
                  </span>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div className="glass-card glass-card-hover rounded-2xl p-5 card-shine"
                whileHover={{ scale: 1.02, x: 4 }}>
                <div className="flex items-center gap-3 mb-3">
                  <motion.div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(167,139,250,0.1)" }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}>
                    <Languages className="w-4 h-4" style={{ color: "var(--violet)" }} />
                  </motion.div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: "var(--violet)" }}>Langues</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {languages.map((lang) => (
                    <motion.span key={lang.name} className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{ background: "rgba(167,139,250,0.08)", color: "var(--violet)", border: "1px solid rgba(167,139,250,0.2)" }}
                      whileHover={{ scale: 1.08, y: -2 }}>
                      {lang.name} <span style={{ opacity: 0.5 }}>· {lang.level}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div className="glass-card glass-card-hover rounded-2xl p-5 card-shine"
                whileHover={{ scale: 1.02, x: 4 }}>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-3" style={{ color: "var(--cyan)" }}>Localisation</p>
                <div className="space-y-2.5">
                  {[
                    { Icon: MapPin, text: personalInfo.location },
                    { Icon: Mail,   text: personalInfo.email },
                  ].map(({ Icon, text }) => (
                    <motion.div key={text} className="flex items-center gap-3 text-sm" style={{ color: "#94a3b8" }}
                      whileHover={{ x: 4 }}>
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--cyan)" }} />
                      {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
