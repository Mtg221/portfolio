"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Layers } from "lucide-react";
import { projects } from "@/lib/data";
import { GradientText } from "@/components/ui/GradientText";
import { GlowButton } from "@/components/ui/GlowButton";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  features: string[];
  stack: string[];
  live: string;
  github: string;
  image: string;
  color: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg-base)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-200 mb-4">Projet non trouvé</h1>
          <GlowButton onClick={() => router.push("/")}>Retour à l'accueil</GlowButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative text-slate-200" style={{ background: "var(--bg-base)" }}>
      <ParticleBackground />

      {/* Background radial from project color */}
      <div className="fixed inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.color}0e 0%, transparent 55%)` }} />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-4">
          <motion.button
            onClick={() => router.push("/#projects")}
            className="flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "#555555" }}
            whileHover={{ x: -3, color: "var(--e-200)" } as never}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </motion.button>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest"
                style={{ background: `${project.color}14`, color: project.color, border: `1px solid ${project.color}28` }}>
                Projet
              </span>
              <span className="text-[10px] font-mono" style={{ color: "#3a3a3a" }}>
                {project.stack.join(" · ")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
              <GradientText>{project.title}</GradientText>
            </h1>

            <p className="text-lg leading-relaxed max-w-3xl mb-8" style={{ color: "#888888" }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <GlowButton href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Voir le site
              </GlowButton>
              <GlowButton href={project.github} target="_blank" rel="noopener noreferrer"
                variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Code source
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual banner */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden h-64 md:h-80 relative"
            style={{
              background: `linear-gradient(135deg, ${project.color}1e 0%, ${project.color}08 100%)`,
              border: `1px solid ${project.color}18`,
              boxShadow: `0 0 60px ${project.color}10`,
            }}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `linear-gradient(${project.color}35 1px, transparent 1px), linear-gradient(90deg, ${project.color}35 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }} />

            {/* Big letter watermark */}
            <div className="absolute right-8 bottom-0 text-[200px] font-black leading-none select-none"
              style={{ color: `${project.color}0e` }}>
              {project.title.charAt(0)}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="rounded-3xl flex items-center justify-center"
                style={{
                  width: 120, height: 120,
                  background: `linear-gradient(135deg, ${project.color}dd, ${project.color}88)`,
                  boxShadow: `0 16px 64px ${project.color}40`,
                }}
                animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-7xl font-black text-white">{project.title.charAt(0)}</span>
              </motion.div>
            </div>

            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)" }} />
          </motion.div>
        </div>
      </div>

      {/* Long description + features */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl p-8"
            style={{ background: "rgba(12,12,12,0.88)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <h2 className="text-xl font-black text-slate-100 mb-4">À propos du projet</h2>
            <p className="leading-relaxed mb-8" style={{ color: "#888888" }}>{project.longDescription}</p>

            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5" style={{ color: "var(--e-300)" }} />
              <h3 className="text-lg font-black text-slate-100">Fonctionnalités principales</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "#888888" }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "var(--e-300)", boxShadow: "0 0 6px rgba(255,255,255,0.12)" }} />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: "rgba(12,12,12,0.88)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5" style={{ color: "var(--e-200)" }} />
              <h2 className="text-xl font-black text-slate-100">Technologies utilisées</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: `${project.color}10`,
                    color: project.color,
                    border: `1px solid ${project.color}25`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.07, boxShadow: `0 4px 16px ${project.color}25` }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA bottom */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-black text-slate-100 mb-2">Vous aimez ce projet ?</h3>
            <p className="text-sm mb-6" style={{ color: "#555555" }}>Découvrez d'autres projets ou contactez-moi pour collaborer.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <GlowButton onClick={() => router.push("/#projects")}>Voir tous les projets</GlowButton>
              <GlowButton onClick={() => router.push("/#contact")} variant="outline">Me contacter</GlowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
