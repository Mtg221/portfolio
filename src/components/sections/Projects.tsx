"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCardLink } from "@/components/cards/ProjectCardLink";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">02. Projets</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Ce que j'ai construit
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCardLink key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}