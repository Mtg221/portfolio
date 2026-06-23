"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(139,92,246,0.055) 0%, rgba(96,165,250,0.025) 40%, transparent 70%)",
        transition: "left 0.12s ease-out, top 0.12s ease-out",
      }}
    />
  );
}
