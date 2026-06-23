"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline";
  color?: string;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

export function GlowButton({
  children, onClick, href,
  variant = "primary",
  color = "blue",
  className = "", download, target, rel,
}: GlowButtonProps) {
  const isPrimary = variant === "primary";

  const baseStyle: React.CSSProperties = isPrimary ? {
    background:  "linear-gradient(135deg, #0044EE, #0077FF)",
    color:       "#ffffff",
    border:      "1px solid rgba(0,153,255,0.5)",
    boxShadow:   "0 4px 20px rgba(0,85,255,0.30), inset 0 1px 0 rgba(255,255,255,0.08)",
  } : {
    background:  "rgba(0,85,255,0.06)",
    color:       "#60b4ff",
    border:      "1px solid rgba(0,85,255,0.35)",
    boxShadow:   "none",
  };

  const baseClass = [
    "relative inline-flex items-center justify-center gap-2",
    "font-bold py-2.5 px-6 rounded-xl text-sm",
    "transition-all duration-300 cursor-pointer select-none",
    className,
  ].join(" ");

  const hoverStyle = isPrimary ? {
    scale: 1.05, y: -2,
    boxShadow: "0 8px 36px rgba(0,85,255,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
  } : {
    scale: 1.04, y: -2,
    background: "rgba(0,85,255,0.12)",
    borderColor: "rgba(0,153,255,0.6)",
    boxShadow: "0 0 24px rgba(0,85,255,0.25)",
  };

  if (href) {
    return (
      <motion.a href={href} download={download} target={target} rel={rel}
        className={baseClass} style={baseStyle}
        whileHover={hoverStyle} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick}
      className={baseClass} style={baseStyle}
      whileHover={hoverStyle} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  );
}
