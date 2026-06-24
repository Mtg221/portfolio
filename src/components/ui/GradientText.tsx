"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string;
}

export function GradientText({ children, className = "", colors }: GradientTextProps) {
  const defaultColors = "from-[#606060] via-[#d0d0d0] to-[#ffffff]";
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
