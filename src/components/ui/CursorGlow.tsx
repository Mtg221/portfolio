"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref}
      className="fixed pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(0,85,255,0.055) 0%, rgba(0,153,255,0.018) 45%, transparent 70%)",
        transition: "left 0.11s ease-out, top 0.11s ease-out",
      }}
    />
  );
}
