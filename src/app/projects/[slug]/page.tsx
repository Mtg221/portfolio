"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Layers } from "lucide-react";
import { projects } from "@/lib/data";

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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium hover:bg-[#333] transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm text-[#333333] hover:text-[#0a0a0a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-mono text-[#555555] mb-4 tracking-widest uppercase">Projet</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">{project.title}</h1>
            <p className="text-base text-[#333333] max-w-2xl leading-relaxed mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium hover:bg-[#333] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Voir le site
              </a>
              <a
                href={project.github}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e5e5e5] text-sm font-medium text-[#333333] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
              >
                <Github className="w-4 h-4" />
                Code source
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual banner */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-56 md:h-72 bg-[#f9f9f9] border border-[#e5e5e5] flex items-center justify-center"
          >
            <span className="text-[120px] md:text-[160px] font-black text-[#e5e5e5] select-none leading-none">
              {project.title.charAt(0)}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-black text-lg mb-4">À propos du projet</h2>
            <p className="text-[#333333] leading-relaxed text-sm">{project.longDescription}</p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4 text-[#555555]" />
              <h2 className="font-black text-lg">Fonctionnalités</h2>
            </div>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[#333333]">
                  <span className="w-1 h-1 rounded-full bg-[#555555] mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Stack */}
      <div className="px-6 pb-16 border-t border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto pt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-4 h-4 text-[#555555]" />
              <h2 className="font-black text-lg">Technologies utilisées</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="text-xs font-mono px-3 py-1.5 border border-[#e5e5e5] text-[#333333] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-20 border-t border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto pt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="font-black text-lg mb-2">Vous aimez ce projet ?</h3>
            <p className="text-sm text-[#333333] mb-6">Découvrez d'autres projets ou contactez-moi pour collaborer.</p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => router.push("/#projects")}
                className="px-6 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium hover:bg-[#333] transition-colors"
              >
                Voir tous les projets
              </button>
              <button
                onClick={() => router.push("/#contact")}
                className="px-6 py-2.5 border border-[#e5e5e5] text-sm font-medium text-[#333333] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors"
              >
                Me contacter
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
