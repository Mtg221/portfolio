"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/app/projects/[slug]/page";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCardLink({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.div
        className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Image placeholder */}
        <div 
          className="h-48 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}10 100%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
              }}
            >
              <span className="text-5xl font-bold text-white">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-blue-400">0{index + 1}</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:gap-3 transition-all">
            Voir les détails
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{
            boxShadow: `0 0 60px ${project.color}40`,
          }}
        />
      </motion.div>
    </Link>
  );
}