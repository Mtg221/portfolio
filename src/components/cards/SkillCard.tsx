"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

const cfg: Record<string, { accent: string; glow: string; bg: string; border: string; icon: string }> = {
  "Frontend":         { accent: "#ffffff", glow: "rgba(255,255,255,0.12)", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.18)", icon: "⚡" },
  "Backend":          { accent: "#d0d0d0", glow: "rgba(208,208,208,0.10)", bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.14)", icon: "⚙" },
  "Bases de données": { accent: "#aaaaaa", glow: "rgba(170,170,170,0.10)", bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.12)", icon: "🗄" },
  "DevOps & Outils":  { accent: "#888888", glow: "rgba(136,136,136,0.10)", bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.10)", icon: "🛠" },
};

const techSymbols: Record<string, string> = {
  "React": "⚛", "JavaScript": "JS", "TypeScript": "TS", "HTML": "H5",
  "CSS": "C3",   "TailwindCSS": "TW", "Node.js": "⬡",   "Express": "Ex",
  "Python": "Py", "Java": "☕",       "REST API": "⚡",  "MongoDB": "🍃",
  "MySQL": "🐬", "SQLite": "SQ",     "Firebase": "🔥",  "PostgreSQL": "🐘",
  "Git": "⎇",   "GitHub": "⊕",      "Vercel": "▲",     "Render": "Rl",
  "Docker": "🐳","Linux": "🐧",
};

const fallback = cfg["Frontend"];

export function SkillCard({ category, items, index }: SkillCardProps) {
  const c = cfg[category] ?? fallback;

  return (
    <motion.div
      className="relative rounded-2xl p-5 card-shine overflow-hidden"
      style={{ background: "rgba(14,14,14,0.90)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, type: "spring", stiffness: 90 }}
      whileHover={{ y: -6, borderColor: c.border, boxShadow: `0 16px 48px rgba(0,0,0,0.7), 0 0 30px ${c.glow}` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-4 right-4 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${c.accent}80, transparent)` }} />

      {/* Category header */}
      <div className="flex items-center gap-2.5 mb-4">
        <motion.span className="text-lg leading-none"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}>
          {c.icon}
        </motion.span>
        <div className="w-px h-4 rounded-full" style={{ background: `${c.accent}40` }} />
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: c.accent }}>
          {category}
        </h4>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-1.5">
        {items.map((skill, i) => (
          <motion.span key={skill}
            className="badge-tech flex items-center gap-1"
            style={{ background: c.bg, color: c.accent, borderColor: c.border }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + i * 0.04 }}
            whileHover={{ scale: 1.1, y: -2, boxShadow: `0 4px 12px ${c.glow}` }}>
            {techSymbols[skill] && <span className="text-[10px] opacity-60">{techSymbols[skill]}</span>}
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Corner glow */}
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full blur-2xl pointer-events-none"
        style={{ background: c.glow }} />
    </motion.div>
  );
}
