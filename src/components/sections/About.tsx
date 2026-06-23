"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education, languages, personalInfo } from "@/lib/data";
import { MapPin, Mail, BookOpen, Languages, Briefcase, Code2, Globe } from "lucide-react";

const quickStats = [
  { icon: Briefcase, value: "5+", label: "Projets réalisés", color: "text-blue-400" },
  { icon: Code2, value: "10+", label: "Technologies", color: "text-violet-400" },
  { icon: Globe, value: "3", label: "Langues", color: "text-cyan-400" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">01. À propos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Qui suis-je ?
          </h3>
        </AnimatedSection>

        {/* Quick stats row */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg">
            {quickStats.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                className="text-center p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-xs text-gray-500 font-mono mt-0.5">{label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Développeur fullstack spécialisé dans la création de solutions web modernes et orientées produit, je transforme des idées en applications complètes et utilisables — commandes, gestion, expérience client.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Je travaille avec <span className="text-blue-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Node.js</span> et <span className="text-emerald-400 font-semibold">MongoDB</span> pour construire des systèmes rapides, propres et évolutifs adaptés aux besoins réels des entreprises.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Je ne fais pas juste des sites — je construis des <span className="text-white font-semibold">outils qui améliorent concrètement ton activité</span> et qui peuvent être utilisés dès le premier jour.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-4">
              {/* Education */}
              <motion.div
                className="relative rounded-2xl p-6 border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent card-shine overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
              >
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/70 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">Formation</p>
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white text-base leading-tight">{education.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{education.school}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20 font-mono">
                      {education.period}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-500 text-xs border border-gray-500/20 font-mono">
                      {education.location}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                className="relative rounded-2xl p-6 border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent card-shine overflow-hidden"
                whileHover={{ scale: 1.02, rotate: -0.5 }}
              >
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/70 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
                      <Languages className="w-4 h-4 text-violet-400" />
                    </div>
                    <p className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">Langues</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="bg-violet-500/10 text-violet-400 text-xs px-3 py-1.5 rounded-full border border-violet-500/20 font-medium"
                      >
                        {lang.name} · <span className="opacity-70">{lang.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="relative rounded-2xl p-6 border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent card-shine overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
              >
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/70 rounded-2xl" />
                <div className="relative z-10">
                  <p className="text-xs font-mono text-cyan-400 mb-3 font-bold uppercase tracking-wider">Localisation</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                      {personalInfo.location}
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                      <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                      {personalInfo.email}
                    </div>
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
