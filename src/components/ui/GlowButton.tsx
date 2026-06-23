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

const colors: Record<string, { bg: string; border: string; glow: string; text: string; hoverBg: string }> = {
  blue: {
    bg:      "linear-gradient(135deg, #3b5ef7, #4f8ef7)",
    border:  "rgba(96,165,250,0.5)",
    glow:    "rgba(96,165,250,0.3)",
    text:    "#ffffff",
    hoverBg: "linear-gradient(135deg, #4f6fff, #60a5fa)",
  },
  violet: {
    bg:      "linear-gradient(135deg, #7c3aed, #a855f7)",
    border:  "rgba(167,139,250,0.5)",
    glow:    "rgba(167,139,250,0.3)",
    text:    "#ffffff",
    hoverBg: "linear-gradient(135deg, #8b5cf6, #c084fc)",
  },
  green: {
    bg:      "linear-gradient(135deg, #16a34a, #22c55e)",
    border:  "rgba(74,222,128,0.4)",
    glow:    "rgba(74,222,128,0.25)",
    text:    "#ffffff",
    hoverBg: "linear-gradient(135deg, #22c55e, #4ade80)",
  },
};

export function GlowButton({
  children, onClick, href, variant = "primary", color = "blue",
  className = "", download, target, rel,
}: GlowButtonProps) {
  const c = colors[color] ?? colors.blue;

  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";

  const baseStyle: React.CSSProperties = isPrimary
    ? { background: c.bg, color: c.text, border: `1px solid ${c.border}`, boxShadow: `0 4px 20px ${c.glow}` }
    : isOutline
    ? { background: 'rgba(8,9,28,0.5)', color: c.text, border: `1px solid ${c.border}` }
    : { background: c.glow, color: c.text, border: `1px solid ${c.border}` };

  const baseClass = [
    "relative inline-flex items-center justify-center",
    "font-bold py-2.5 px-6 rounded-xl text-sm",
    "transition-all duration-300 cursor-pointer select-none",
    className,
  ].join(" ");

  const hoverProps = {
    scale: 1.04,
    y: -2,
    boxShadow: `0 8px 32px ${c.glow}`,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={baseClass}
        style={baseStyle}
        whileHover={hoverProps}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClass}
      style={baseStyle}
      whileHover={hoverProps}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
