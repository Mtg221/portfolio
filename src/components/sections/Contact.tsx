"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { personalInfo } from "@/lib/data";
import { Mail, MessageCircle, Github, Linkedin, Download, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">06. Contact</h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Travaillons ensemble
            </h3>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg max-w-xl mx-auto">
            Disponible pour des opportunités de stage, des missions freelance ou des collaborations sur des projets ambitieux.
          </p>
        </AnimatedSection>

        {/* CTA buttons */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <GlowButton
              href={`mailto:${personalInfo.email}`}
              color="blue"
              className="flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {personalInfo.email}
            </GlowButton>
            <GlowButton
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="green"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </GlowButton>
          </div>
        </AnimatedSection>

        {/* Social links card */}
        <AnimatedSection delay={0.4}>
          <motion.div
            className="relative rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 overflow-hidden card-shine"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />
            <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 rounded-2xl" />

            <div className="relative z-10">
              <p className="text-sm font-mono text-blue-400 mb-5 font-bold uppercase tracking-wider">Retrouvez-moi sur</p>
              <div className="flex gap-4 justify-center flex-wrap">
                {[
                  { href: personalInfo.github, icon: Github, label: "GitHub", color: "hover:text-gray-300 hover:border-gray-500" },
                  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400" },
                  { href: "/cv_fr.pdf", icon: Download, label: "Télécharger CV", color: "hover:text-violet-400 hover:border-violet-400", download: true },
                ].map(({ href, icon: Icon, label, color, download }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={!download ? "_blank" : undefined}
                    rel={!download ? "noopener noreferrer" : undefined}
                    download={download}
                    className={`flex items-center gap-2.5 text-gray-500 dark:text-gray-400 text-sm font-mono px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${color}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
