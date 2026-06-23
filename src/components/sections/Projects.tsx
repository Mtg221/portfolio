"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCardLink } from "@/components/cards/ProjectCardLink";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--blue)' }}>02. Projets</h2>
          <div className="flex items-end gap-4 mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">Ce que j'ai construit</h3>
            <span className="mb-1 text-xs font-mono hidden sm:block" style={{ color: '#374151' }}>— {projects.length} projets</span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCardLink key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
