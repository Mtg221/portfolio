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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("hero")}
          className="font-bold text-gray-900 dark:text-white text-sm tracking-tight flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PMT<span className="text-blue-400">.</span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {navItems.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative transition-colors ${
                activeSection === id
                  ? "text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              whileHover={{ y: -2 }}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400"
                  layoutId="activeNav"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-4">
          <button
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sm:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 flex flex-col gap-4 text-sm">
              {navItems.map(({ id, label }) => (
                <motion.button
                  key={id}
                  onClick={() => {
                    scrollTo(id);
                    setMenuOpen(false);
                  }}
                  className={`text-left py-2 ${
                    activeSection === id
                      ? "text-blue-400"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                  whileTap={{ scale: 0.98 }}
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