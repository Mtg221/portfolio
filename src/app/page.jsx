"use client";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "DriveElite",
    description:
      "Application complète de gestion de réservation de véhicules. Architecture fullstack avec gestion des rôles, authentification sécurisée et interactions dynamiques entre frontend et backend.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    live: "https://device-tracker-delta.vercel.app",
    github: "https://github.com/Mtg221/device-tracker",
    color: "#3B82F6",
  },
  {
    title: "Sénégal Dishes",
    description:
      "Plateforme de commande en ligne pour restaurants. Catalogue de plats, panier, authentification, dashboard admin et gestion des livraisons — prêt pour la production.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    live: "https://restaurant-self-kappa-35.vercel.app",
    github: "https://github.com/Mtg221/restaurant",
    color: "#F97316",
  },
  {
    title: "TicTacToe Multijoueur",
    description:
      "Jeu multijoueur en temps réel avec synchronisation des joueurs via WebSockets. Démontre la maîtrise des architectures interactives et des systèmes temps réel.",
    stack: ["React", "Node.js", "Socket.io", "WebSockets"],
    live: "https://multiplayer-tic-tac-toe-delta.vercel.app",
    github: "https://github.com/Mtg221/multiplayer_tic_tac_toe",
    color: "#10B981",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Java"] },
  { category: "Bases de données", items: ["MongoDB", "MySQL", "SQLite", "Firebase"] },
  { category: "DevOps & Outils", items: ["Git", "Vercel", "Render", "Unix"] },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-white text-sm tracking-tight">
            PMT<span className="text-blue-400">.</span>
          </span>
          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6 text-sm">
            {["about", "projects", "skills", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`capitalize transition-colors ${
                  activeSection === s ? "text-blue-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {s === "about" ? "À propos" : s === "projects" ? "Projets" : s === "skills" ? "Compétences" : "Contact"}
              </button>
            ))}
            <a
              href="/cv_fr.pdf"
              download
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-md transition-colors"
            >
              CV ↓
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="sm:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 flex flex-col gap-3 text-sm">
            {[
              { id: "about", label: "À propos" },
              { id: "projects", label: "Projets" },
              { id: "skills", label: "Compétences" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-gray-300 hover:text-white py-1">
                {label}
              </button>
            ))}
            <a href="/cv_fr.pdf" download className="bg-blue-600 text-white text-center py-2 rounded-md font-bold text-xs">
              Télécharger CV ↓
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center px-4 pt-14">
        <div className="max-w-5xl mx-auto w-full py-20">
          <p className="text-blue-400 text-sm font-mono mb-4">Bonjour, je suis</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
            Papa Makhemout<br />
            <span className="text-blue-400">Tall</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6">
            Développeur Full Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
            Je transforme des idées en applications complètes et utilisables. React, Node.js, MongoDB — des systèmes rapides, propres et évolutifs adaptés aux besoins réels.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 duration-200"
            >
              Voir mes projets →
            </button>
            <a
              href="/cv_fr.pdf"
              download
              className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Télécharger CV ↓
            </a>
          </div>
          {/* Social links */}
          <div className="flex gap-4 mt-10">
            <a href="https://github.com/Mtg221" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm font-mono">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/papa-makhemout-tall-203a95352" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm font-mono">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-blue-400 mb-2">01. À propos</h2>
          <h3 className="text-3xl font-bold text-white mb-10">Qui suis-je ?</h3>
          <div className="grid sm:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Développeur fullstack spécialisé dans la création de solutions web modernes et orientées produit, je transforme des idées en applications complètes et utilisables : commandes, gestion, expérience client.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Je travaille avec React, Node.js et MongoDB pour construire des systèmes rapides, propres et évolutifs adaptés aux besoins réels des entreprises locales.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Je ne fais pas juste des sites — je construis des outils qui améliorent concrètement ton activité et qui peuvent être utilisés dès le premier jour.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                <p className="text-xs font-mono text-blue-400 mb-1">Formation</p>
                <p className="font-bold text-white">Diplôme d'ingénieur en informatique</p>
                <p className="text-gray-400 text-sm">Dakar American University of Science & Technology</p>
                <p className="text-gray-500 text-xs mt-1">2023 – Présent · Somone, Sénégal</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                <p className="text-xs font-mono text-blue-400 mb-1">Langues</p>
                <div className="flex gap-3 flex-wrap">
                  {["Français — Natif", "Wolof — Natif", "English — Courant"].map(l => (
                    <span key={l} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">{l}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                <p className="text-xs font-mono text-blue-400 mb-2">Localisation</p>
                <p className="text-gray-300 text-sm">📍 Dakar, Sénégal</p>
                <p className="text-gray-300 text-sm mt-1">✉️ asstallfils@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-blue-400 mb-2">02. Projets</h2>
          <h3 className="text-3xl font-bold text-white mb-10">Ce que j'ai construit</h3>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <div key={p.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-gray-600 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-gray-500">0{i + 1}</span>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{p.title}</h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-xl">{p.description}</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded-md transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-md transition-all"
                    >
                      Live ↗
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full font-mono border border-gray-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-blue-400 mb-2">03. Compétences</h2>
          <h3 className="text-3xl font-bold text-white mb-10">Stack technique</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div key={s.category} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                <h4 className="text-blue-400 font-mono text-xs mb-4">{s.category}</h4>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-mono text-blue-400 mb-2">04. Contact</h2>
          <h3 className="text-3xl font-bold text-white mb-4">Travaillons ensemble</h3>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Disponible pour des opportunités de stage, des missions freelance ou des collaborations sur des projets ambitieux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="mailto:asstallfils@gmail.com"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 duration-200"
            >
              ✉️ asstallfils@gmail.com
            </a>
            <a
              href="https://wa.me/221781224646"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/Mtg221" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm font-mono">GitHub ↗</a>
            <a href="https://linkedin.com/in/papa-makhemout-tall-203a95352" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm font-mono">LinkedIn ↗</a>
            <a href="/cv_fr.pdf" download
              className="text-gray-500 hover:text-white transition-colors text-sm font-mono">CV ↓</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 px-4 text-center text-gray-600 text-sm font-mono">
        Conçu & développé par Papa Makhemout Tall · 2026
      </footer>
    </div>
  );
}