"use client";

import { useScroll, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[999] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899, #0ea5e9, #06b6d4)",
      }}
    />
  );
}
