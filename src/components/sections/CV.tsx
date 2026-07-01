"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function CV() {
  return (
    <section id="cv" className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          className="text-xs font-mono text-[#555555] mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          05. CV
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Mon curriculum vitae</h2>
            <p className="text-[#333333] leading-relaxed mb-8">
              Télécharge mon CV pour voir mon parcours complet, mes expériences et mes compétences en détail.
            </p>
            <a
              href="/cv_fr.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] text-white text-sm font-medium hover:bg-[#333] transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger le CV (PDF)
            </a>
          </motion.div>

          <motion.div
            className="border border-[#e5e5e5] p-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-6xl font-black text-[#aaaaaa] mb-4">CV</p>
            <p className="font-bold text-sm mb-1">Papa Makhemout Tall</p>
            <p className="text-xs text-[#333333] mb-6">Développeur Full Stack · Dakar, Sénégal</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["React", "Node.js", "MongoDB", "TypeScript"].map(t => (
                <span key={t} className="text-[10px] font-mono px-2.5 py-1 border border-[#e5e5e5] text-[#333333]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
