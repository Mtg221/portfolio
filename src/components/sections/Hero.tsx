"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { GlowButton } from "@/components/ui/GlowButton";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface HeroProps {
  scrollTo: (id: string) => void;
}

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 pt-14 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto w-full py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-sm font-mono mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Bonjour, je suis
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gray-900 dark:text-white">{personalInfo.firstName}</span>
          <br />
          <GradientText>{personalInfo.lastName}</GradientText>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-500 dark:text-gray-400 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GradientText colors="from-violet-400 via-purple-400 to-pink-400">
            {personalInfo.title}
          </GradientText>
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Je transforme des idées en applications complètes et utilisables. React, Node.js, MongoDB — des systèmes rapides, propres et évolutifs adaptés aux besoins réels.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <GlowButton onClick={() => scrollTo("projects")} color="blue">
            Voir mes projets →
          </GlowButton>
          <GlowButton
            href="/cv_fr.pdf"
            download
            variant="outline"
            color="blue"
          >
            Télécharger CV ↓
          </GlowButton>
        </motion.div>

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm font-mono group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm font-mono group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm font-mono group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}