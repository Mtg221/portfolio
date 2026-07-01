"use client";

import { motion } from "framer-motion";
import { ProjectCardLink } from "@/components/cards/ProjectCardLink";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          className="text-xs font-mono text-[#555555] mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          02. Projets
        </motion.p>

        <motion.div
          className="flex items-end justify-between mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Ce que j'ai construit</h2>
          <span className="text-xs font-mono text-[#555555] hidden sm:block mb-1">{projects.length} projets</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[#e5e5e5]">
          {projects.map((project, index) => (
            <div key={project.slug} className="bg-white">
              <ProjectCardLink project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
