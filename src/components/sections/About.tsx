"use client";
import { motion } from "framer-motion";
import { education, languages, personalInfo } from "@/lib/data";
import { MapPin, Mail, BookOpen } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <motion.div {...fade(0)} className="mb-12">
          <p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>01. À propos</p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--text-bright)" }}>Qui suis-je ?</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          <div className="space-y-5">
            <motion.p {...fade(0.1)} className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              Développeur fullstack spécialisé dans la création de solutions web modernes orientées produit — commandes, gestion, expérience client.
            </motion.p>
            <motion.p {...fade(0.15)} className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              Je travaille avec <span style={{ color: "var(--text-bright)" }}>React</span>, <span style={{ color: "var(--text-bright)" }}>Node.js</span> et <span style={{ color: "var(--text-bright)" }}>MongoDB</span> pour construire des systèmes rapides, propres et évolutifs.
            </motion.p>
            <motion.p {...fade(0.2)} className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              Je construis des outils qui <span style={{ color: "var(--text-bright)" }}>améliorent concrètement ton activité</span> dès le premier jour.
            </motion.p>

            <motion.div {...fade(0.3)} className="flex gap-8 pt-4">
              {[{ value: "5+", label: "Projets" }, { value: "10+", label: "Technos" }, { value: "3", label: "Langues" }].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black" style={{ color: "var(--text-bright)" }}>{value}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: "var(--text-dim)" }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fade(0.2)} className="space-y-3">
            <div className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4" style={{ color: "var(--accent)" }} />
                <p className="text-xs font-mono font-semibold" style={{ color: "var(--text-dim)" }}>Formation</p>
              </div>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-bright)" }}>{education.degree}</p>
              <p className="text-xs" style={{ color: "var(--text-dim)" }}>{education.school}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>{education.period}</p>
            </div>

            <div className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-mono font-semibold mb-3" style={{ color: "var(--text-dim)" }}>Langues</p>
              <div className="flex gap-2 flex-wrap">
                {languages.map(l => (
                  <span key={l.name} className="text-xs px-2.5 py-1 rounded-lg"
                    style={{ background: "var(--bg-hover)", border: "1px solid var(--border)", color: "var(--text)" }}>
                    {l.name} · {l.level}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="space-y-2.5">
                {[{ Icon: MapPin, text: personalInfo.location }, { Icon: Mail, text: personalInfo.email }].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text)" }}>
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
