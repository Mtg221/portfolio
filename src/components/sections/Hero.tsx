"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { GlowButton } from "@/components/ui/GlowButton";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Github, Linkedin, Mail, Code2, Database, Server, Cpu, Zap, Globe, Layers } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface HeroProps { scrollTo: (id: string) => void; }

const floatingBadges = [
  { label: "React",      style: { left: "-20%", top: "12%" }, delay: 0 },
  { label: "Node.js",    style: { right: "-20%", top: "18%" }, delay: 0.6 },
  { label: "MongoDB",    style: { left: "-24%", top: "68%" }, delay: 1.2 },
  { label: "TypeScript", style: { right: "-22%", top: "62%" }, delay: 1.8 },
];

const orbitIcons = [
  { Icon: Code2,    cls: "top-[-20px] right-[-20px]", dur: 22 },
  { Icon: Cpu,      cls: "top-[-20px] left-[-20px]",  dur: 28 },
  { Icon: Server,   cls: "bottom-[-20px] left-[-20px]",  dur: 18 },
  { Icon: Database, cls: "bottom-[-20px] right-[-20px]", dur: 24 },
];

const roles = [
  "Développeur Full Stack",
  "React Developer",
  "Node.js Expert",
  "Architecte Web",
  "Freelance Dev",
];

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 pt-14 relative overflow-hidden hero-bg">
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />

      {/* Electric scan line */}
      <div className="electric-scan" style={{ top: "30%" }} />

      {/* Glow orbs */}
      <div className="absolute top-20 left-8 w-96 h-96 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)" }} />
      <div className="absolute bottom-16 right-8 w-[480px] h-[480px] rounded-full blur-3xl animate-float pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent)", animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03), transparent)", animationDelay: "4s" }} />

      <div className="max-w-6xl mx-auto w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-20 items-center">

          {/* Left */}
          <div>
            {/* Available badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(0,255,100,0.07)", border: "1px solid rgba(0,255,100,0.22)" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[11px] font-mono font-bold text-green-400">Disponible · Open to work</span>
            </motion.div>

            <motion.p
              className="text-sm font-mono mb-4 flex items-center gap-2"
              style={{ color: "var(--e-300)" }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="w-3.5 h-3.5" style={{ color: "var(--e-100)" }} />
              Bonjour, je suis
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-3 leading-[1.02] tracking-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              <span className="text-white">{personalInfo.firstName}</span>
              <br />
              <GradientText>{personalInfo.lastName}</GradientText>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="flex items-center gap-3 mb-7 h-9"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              <div className="h-px w-8 flex-shrink-0"
                style={{ background: "linear-gradient(90deg, var(--e-300), transparent)" }} />
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--e-200)" }}>
                <TypewriterText words={roles} />
              </h2>
            </motion.div>

            <motion.p
              className="text-base md:text-[17px] max-w-lg mb-8 leading-relaxed"
              style={{ color: "#777777" }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46 }}
            >
              Je transforme des idées en applications complètes — systèmes rapides, propres et évolutifs adaptés aux besoins réels.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-7 mb-9"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { value: "5+", label: "Projets", Icon: Layers },
                { value: "10+", label: "Techs",  Icon: Code2 },
                { value: "Dakar", label: "Base",  Icon: Globe },
              ].map(({ value, label, Icon }, i) => (
                <motion.div key={i} className="flex items-center gap-2" whileHover={{ scale: 1.06 }}>
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--e-300)", opacity: 0.6 }} />
                  <div>
                    <p className="text-xl font-black leading-none"
                      style={{ background: "linear-gradient(135deg, var(--e-400), var(--e-100))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {value}
                    </p>
                    <p className="text-[10px] font-mono mt-0.5" style={{ color: "#3a3a3a" }}>{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.74 }}>
              <GlowButton onClick={() => scrollTo("projects")}>
                Voir mes projets →
              </GlowButton>
              <GlowButton href="/cv_fr.pdf" download variant="outline">
                Télécharger CV ↓
              </GlowButton>
            </motion.div>

            {/* Socials */}
            <motion.div className="flex gap-5"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.88 }}>
              {[
                { href: personalInfo.github,            Icon: Github,   label: "GitHub" },
                { href: personalInfo.linkedin,          Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, Icon: Mail,     label: "Email" },
              ].map(({ href, Icon, label }) => (
                <motion.a key={label} href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: "#3a3a3a" }}
                  whileHover={{ color: "var(--e-200)", y: -2, scale: 1.05 } as never}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="w-4 h-4" />
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: avatar */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 60 }}
          >
            <div className="relative w-72 h-72">
              {/* Blurred glow behind ring */}
              <div className="absolute inset-[-6px] rounded-full aurora-ring animate-spin-slow opacity-55 blur-[7px]" />
              {/* Sharp ring */}
              <div className="absolute inset-[-3px] rounded-full aurora-ring animate-spin-slow animate-flicker" />
              {/* Counter-spin dashes */}
              <div className="absolute inset-[4px] rounded-full animate-spin-reverse"
                style={{ border: "1px dashed rgba(255,255,255,0.10)" }} />
              {/* Dark mask */}
              <div className="absolute inset-[3px] rounded-full" style={{ background: "var(--bg-base)" }} />
              {/* Inner card */}
              <div className="absolute inset-[8px] rounded-full flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, #111111, #181818)",
                  boxShadow: "inset 0 0 60px rgba(255,255,255,0.04)",
                }}>
                <motion.span
                  className="text-5xl font-black"
                  style={{ background: "linear-gradient(135deg, var(--e-400), var(--e-200), var(--e-100))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity }}>
                  PMT
                </motion.span>
                <span className="text-[9px] font-mono mt-1 tracking-[0.25em] uppercase" style={{ color: "#282828" }}>
                  Full Stack
                </span>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((b, i) => (
                <motion.div key={b.label} className="float-badge" style={b.style}
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: b.delay }}>
                  {b.label}
                </motion.div>
              ))}

              {/* Orbit icons */}
              {orbitIcons.map(({ Icon, cls, dur }, i) => (
                <motion.div key={i}
                  className={`absolute ${cls} w-9 h-9 rounded-full flex items-center justify-center`}
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
                  whileHover={{ scale: 1.3 }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: dur, repeat: Infinity, ease: "linear" }}>
                    <Icon className="w-4 h-4" style={{ color: "var(--e-200)" }} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase" style={{ color: "#222222" }}>scroll</span>
        <motion.div
          className="w-px h-10 rounded-full"
          style={{ background: "linear-gradient(180deg, var(--e-300), transparent)" }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
