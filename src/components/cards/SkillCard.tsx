"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

const cfg: Record<string, { accent: string; glow: string; badge: string; badgeBorder: string }> = {
  "Frontend": {
    accent:      "var(--blue)",
    glow:        "rgba(96,165,250,0.12)",
    badge:       "rgba(96,165,250,0.08)",
    badgeBorder: "rgba(96,165,250,0.22)",
  },
  "Backend": {
    accent:      "var(--green)",
    glow:        "rgba(74,222,128,0.10)",
    badge:       "rgba(74,222,128,0.07)",
    badgeBorder: "rgba(74,222,128,0.22)",
  },
  "Bases de données": {
    accent:      "#fb923c",
    glow:        "rgba(251,146,60,0.10)",
    badge:       "rgba(251,146,60,0.07)",
    badgeBorder: "rgba(251,146,60,0.22)",
  },
  "DevOps & Outils": {
    accent:      "var(--violet)",
    glow:        "rgba(167,139,250,0.12)",
    badge:       "rgba(167,139,250,0.08)",
    badgeBorder: "rgba(167,139,250,0.22)",
  },
};

const fallback = cfg["Frontend"];

export function SkillCard({ category, items, index }: SkillCardProps) {
  const c = cfg[category] ?? fallback;

  return (
    <motion.div
      className="relative rounded-2xl p-5 card-shine overflow-hidden"
      style={{
        background: 'rgba(8, 9, 28, 0.8)',
        border: '1px solid rgba(99, 102, 241, 0.12)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, type: "spring", stiffness: 90 }}
      whileHover={{
        y: -5,
        borderColor: c.badgeBorder,
        boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 30px ${c.glow}`,
      }}
    >
      {/* Accent glow top edge */}
      <div className="absolute top-0 left-4 right-4 h-px rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${c.accent}60, transparent)` }} />

      {/* Category dot */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: c.accent, boxShadow: `0 0 8px ${c.accent}` }} />
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: c.accent }}>
          {category}
        </h4>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-1.5">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            className="badge-tech"
            style={{
              background: c.badge,
              color: c.accent,
              borderColor: c.badgeBorder,
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + i * 0.04, duration: 0.3 }}
            whileHover={{ background: `${c.badge.replace('0.0', '0.1')}` }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
