"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { certifications } from "@/lib/data";
import { ExternalLink, Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">04. Certifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Certifications obtenues
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.id} delay={index * 0.1}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <motion.div
                  className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
                        style={{ 
                          backgroundColor: `${cert.color}20`, 
                          color: cert.color 
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <p className="text-xs font-mono text-gray-500">{cert.issuer}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{cert.date}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-blue-400 transition-colors text-xs font-mono flex items-center gap-1">
                      Vérifier <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-gray-500">ID : {cert.id}</p>
                </motion.div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}