"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  items: string[];
  index: number;
}

export function SkillCard({ category, items, index }: SkillCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <h4 className="text-blue-400 font-mono text-sm mb-4">{category}</h4>
      <div className="space-y-3">
        {items.map((skill, i) => (
          <motion.div
            key={skill}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
              whileHover={{ scale: 1.5 }}
            />
            <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}