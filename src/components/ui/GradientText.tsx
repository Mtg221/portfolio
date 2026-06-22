"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string;
}

export function GradientText({ children, className = "", colors }: GradientTextProps) {
  const defaultColors = "from-blue-400 via-cyan-400 to-violet-400";
  
  return (
    <motion.span
      className={`bg-gradient-to-r ${colors || defaultColors} bg-clip-text text-transparent ${className}`}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      {children}
    </motion.span>
  );
}