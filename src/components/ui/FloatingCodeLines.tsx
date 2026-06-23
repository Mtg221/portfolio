"use client";

import { motion } from "framer-motion";

const snippets = [
  { text: "const app = express()",          x: "6%",  y: "12%", dur: 8,   delay: 0   },
  { text: "npm run dev",                     x: "72%", y: "18%", dur: 11,  delay: 1   },
  { text: "git commit -m '⚡ feat'",         x: "8%",  y: "70%", dur: 9,   delay: 2   },
  { text: "useState([])",                    x: "66%", y: "75%", dur: 7,   delay: 0.5 },
  { text: "fetch('/api/data')",              x: "28%", y: "6%",  dur: 12,  delay: 1.5 },
  { text: "mongoose.connect(uri)",           x: "54%", y: "88%", dur: 8.5, delay: 3   },
  { text: "useEffect(() => {}, [])",         x: "78%", y: "46%", dur: 10,  delay: 2   },
  { text: ".then(res => res.json())",        x: "2%",  y: "45%", dur: 13,  delay: 4   },
  { text: "await User.findById(id)",         x: "40%", y: "93%", dur: 9,   delay: 1   },
  { text: "socket.emit('update', data)",     x: "82%", y: "8%",  dur: 11,  delay: 3.5 },
];

export function FloatingCodeLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {snippets.map((s, i) => (
        <motion.div key={i}
          className="absolute font-mono text-[11px] whitespace-nowrap"
          style={{ left: s.x, top: s.y, color: "rgba(0,85,255,0.22)" }}
          animate={{ y: [-6, 6, -6], opacity: [0.12, 0.30, 0.12] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}>
          {s.text}
        </motion.div>
      ))}
    </div>
  );
}
