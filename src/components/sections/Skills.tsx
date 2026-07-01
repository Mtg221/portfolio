"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/cards/SkillCard";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          className="text-xs font-mono text-[#555555] mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          03. Compétences
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-black tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stack technique
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} category={skill.category} items={skill.items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
