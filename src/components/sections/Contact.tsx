"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { personalInfo } from "@/lib/data";
import { Mail, MessageCircle, Github, Linkedin, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-sm font-mono text-blue-400 mb-2">06. Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Travaillons ensemble
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
            Disponible pour des opportunités de stage, des missions freelance ou des collaborations sur des projets ambitieux.
          </p>
        </AnimatedSection>

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

        <AnimatedSection delay={0.4}>
          <motion.div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <p className="text-sm font-mono text-blue-400 mb-4">Suivez-moi</p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm font-mono group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm font-mono group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a
                href="/cv_fr.pdf"
                download
                className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm font-mono group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                CV
              </a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}