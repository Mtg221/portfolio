"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education, languages, personalInfo } from "@/lib/data";
import { MapPin, Mail, BookOpen, Languages } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">01. À propos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Qui suis-je ?
          </h3>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Développeur fullstack spécialisé dans la création de solutions web modernes et orientées produit, je transforme des idées en applications complètes et utilisables : commandes, gestion, expérience client.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Je travaille avec React, Node.js et MongoDB pour construire des systèmes rapides, propres et évolutifs adaptés aux besoins réels des entreprises locales.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Je ne fais pas juste des sites — je construis des outils qui améliorent concrètement ton activité et qui peuvent être utilisés dès le premier jour.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-4">
              {/* Education */}
              <motion.div
                className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <p className="text-xs font-mono text-blue-400">Formation</p>
                </div>
                <p className="font-bold text-gray-900 dark:text-white text-lg">{education.degree}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{education.school}</p>
                <p className="text-gray-500 text-xs mt-2">{education.period} · {education.location}</p>
              </motion.div>

              {/* Languages */}
              <motion.div
                className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Languages className="w-5 h-5 text-blue-400" />
                  <p className="text-xs font-mono text-blue-400">Langues</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1.5 rounded-full border border-blue-500/20 font-medium"
                    >
                      {lang.name} — {lang.level}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Contact info */}
              <motion.div
                className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <p className="text-xs font-mono text-blue-400 mb-4">Localisation</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <Mail className="w-4 h-4 text-blue-400" />
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