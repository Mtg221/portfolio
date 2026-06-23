"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string;
}

export function GradientText({ children, className = "", colors }: GradientTextProps) {
  const defaultColors = "from-[#0055FF] via-[#0099FF] to-[#00CCFF]";
  return (
    <motion.span
      className={`bg-gradient-to-r ${colors || defaultColors} bg-clip-text text-transparent ${className}`}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      {children}
    </motion.span>
  );
}
