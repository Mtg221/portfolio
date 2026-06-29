"use client";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>
          © {year} {personalInfo.name}
        </p>
        <p className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>
          Conçu & développé par PMT
        </p>
      </div>
    </footer>
  );
}
