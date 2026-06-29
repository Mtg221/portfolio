"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { Menu, X } from "lucide-react";

interface NavbarProps { activeSection: string; scrollTo: (id: string) => void; }

export function Navbar({ activeSection, scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      } : { background: "transparent" }}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")}
          className="font-bold text-sm tracking-tight"
          style={{ color: "var(--text-bright)" }}>
          PMT<span style={{ color: "var(--accent)" }}>.</span>
        </button>

        <div className="hidden sm:flex items-center gap-8 text-sm">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="relative transition-colors duration-200"
              style={{ color: activeSection === id ? "var(--text-bright)" : "var(--text-dim)" }}>
              {label}
              {activeSection === id && (
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-px"
                  style={{ background: "var(--accent)" }}
                  layoutId="nav-indicator"
                />
              )}
            </button>
          ))}
        </div>

        <button className="sm:hidden" style={{ color: "var(--text-dim)" }} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="sm:hidden border-t"
            style={{ background: "rgba(10,10,10,0.98)", borderColor: "var(--border)" }}
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map(({ id, label }) => (
                <button key={id} onClick={() => { scrollTo(id); setMenuOpen(false); }}
                  className="text-left py-2.5 text-sm transition-colors"
                  style={{ color: activeSection === id ? "var(--text-bright)" : "var(--text-dim)" }}>
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
