"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { GlowButton } from "@/components/ui/GlowButton";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { FloatingCodeLines } from "@/components/ui/FloatingCodeLines";
import { Github, Linkedin, Mail, Code2, Database, Server, Cpu, Zap, Globe, Layers } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface HeroProps {
  scrollTo: (id: string) => void;
}

const floatingBadges = [
  { label: "React",      style: { left: "-20%", top: "12%" }, delay: 0,   color: "#61DAFB" },
  { label: "Node.js",    style: { right: "-20%", top: "18%" }, delay: 0.6, color: "#68A063" },
  { label: "MongoDB",    style: { left: "-24%", top: "68%" }, delay: 1.2, color: "#4DB33D" },
  { label: "TypeScript", style: { right: "-22%", top: "62%" }, delay: 1.8, color: "#3178C6" },
];

const orbitIcons = [
  { Icon: Code2,    cls: "top-[-20px] right-[-20px]", color: "var(--blue)",   dur: 22 },
  { Icon: Cpu,      cls: "top-[-20px] left-[-20px]",  color: "var(--violet)", dur: 28 },
  { Icon: Server,   cls: "bottom-[-20px] left-[-20px]",  color: "var(--rose)",   dur: 18 },
  { Icon: Database, cls: "bottom-[-20px] right-[-20px]", color: "var(--cyan)",   dur: 24 },
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
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
      <FloatingCodeLines />

      {/* Glow orbs */}
      {[
        { style: { top: "10%", left: "5%", width: 380, height: 380 }, color: "rgba(79,70,229,0.22)", delay: "0s" },
        { style: { bottom: "10%", right: "5%", width: 480, height: 480 }, color: "rgba(124,58,237,0.16)", delay: "2s" },
        { style: { top: "50%", left: "38%", width: 300, height: 300, transform: "translateY(-50%)" }, color: "rgba(8,145,178,0.12)", delay: "4s" },
      ].map((orb, i) => (
        <div key={i} className="absolute rounded-full blur-3xl animate-float pointer-events-none"
          style={{ ...orb.style, background: `radial-gradient(circle, ${orb.color}, transparent)`, animationDelay: orb.delay }} />
      ))}

      <div className="max-w-6xl mx-auto w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-20 items-center">

          {/* ── Left ── */}
          <div>
            {/* Available badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[11px] font-mono font-bold" style={{ color: "var(--green)" }}>
                Disponible · Open to work
              </span>
            </motion.div>

            <motion.p
              className="text-sm font-mono mb-4 flex items-center gap-2"
              style={{ color: "var(--violet)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="w-3.5 h-3.5" />
              Bonjour, je suis
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-3 leading-[1.02] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-slate-100">{personalInfo.firstName}</span>
              <br />
              <GradientText>{personalInfo.lastName}</GradientText>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              className="flex items-center gap-3 mb-7 h-9"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <div className="h-px w-8 flex-shrink-0"
                style={{ background: "linear-gradient(90deg, var(--violet), transparent)" }} />
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--violet)" }}>
                <TypewriterText words={roles} />
              </h2>
            </motion.div>

            <motion.p
              className="text-base md:text-[17px] max-w-lg mb-8 leading-relaxed"
              style={{ color: "#94a3b8" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Je transforme des idées en applications complètes — systèmes rapides, propres et évolutifs adaptés aux besoins réels.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-7 mb-9"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
            >
              {[
                { value: "5+", label: "Projets", icon: Layers },
                { value: "10+", label: "Techs", icon: Code2 },
                { value: "Dakar", label: "Localisation", icon: Globe },
              ].map(({ value, label, icon: Icon }, i) => (
                <motion.div key={i} className="flex items-center gap-2.5"
                  whileHover={{ scale: 1.06 }}>
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--violet)", opacity: 0.7 }} />
                  <div>
                    <p className="text-xl font-black leading-none"
                      style={{ background: "linear-gradient(135deg, var(--blue), var(--violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {value}
                    </p>
                    <p className="text-[10px] font-mono mt-0.5" style={{ color: "#4b5563" }}>{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <GlowButton onClick={() => scrollTo("projects")} color="blue">
                Voir mes projets →
              </GlowButton>
              <GlowButton href="/cv_fr.pdf" download variant="outline" color="blue">
                Télécharger CV ↓
              </GlowButton>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {[
                { href: personalInfo.github,            Icon: Github,   label: "GitHub" },
                { href: personalInfo.linkedin,          Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, Icon: Mail,     label: "Email" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: "#4b5563" }}
                  whileHover={{ color: "var(--blue)", y: -2, scale: 1.05 } as never}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: avatar ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 60 }}
          >
            <div className="relative w-72 h-72">
              {/* Outer aurora glow (blurred) */}
              <div className="absolute inset-[-6px] rounded-full aurora-ring animate-spin-slow opacity-60 blur-[6px]" />
              {/* Outer aurora ring (sharp) */}
              <div className="absolute inset-[-3px] rounded-full aurora-ring animate-spin-slow" />
              {/* Counter-rotating inner ring */}
              <div className="absolute inset-[4px] rounded-full border border-violet-500/20 animate-spin-reverse" style={{
                backgroundImage: "repeating-conic-gradient(rgba(139,92,246,0.08) 0deg, transparent 4deg, transparent 24deg)"
              }} />
              {/* Dark mask */}
              <div className="absolute inset-[3px] rounded-full" style={{ background: "var(--bg-base)" }} />
              {/* Card */}
              <div className="absolute inset-[8px] rounded-full flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, #0a0b22, #0f1035)",
                  boxShadow: "inset 0 0 60px rgba(79,70,229,0.1)",
                }}>
                <motion.span
                  className="text-5xl font-black"
                  style={{ background: "linear-gradient(135deg, var(--blue), var(--violet), var(--cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  PMT
                </motion.span>
                <span className="text-[9px] font-mono mt-1 tracking-[0.25em] uppercase" style={{ color: "#374151" }}>
                  Full Stack
                </span>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="float-badge"
                  style={{ ...b.style, color: b.color, borderColor: `${b.color}40`, background: `${b.color}10` }}
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                >
                  {b.label}
                </motion.div>
              ))}

              {/* Orbit icons */}
              {orbitIcons.map(({ Icon, cls, color, dur }, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${cls} w-9 h-9 rounded-full flex items-center justify-center`}
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: dur, repeat: Infinity, ease: "linear" }}>
                    <Icon className="w-4 h-4" style={{ color }} />
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase" style={{ color: "#1f2937" }}>scroll</span>
        <motion.div
          className="w-px h-10 rounded-full"
          style={{ background: "linear-gradient(180deg, var(--violet), transparent)" }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
