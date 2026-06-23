"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SkillCard } from "@/components/cards/SkillCard";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">03. Compétences</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Stack technique
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
