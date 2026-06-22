"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code, CheckCircle } from "lucide-react";
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
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projet non trouvé</h1>
          <GlowButton onClick={() => router.push("/")} color="blue">
            Retour à l'accueil
          </GlowButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 relative">
        <ParticleBackground />
        
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-4">
            <motion.button
              onClick={() => router.push("/#projects")}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Retour</span>
            </motion.button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  Projet
                </span>
                <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  {project.stack.join(" • ")}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <GradientText colors={`from-${project.color.replace("#", "")}-400 to-blue-400`}>
                  {project.title}
                </GradientText>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <GlowButton
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Voir le site
                </GlowButton>
                <GlowButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  color="blue"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  Code source
                </GlowButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Image */}
        <div className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-gray-800 h-64 md:h-96 relative"
              style={{
                background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}10 100%)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-3xl flex items-center justify-center shadow-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                  }}
                >
                  <span className="text-6xl md:text-8xl font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 flex gap-3">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                À propos du projet
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.longDescription}
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                Fonctionnalités principales
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Vous aimez ce projet ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Découvrez d'autres projets ou contactez-moi pour collaborer.
              </p>
              <div className="flex gap-4 justify-center">
                <GlowButton onClick={() => router.push("/#projects")} color="blue">
                  Voir tous les projets
                </GlowButton>
                <GlowButton onClick={() => router.push("/#contact")} variant="outline" color="blue">
                  Me contacter
                </GlowButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
}