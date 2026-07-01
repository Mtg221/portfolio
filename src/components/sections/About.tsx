"use client";

import { motion } from "framer-motion";
import { education, languages, personalInfo } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto">

        <motion.p className="text-xs font-mono text-[#555555] mb-4 tracking-widest uppercase" {...fadeUp()}>
          01. À propos
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">Qui suis-je ?</h2>
            <div className="space-y-4 text-[#333333] leading-relaxed">
              <p>
                Développeur fullstack spécialisé dans la création de solutions web modernes orientées produit — commandes, gestion, expérience client.
              </p>
              <p>
                Je travaille avec <strong className="text-[#0a0a0a] font-semibold">React</strong>, <strong className="text-[#0a0a0a] font-semibold">Node.js</strong> et <strong className="text-[#0a0a0a] font-semibold">MongoDB</strong> pour construire des systèmes rapides, propres et évolutifs.
              </p>
              <p>
                Je construis des <strong className="text-[#0a0a0a] font-semibold">outils qui améliorent concrètement l'activité</strong> dès le premier jour.
              </p>
            </div>
          </motion.div>

          <motion.div className="space-y-6" {...fadeUp(0.2)}>
            {/* Formation */}
            <div className="border border-[#e5e5e5] p-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#555555] mb-3">Formation</p>
              <p className="font-semibold text-sm mb-1">{education.degree}</p>
              <p className="text-sm text-[#333333] mb-3">{education.school}</p>
              <div className="flex gap-2 flex-wrap">
                {[education.period, education.location].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 border border-[#e5e5e5] text-[#333333]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="border border-[#e5e5e5] p-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#555555] mb-3">Langues</p>
              <div className="flex gap-2 flex-wrap">
                {languages.map(lang => (
                  <span key={lang.name} className="text-xs px-3 py-1.5 border border-[#e5e5e5] text-[#333333]">
                    {lang.name} <span className="text-[#555555]">· {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Localisation */}
            <div className="border border-[#e5e5e5] p-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#555555] mb-3">Contact</p>
              <div className="space-y-1.5 text-sm text-[#333333]">
                <p>{personalInfo.location}</p>
                <p>{personalInfo.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
