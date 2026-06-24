"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";
import { Project } from "@/app/projects/[slug]/page";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCardLink({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 80 }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <TiltCard
          className="relative rounded-2xl overflow-hidden card-shine"
          style={{
            background: "rgba(12,12,12,0.92)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
          tiltDeg={6}
        >
          {/* Header */}
          <div className="h-48 w-full relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}06 100%)` }}>
            {/* Animated grid */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${project.color}20 1px, transparent 1px), linear-gradient(90deg, ${project.color}20 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
              animate={{ backgroundPosition: ["0px 0px", "28px 28px"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Watermark */}
            <div className="absolute right-2 bottom-0 text-[100px] font-black leading-none select-none"
              style={{ color: `${project.color}0e` }}>
              {project.title.charAt(0)}
            </div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="rounded-2xl flex items-center justify-center"
                style={{
                  width: 72, height: 72,
                  background: `linear-gradient(135deg, ${project.color}cc, ${project.color}88)`,
                  boxShadow: `0 8px 32px ${project.color}40`,
                }}
                animate={{ y: [0, -5, 0], boxShadow: [`0 8px 32px ${project.color}30`, `0 16px 48px ${project.color}55`, `0 8px 32px ${project.color}30`] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                whileHover={{ scale: 1.15, rotate: 8 }}
              >
                <span className="text-4xl font-black text-white">{project.title.charAt(0)}</span>
              </motion.div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,8,8,0.96) 0%, transparent 55%)" }} />

            {/* Index badge */}
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg"
                style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.35)" }}>
                0{index + 1}
              </span>
            </div>

            {/* Arrow — appears on hover */}
            <motion.div
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 0 }}
              animate={undefined}
              whileHover={{ opacity: 1, x: 0 } as never}
            >
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5 pt-4">
            <div className="flex items-start justify-between mb-1.5">
              <h3 className="text-base font-bold text-slate-200 group-hover:text-slate-100 transition-colors">
                {project.title}
              </h3>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-4 h-4 mt-0.5" style={{ color: project.color }} />
              </motion.div>
            </div>
            <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "#555555" }}>
              {project.shortDescription}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.slice(0, 4).map((tech) => (
                <motion.span key={tech}
                  className="px-2 py-0.5 text-[10px] rounded-full font-semibold"
                  style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}
                  whileHover={{ scale: 1.1, y: -2 }}>
                  {tech}
                </motion.span>
              ))}
              {project.stack.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] rounded-full font-semibold"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#555555", border: "1px solid rgba(255,255,255,0.08)" }}>
                  +{project.stack.length - 4}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="text-[10px] font-mono" style={{ color: "#3a3a3a" }}>Voir les détails</span>
              <motion.span
                className="text-[10px] font-mono font-bold"
                style={{ color: project.color }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}>
                →
              </motion.span>
            </div>
          </div>

          {/* Bottom color bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }} />

          {/* Outer glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ boxShadow: `inset 0 0 0 1px ${project.color}20, 0 0 40px ${project.color}14` }} />
        </TiltCard>
      </Link>
    </motion.div>
  );
}
