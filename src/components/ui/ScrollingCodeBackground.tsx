"use client";

const snippets = [
  "const app = express()",
  "npm run dev",
  "git commit -m '⚡ feat'",
  "useState([])",
  "fetch('/api/users')",
  "mongoose.connect(uri)",
  "useEffect(() => {}, [])",
  ".then(res => res.json())",
  "await User.findById(id)",
  "socket.emit('update', data)",
  "const router = useRouter()",
  "prisma.user.findMany()",
  "docker-compose up -d",
  "npm install --save-dev",
  "import { motion } from 'framer-motion'",
  "export default function Page()",
  "res.json({ status: 200 })",
  "Object.entries(data).map()",
  "async function handler(req, res)",
  "return <Layout>{children}</Layout>",
  "jwt.sign(payload, secret, opts)",
  "bcrypt.hash(password, 10)",
  "app.listen(PORT, callback)",
  "SELECT * FROM users WHERE id=$1",
  "kubectl apply -f deploy.yml",
  "git push origin main --tags",
  "yarn add tailwindcss postcss",
  "type Props = { id: string }",
  "const [open, setOpen] = useState(false)",
  "useMemo(() => compute(dep), [dep])",
  "schema.parse(req.body)",
  "await db.transaction(async (tx) => {})",
  "import { z } from 'zod'",
  "env.NEXT_PUBLIC_API_URL",
  "useCallback(() => fn(), [dep])",
];

// 9 columns — speeds & opacities varied to create depth
const COLS = [
  { offset: 0,  dur: 32,  opacity: 0.45, left: "1%",  color: "0,153,255"  },
  { offset: 7,  dur: 48,  opacity: 0.22, left: "12%", color: "0,85,255"   },
  { offset: 14, dur: 25,  opacity: 0.50, left: "24%", color: "0,204,255"  },
  { offset: 4,  dur: 60,  opacity: 0.18, left: "36%", color: "0,85,255"   },
  { offset: 20, dur: 38,  opacity: 0.38, left: "48%", color: "0,119,255"  },
  { offset: 10, dur: 52,  opacity: 0.20, left: "60%", color: "0,85,255"   },
  { offset: 28, dur: 28,  opacity: 0.42, left: "72%", color: "0,170,255"  },
  { offset: 18, dur: 44,  opacity: 0.25, left: "83%", color: "0,85,255"   },
  { offset: 24, dur: 35,  opacity: 0.35, left: "93%", color: "0,136,255"  },
];

export function ScrollingCodeBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 1 }}>
      {COLS.map((col, ci) => {
        const lines = Array.from({ length: 18 }, (_, i) =>
          snippets[(col.offset + i) % snippets.length]
        );
        // Duplicate for seamless infinite scroll (translateY -50%)
        const doubled = [...lines, ...lines];
        return (
          <div
            key={ci}
            className="absolute top-0 font-mono text-[10px] whitespace-nowrap"
            style={{
              left: col.left,
              color: `rgba(${col.color}, ${col.opacity})`,
              animation: `scrollCode ${col.dur}s linear infinite`,
            }}
          >
            {doubled.map((line, li) => (
              <div key={li} style={{ padding: "6px 0", lineHeight: 1 }}>{line}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
