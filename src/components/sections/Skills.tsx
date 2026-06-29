"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <motion.div {...fade(0)} className="mb-12">
          <p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>03. Compétences</p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--text-bright)" }}>Stack technique</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div key={skill.category} {...fade(i * 0.08)}
              className="rounded-2xl p-5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-mono font-semibold mb-4" style={{ color: "var(--accent)" }}>{skill.category}</p>
              <div className="flex flex-col gap-2">
                {skill.items.map(item => (
                  <span key={item} className="text-sm" style={{ color: "var(--text)" }}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
