"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />

        <motion.div {...fade(0)} className="mb-12">
          <p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>02. Projets</p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--text-bright)" }}>Ce que j'ai construit</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div key={project.slug} {...fade(i * 0.08)}
              className="group rounded-2xl p-6 transition-all duration-200"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-base" style={{ color: "var(--text-bright)" }}>{project.title}</h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg transition-colors"
                      style={{ color: "var(--text-dim)" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text-bright)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"}>
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg transition-colors"
                      style={{ color: "var(--text-dim)" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text-bright)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text)" }}>{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-lg font-mono"
                    style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-border)", color: "var(--accent)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
