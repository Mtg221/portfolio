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
    <Link href={`/projects/${project.slug}`} className="block group">
      <motion.div
        className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-500 card-shine"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 80 }}
        whileHover={{ y: -6 }}
      >
        {/* Image area */}
        <div
          className="h-52 w-full relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}25 0%, ${project.color}08 60%, transparent 100%)`,
          }}
        >
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${project.color}40 1px, transparent 1px), linear-gradient(90deg, ${project.color}40 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Large letter watermark */}
          <div
            className="absolute right-4 bottom-2 text-[120px] font-black leading-none select-none pointer-events-none"
            style={{ color: `${project.color}12` }}
          >
            {project.title.charAt(0)}
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                boxShadow: `0 8px 32px ${project.color}40`,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-black text-white">{project.title.charAt(0)}</span>
            </motion.div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-gray-900/90 via-transparent to-transparent" />

          {/* Index number */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-mono font-bold px-2 py-1 rounded-lg bg-black/20 backdrop-blur-sm text-white/70">
              0{index + 1}
            </span>
          </div>

          {/* Arrow icon top right */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-full font-medium transition-colors"
                style={{
                  backgroundColor: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2.5 py-1 text-xs rounded-full font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
            <span className="text-xs font-mono text-gray-400">Voir les détails</span>
            <motion.div
              className="flex items-center gap-1 text-xs font-bold"
              style={{ color: project.color }}
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.div>
          </div>
        </div>

        {/* Bottom color bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />

        {/* Outer glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ boxShadow: `0 0 40px ${project.color}25, inset 0 0 0 1px ${project.color}30` }}
        />
      </motion.div>
    </Link>
  );
}
