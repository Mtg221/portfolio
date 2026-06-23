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
  { label: "React",      style: { left: "-18%", top: "14%" }, delay: 0 },
  { label: "Node.js",    style: { right: "-18%", top: "20%" }, delay: 0.5 },
  { label: "MongoDB",    style: { left: "-22%", top: "70%" }, delay: 1 },
  { label: "TypeScript", style: { right: "-20%", top: "64%" }, delay: 1.5 },
];

const stats = [
  { value: "5+", label: "Projets" },
  { value: "10+", label: "Techs" },
  { value: "Dakar", label: "Localisation" },
];

const cornerIcons = [
  { Icon: Code2,    cls: "top-[-18px] right-[-18px]", color: "text-blue-400",   delay: 0 },
  { Icon: Cpu,      cls: "top-[-18px] left-[-18px]",  color: "text-violet-400", delay: 5 },
  { Icon: Server,   cls: "bottom-[-18px] left-[-18px]",  color: "text-pink-400",   delay: 3 },
  { Icon: Database, cls: "bottom-[-18px] right-[-18px]", color: "text-cyan-400",   delay: 7 },
];

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 pt-14 relative overflow-hidden hero-bg">
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-24 left-8 w-80 h-80 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.25), transparent)' }} />
      <div className="absolute bottom-16 right-8 w-96 h-96 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.15), transparent)', animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto w-full py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            <motion.p
              className="text-sm font-mono mb-5 flex items-center gap-2"
              style={{ color: 'var(--violet)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--violet)' }} />
              Bonjour, je suis
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <span className="text-slate-100">{personalInfo.firstName}</span>
              <br />
              <GradientText>{personalInfo.lastName}</GradientText>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
            >
              <div className="h-px w-8 flex-shrink-0"
                style={{ background: 'linear-gradient(90deg, var(--violet), transparent)' }} />
              <h2 className="text-xl sm:text-2xl font-bold">
                <GradientText colors="from-violet-400 via-fuchsia-400 to-pink-400">
                  {personalInfo.title}
                </GradientText>
              </h2>
            </motion.div>

            <motion.p
              className="text-base md:text-lg max-w-lg mb-8 leading-relaxed"
              style={{ color: '#94a3b8' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44 }}
            >
              Je transforme des idées en applications complètes — systèmes rapides, propres et évolutifs adaptés aux besoins réels.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58 }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-black leading-none mb-1"
                    style={{ background: 'linear-gradient(135deg, var(--blue), var(--violet))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.value}
                  </p>
                  <p className="text-xs font-mono" style={{ color: '#64748b' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
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
              transition={{ duration: 0.7, delay: 0.86 }}
            >
              {[
                { href: personalInfo.github,            icon: Github,   label: "GitHub" },
                { href: personalInfo.linkedin,          icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail,     label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm font-mono transition-colors group"
                  style={{ color: '#64748b' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: avatar ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, type: "spring", stiffness: 70 }}
          >
            <div className="relative w-72 h-72">

              {/* Aurora spinning ring — blurred glow layer */}
              <div className="absolute inset-[-5px] rounded-full aurora-ring animate-spin-slow glow-ring opacity-70" />

              {/* Aurora spinning ring — sharp layer on top */}
              <div className="absolute inset-[-3px] rounded-full aurora-ring animate-spin-slow" />

              {/* Dark mask */}
              <div className="absolute inset-[3px] rounded-full" style={{ background: 'var(--bg-base)' }} />

              {/* Inner card */}
              <div className="absolute inset-[6px] rounded-full flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0a0b20, #0f1030)',
                  boxShadow: 'inset 0 0 60px rgba(79,70,229,0.08)',
                }}>
                <motion.span
                  className="text-5xl font-black leading-none"
                  style={{ background: 'linear-gradient(135deg, var(--blue), var(--violet), var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  PMT
                </motion.span>
                <span className="text-[10px] font-mono mt-1 tracking-widest uppercase" style={{ color: '#4b5563' }}>
                  Full Stack
                </span>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="float-badge"
                  style={b.style}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                >
                  {b.label}
                </motion.div>
              ))}

              {/* Corner orbit icons */}
              {cornerIcons.map(({ Icon, cls, color, delay }, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${cls} w-8 h-8 rounded-full flex items-center justify-center`}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + delay, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
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
        transition={{ delay: 1.6 }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: '#374151' }}>scroll</span>
        <motion.div
          className="w-px h-8 rounded-full"
          style={{ background: 'linear-gradient(180deg, var(--violet), transparent)' }}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
