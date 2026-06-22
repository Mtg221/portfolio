"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  color?: string;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

export function GlowButton({
  children,
  onClick,
  href,
  variant = "primary",
  color = "blue",
  className = "",
  download,
  target,
  rel,
}: GlowButtonProps) {
  const colorClasses = {
    primary: `bg-${color}-600 hover:bg-${color}-500 text-white`,
    secondary: `bg-${color}-500/20 hover:bg-${color}-500/30 text-${color}-400`,
    outline: `border-2 border-${color}-600 hover:border-${color}-500 text-${color}-400 hover:text-${color}-300`,
  };

  const glowColors = {
    blue: "shadow-blue-500/50",
    violet: "shadow-violet-500/50",
    cyan: "shadow-cyan-500/50",
    green: "shadow-green-500/50",
    orange: "shadow-orange-500/50",
    pink: "shadow-pink-500/50",
  };

  const baseClasses = `
    relative font-bold py-3 px-6 rounded-lg 
    transition-all duration-300 
    hover:scale-105 hover:shadow-lg
    ${glowColors[color as keyof typeof glowColors]}
    ${colorClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className={`absolute inset-0 rounded-lg blur-lg opacity-50 ${colorClasses[variant]} transition-opacity duration-300`} />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}