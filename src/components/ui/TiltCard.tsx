"use client";

import { useRef, ReactNode, CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  tiltDeg?: number;
}

export function TiltCard({ children, className = "", style, tiltDeg = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 18 };
  const rotateX = useSpring(useTransform(y, [0, 1], [tiltDeg, -tiltDeg]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-tiltDeg, tiltDeg]), spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
