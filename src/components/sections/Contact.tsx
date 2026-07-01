"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          className="text-xs font-mono text-[#555555] mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          06. Contact
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Travaillons ensemble</h2>
            <p className="text-[#333333] leading-relaxed mb-2">
              Disponible pour des opportunités de stage, des missions freelance ou des collaborations sur des projets ambitieux.
            </p>
            <div className="inline-flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-[#0a0a0a] animate-pulse" />
              <span className="text-xs font-mono text-[#333333]">Disponible · Open to work</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between p-5 border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#555555] group-hover:text-[#0a0a0a] transition-colors" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <span className="text-xs text-[#555555] group-hover:text-[#0a0a0a] transition-colors">→</span>
            </a>

            <a
              href={personalInfo.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#555555] group-hover:text-[#0a0a0a] transition-colors" />
                <span className="text-sm">WhatsApp</span>
              </div>
              <span className="text-xs text-[#555555] group-hover:text-[#0a0a0a] transition-colors">→</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-[#555555] group-hover:text-[#0a0a0a] transition-colors" />
                <span className="text-sm">GitHub</span>
              </div>
              <span className="text-xs text-[#555555] group-hover:text-[#0a0a0a] transition-colors">→</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-[#555555] group-hover:text-[#0a0a0a] transition-colors" />
                <span className="text-sm">LinkedIn</span>
              </div>
              <span className="text-xs text-[#555555] group-hover:text-[#0a0a0a] transition-colors">→</span>
            </a>

            <a
              href="/cv_fr.pdf"
              download
              className="flex items-center justify-between p-5 border border-[#e5e5e5] hover:border-[#0a0a0a] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Download className="w-4 h-4 text-[#555555] group-hover:text-[#0a0a0a] transition-colors" />
                <span className="text-sm">Télécharger le CV</span>
              </div>
              <span className="text-xs text-[#555555] group-hover:text-[#0a0a0a] transition-colors">↓</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
