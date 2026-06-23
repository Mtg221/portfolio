"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

const categoryConfig: Record<string, { gradient: string; border: string; dot: string; label: string }> = {
  Frontend: {
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    dot: "from-blue-400 to-cyan-400",
    label: "text-blue-400",
  },
  Backend: {
    gradient: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
    dot: "from-green-400 to-emerald-400",
    label: "text-green-400",
  },
  "Bases de données": {
    gradient: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    dot: "from-orange-400 to-amber-400",
    label: "text-orange-400",
  },
  "DevOps & Outils": {
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    dot: "from-violet-400 to-purple-400",
    label: "text-violet-400",
  },
};

export function SkillCard({ category, items, index }: SkillCardProps) {
  const config = categoryConfig[category] ?? {
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    dot: "from-blue-400 to-cyan-400",
    label: "text-blue-400",
  };

  return (
    <motion.div
      className={`relative rounded-2xl p-6 border ${config.border} bg-gradient-to-br ${config.gradient} backdrop-blur-sm card-shine overflow-hidden`}
      style={{ background: undefined }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.03, translateY: -4 }}
    >
      {/* Background gradient layer */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${config.gradient} dark:opacity-100 opacity-30`} />
      <div className="absolute inset-0 rounded-2xl bg-white/80 dark:bg-gray-900/80" />

      {/* Decorative corner dot */}
      <div className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r ${config.dot} opacity-60`} />

      <div className="relative z-10">
        <h4 className={`font-mono text-xs font-bold mb-4 uppercase tracking-widest ${config.label}`}>
          {category}
        </h4>

        <div className="flex flex-wrap gap-2">
          {items.map((skill, i) => (
            <motion.span
              key={skill}
              className={`badge-tech bg-white/50 dark:bg-gray-800/50 ${config.border} ${config.label} hover:bg-white/80 dark:hover:bg-gray-700/80`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
