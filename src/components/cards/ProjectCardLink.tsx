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
        className="relative rounded-2xl overflow-hidden card-shine"
        style={{
          background: 'rgba(8, 9, 28, 0.85)',
          border: '1px solid rgba(99, 102, 241, 0.12)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 80 }}
        whileHover={{ y: -6, borderColor: `${project.color}50`, boxShadow: `0 12px 48px rgba(0,0,0,0.6), 0 0 40px ${project.color}20` }}
      >
        {/* Header image area */}
        <div className="h-48 w-full relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}06 100%)` }}>

          {/* Grid texture */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(${project.color}30 1px, transparent 1px), linear-gradient(90deg, ${project.color}30 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }} />

          {/* Big letter watermark */}
          <div className="absolute right-3 bottom-1 text-[110px] font-black leading-none select-none"
            style={{ color: `${project.color}10` }}>
            {project.title.charAt(0)}
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-18 h-18 rounded-2xl flex items-center justify-center"
              style={{
                width: 72, height: 72,
                background: `linear-gradient(135deg, ${project.color}dd, ${project.color}99)`,
                boxShadow: `0 8px 32px ${project.color}50`,
              }}
              whileHover={{ scale: 1.12, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-black text-white">{project.title.charAt(0)}</span>
            </motion.div>
          </div>

          {/* Gradient overlay bottom */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,9,28,0.95) 0%, transparent 60%)' }} />

          {/* Index badge */}
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.5)' }}>
              0{index + 1}
            </span>
          </div>

          {/* Arrow — appears on hover */}
          <motion.div
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
            style={{ background: `${project.color}30`, border: `1px solid ${project.color}50` }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 pt-4">
          <h3 className="text-base font-bold mb-1.5 text-slate-200 transition-colors duration-300 group-hover:text-slate-100">
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: '#64748b' }}>
            {project.shortDescription}
          </p>

          {/* Stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech}
                className="px-2 py-0.5 text-[10px] rounded-full font-semibold"
                style={{
                  background: `${project.color}12`,
                  color: project.color,
                  border: `1px solid ${project.color}28`,
                }}>
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] rounded-full font-semibold"
                style={{ background: 'rgba(100,116,139,0.1)', color: '#64748b', border: '1px solid rgba(100,116,139,0.2)' }}>
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-3"
            style={{ borderTop: '1px solid rgba(99,102,241,0.08)' }}>
            <span className="text-[10px] font-mono" style={{ color: '#374151' }}>Voir les détails</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUpRight className="w-3.5 h-3.5" style={{ color: project.color }} />
            </motion.div>
          </div>
        </div>

        {/* Bottom glow bar — appears on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
        />
      </motion.div>
    </Link>
  );
}
