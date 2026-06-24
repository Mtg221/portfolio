"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SkillCard } from "@/components/cards/SkillCard";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden section-alt">
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Corner glows */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(255,255,255,0.02) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, rgba(255,255,255,0.02) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: "var(--e-300)" }}>03. Compétences</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-10 tracking-tight">Stack technique</h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} category={skill.category} items={skill.items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
