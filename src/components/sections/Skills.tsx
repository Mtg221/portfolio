"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SkillCard } from "@/components/cards/SkillCard";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">03. Compétences</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Stack technique
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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