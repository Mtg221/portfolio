"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

export function Navbar({ activeSection, scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: 'rgba(3, 4, 15, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.12)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
      } : { background: 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("hero")}
          className="font-black text-sm tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-slate-100">PMT</span>
          <span style={{ color: 'var(--violet)' }}>.</span>
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-7 text-sm">
          {navItems.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative transition-colors duration-200 font-medium"
              style={{ color: activeSection === id ? 'var(--blue)' : '#64748b' }}
              whileHover={{ y: -1 }}
              onMouseEnter={e => {
                if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = '#94a3b8';
              }}
              onMouseLeave={e => {
                if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = '#64748b';
              }}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, var(--blue), var(--violet))' }}
                  layoutId="activeNav"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden transition-colors"
          style={{ color: '#64748b' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sm:hidden border-t"
            style={{
              background: 'rgba(3, 4, 15, 0.97)',
              backdropFilter: 'blur(20px)',
              borderColor: 'rgba(99, 102, 241, 0.12)',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navItems.map(({ id, label }) => (
                <motion.button
                  key={id}
                  onClick={() => { scrollTo(id); setMenuOpen(false); }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: activeSection === id ? 'var(--blue)' : '#64748b',
                    background: activeSection === id ? 'rgba(96,165,250,0.07)' : 'transparent',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
