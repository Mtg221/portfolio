"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { Download } from "lucide-react";

export function CV() {
  return (
    <section id="cv" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50 relative">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">05. CV</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mon curriculum vitae
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Télécharge mon CV pour voir mon parcours complet.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            className="glass rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-violet-400 flex items-center justify-center mb-4">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Papa Makhemout Tall
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Développeur Full Stack
              </p>
            </div>
            <GlowButton
              href="/cv_fr.pdf"
              download
              color="blue"
              className="text-lg px-8 py-4"
            >
              ↓ Télécharger mon CV (PDF)
            </GlowButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}