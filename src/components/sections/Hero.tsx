"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { GlowButton } from "@/components/ui/GlowButton";
import { Github, Linkedin, Mail, Code2, Database, Server, Cpu } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface HeroProps {
  scrollTo: (id: string) => void;
}

const floatingBadges = [
  { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.1)", x: "-14%", y: "12%" },
  { label: "Node.js", color: "#68A063", bg: "rgba(104,160,99,0.1)", x: "100%", y: "18%" },
  { label: "MongoDB", color: "#4DB33D", bg: "rgba(77,179,61,0.1)", x: "-18%", y: "72%" },
  { label: "TypeScript", color: "#3178C6", bg: "rgba(49,120,198,0.1)", x: "98%", y: "68%" },
];

const stats = [
  { value: "5+", label: "Projets" },
  { value: "3", label: "Frameworks" },
  { value: "2", label: "Ans d'exp." },
];

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 pt-14 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.p
              className="text-blue-400 text-sm font-mono mb-4 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Bonjour, je suis
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="text-gray-900 dark:text-white">{personalInfo.firstName}</span>
              <br />
              <GradientText>{personalInfo.lastName}</GradientText>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-blue-400 to-transparent" />
              <h2 className="text-xl sm:text-2xl font-semibold">
                <GradientText colors="from-violet-400 via-purple-400 to-pink-400">
                  {personalInfo.title}
                </GradientText>
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Je transforme des idées en applications complètes — systèmes rapides, propres et évolutifs adaptés aux besoins réels.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 font-mono mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              <GlowButton onClick={() => scrollTo("projects")} color="blue">
                Voir mes projets →
              </GlowButton>
              <GlowButton href="/cv_fr.pdf" download variant="outline" color="blue">
                Télécharger CV ↓
              </GlowButton>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm font-mono group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
          >
            <div className="relative w-72 h-72">
              {/* Outer spinning gradient ring */}
              <div className="absolute inset-[-3px] rounded-full">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 animate-spin-slow glow-ring" />
              </div>

              {/* Inner dark ring */}
              <div className="absolute inset-[3px] rounded-full bg-gray-950 dark:bg-gray-950 bg-white" />

              {/* Avatar circle */}
              <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <motion.span
                    className="text-5xl font-black bg-gradient-to-br from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent block"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    PMT
                  </motion.span>
                  <span className="text-xs font-mono text-gray-500 mt-1 block">Full Stack Dev</span>
                </div>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className="float-badge"
                  style={{ left: badge.x, top: badge.y, backgroundColor: badge.bg, color: badge.color, borderColor: badge.color + "50" }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  {badge.label}
                </motion.div>
              ))}

              {/* Corner icons */}
              {[
                { Icon: Code2, pos: "top-[-16px] right-[-16px]", color: "text-blue-400" },
                { Icon: Server, pos: "bottom-[-16px] left-[-16px]", color: "text-violet-400" },
                { Icon: Database, pos: "bottom-[-16px] right-[-16px]", color: "text-cyan-400" },
                { Icon: Cpu, pos: "top-[-16px] left-[-16px]", color: "text-pink-400" },
              ].map(({ Icon, pos, color }, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${pos} w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono text-gray-500">scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
