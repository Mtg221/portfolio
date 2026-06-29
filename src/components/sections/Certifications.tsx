"use client";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { ExternalLink, Award } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <motion.div {...fade(0)} className="mb-12">
          <p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>04. Certifications</p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--text-bright)" }}>Certifications obtenues</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div key={cert.id} {...fade(i * 0.1)}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                className="block group rounded-2xl p-6 transition-all duration-200"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-border)" }}>
                      <Award className="w-5 h-5" style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-semibold" style={{ color: "var(--accent)" }}>{cert.issuer}</p>
                      <p className="text-xs" style={{ color: "var(--text-dim)" }}>{cert.date}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--text-dim)" }} />
                </div>
                <h3 className="font-semibold text-sm" style={{ color: "var(--text-bright)" }}>{cert.title}</h3>
                <p className="text-xs font-mono mt-2" style={{ color: "var(--text-dim)" }}>ID · {cert.id}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
