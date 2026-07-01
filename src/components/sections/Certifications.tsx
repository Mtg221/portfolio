"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          className="text-xs font-mono text-[#555555] mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          04. Certifications
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-black tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Certifications obtenues
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-px bg-[#e5e5e5]">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                className="group block p-8 hover:bg-[#f9f9f9] transition-colors border border-transparent hover:border-[#0a0a0a]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-mono font-bold text-[#0a0a0a] mb-1">{cert.issuer}</p>
                    <p className="text-[10px] text-[#555555]">{cert.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#555555] group-hover:text-[#0a0a0a] transition-colors" />
                </div>
                <h4 className="font-bold text-sm mb-3">{cert.title}</h4>
                <p className="text-[10px] font-mono text-[#555555]">ID · {cert.id}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
