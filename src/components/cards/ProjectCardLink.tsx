"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/app/projects/[slug]/page";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCardLink({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors duration-300">
        {/* Header */}
        <div className="h-40 flex items-center justify-center bg-[#f9f9f9] border-b border-[#e5e5e5] group-hover:bg-[#f0f0f0] transition-colors">
          <span className="text-6xl font-black text-[#e5e5e5] group-hover:text-[#d0d0d0] transition-colors select-none">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-sm">{project.title}</h3>
            <ArrowUpRight className="w-4 h-4 text-[#555555] group-hover:text-[#0a0a0a] transition-colors flex-shrink-0 mt-0.5" />
          </div>
          <p className="text-xs text-[#333333] leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-[10px] font-mono px-2 py-0.5 border border-[#e5e5e5] text-[#333333]">
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[10px] font-mono px-2 py-0.5 text-[#555555]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
