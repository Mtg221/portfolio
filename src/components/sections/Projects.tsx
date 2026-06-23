"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCardLink } from "@/components/cards/ProjectCardLink";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">02. Projets</h2>
          <div className="flex items-end gap-4 mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ce que j'ai construit
            </h3>
            <span className="mb-1 text-sm font-mono text-gray-500 hidden sm:block">
              — {projects.length} projets
            </span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCardLink key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
