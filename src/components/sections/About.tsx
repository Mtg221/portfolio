"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education, languages, personalInfo } from "@/lib/data";
import { MapPin, Mail, BookOpen, Languages, Briefcase, Code2, Globe } from "lucide-react";

const quickStats = [
  { icon: Briefcase, value: "5+",  label: "Projets",      color: 'var(--blue)',   glow: 'rgba(96,165,250,0.12)' },
  { icon: Code2,     value: "10+", label: "Technologies", color: 'var(--violet)', glow: 'rgba(167,139,250,0.12)' },
  { icon: Globe,     value: "3",   label: "Langues",      color: 'var(--cyan)',   glow: 'rgba(103,232,249,0.10)' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden section-alt">
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--violet)' }}>01. À propos</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-8 tracking-tight">Qui suis-je ?</h3>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={0.15}>
          <div className="flex gap-4 mb-12 flex-wrap">
            {quickStats.map(({ icon: Icon, value, label, color, glow }) => (
              <motion.div
                key={label}
                className="glass-card glass-card-hover rounded-2xl p-4 flex items-center gap-3 card-shine"
                whileHover={{ scale: 1.04, y: -2 }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: glow }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div>
                  <p className="text-xl font-black leading-none" style={{ color }}>{value}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: '#4b5563' }}>{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              {[
                <>Développeur fullstack spécialisé dans la création de solutions web modernes et orientées produit, je transforme des idées en applications complètes — commandes, gestion, expérience client.</>,
                <>Je travaille avec <span style={{ color: 'var(--blue)' }} className="font-semibold">React</span>, <span style={{ color: 'var(--green)' }} className="font-semibold">Node.js</span> et <span style={{ color: 'var(--cyan)' }} className="font-semibold">MongoDB</span> pour construire des systèmes rapides, propres et évolutifs adaptés aux besoins réels des entreprises.</>,
                <>Je ne fais pas juste des sites — je construis des <span className="text-slate-200 font-semibold">outils qui améliorent concrètement ton activité</span> dès le premier jour.</>,
              ].map((text, i) => (
                <p key={i} className="leading-relaxed text-base" style={{ color: '#64748b' }}>{text}</p>
              ))}
            </div>
          </AnimatedSection>

          {/* Info cards */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-4">
              {/* Education */}
              <motion.div
                className="glass-card glass-card-hover rounded-2xl p-5 card-shine"
                whileHover={{ scale: 1.02, rotateY: 1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(96,165,250,0.1)' }}>
                    <BookOpen className="w-4 h-4" style={{ color: 'var(--blue)' }} />
                  </div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: 'var(--blue)' }}>Formation</p>
                </div>
                <p className="font-bold text-slate-200 text-sm leading-tight">{education.degree}</p>
                <p className="text-xs mt-1" style={{ color: '#64748b' }}>{education.school}</p>
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ background: 'rgba(96,165,250,0.08)', color: 'var(--blue)', border: '1px solid rgba(96,165,250,0.2)' }}>
                    {education.period}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ background: 'rgba(100,116,139,0.1)', color: '#64748b', border: '1px solid rgba(100,116,139,0.2)' }}>
                    {education.location}
                  </span>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                className="glass-card glass-card-hover rounded-2xl p-5 card-shine"
                whileHover={{ scale: 1.02, rotateY: -1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(167,139,250,0.1)' }}>
                    <Languages className="w-4 h-4" style={{ color: 'var(--violet)' }} />
                  </div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: 'var(--violet)' }}>Langues</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {languages.map((lang) => (
                    <span key={lang.name} className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{ background: 'rgba(167,139,250,0.08)', color: 'var(--violet)', border: '1px solid rgba(167,139,250,0.2)' }}>
                      {lang.name} <span style={{ opacity: 0.6 }}>· {lang.level}</span>
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                className="glass-card glass-card-hover rounded-2xl p-5 card-shine"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Localisation</p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-sm" style={{ color: '#94a3b8' }}>
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--cyan)' }} />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: '#94a3b8' }}>
                    <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--cyan)' }} />
                    {personalInfo.email}
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
