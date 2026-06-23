export const personalInfo = {
  name: "Papa Makhemout Tall",
  firstName: "Papa Makhemout",
  lastName: "Tall",
  title: "Développeur Full Stack",
  email: "asstallfils@gmail.com",
  phone: "+221 78 122 46 46",
  location: "Dakar, Sénégal",
  github: "https://github.com/Mtg221",
  linkedin: "https://linkedin.com/in/papa-makhemout-tall-203a95352",
  whatsapp: "https://wa.me/221781224646",
};

export const navItems = [
  { id: "about", label: "À propos" },
  { id: "projects", label: "Projets" },
  { id: "skills", label: "Compétences" },
  { id: "certifications", label: "Certifications" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    slug: "driveelite",
    title: "DriveElite",
    shortDescription: "Application de gestion de réservation de véhicules",
    description:
      "Application complète de gestion de réservation de véhicules. Architecture fullstack avec gestion des rôles, authentification sécurisée et interactions dynamiques entre frontend et backend.",
    longDescription:
      "DriveElite est une plateforme complète de location de véhicules qui permet aux utilisateurs de réserver des voitures en ligne. L'application inclut un système d'authentification sécurisé, une gestion des rôles (admin, client), un catalogue de véhicules avec filtres, un panier de réservation, et un dashboard admin pour gérer les réservations et les véhicules.",
    features: [
      "Authentification JWT sécurisée",
      "Gestion des rôles (Admin/Client)",
      "Catalogue de véhicules avec filtres",
      "Système de réservation complet",
      "Dashboard admin",
      "API RESTful",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://locationsvoituresdemakh.vercel.app/",
    github: "https://github.com/Mtg221/device-tracker",
    image: "/projects/driveelite.png",
    color: "#0055FF",
  },
  {
    slug: "senegal-dishes",
    title: "Sénégal Dishes",
    shortDescription: "Plateforme de commande en ligne pour restaurants",
    description:
      "Plateforme de commande en ligne pour restaurants. Catalogue de plats, panier, authentification, dashboard admin et gestion des livraisons — prêt pour la production.",
    longDescription:
      "Sénégal Dishes est une plateforme de commande en ligne spécialisée dans la cuisine sénégalaise. Les utilisateurs peuvent parcourir le menu, ajouter des plats au panier, passer des commandes et suivre leurs livraisons. L'application inclut un dashboard admin pour gérer les plats, les commandes et les livraisons.",
    features: [
      "Catalogue de plats sénégalais",
      "Panier et commande en ligne",
      "Suivi des livraisons",
      "Dashboard admin complet",
      "Authentification sécurisée",
      "Gestion des stocks",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    live: "https://restaurantdemakh.vercel.app/",
    github: "https://github.com/Mtg221/restaurant",
    image: "/projects/senegal-dishes.png",
    color: "#0077FF",
  },
  {
    slug: "tictactoe",
    title: "TicTacToe Multijoueur",
    shortDescription: "Jeu multijoueur en temps réel avec WebSockets",
    description:
      "Jeu multijoueur en temps réel avec synchronisation des joueurs via WebSockets. Démontre la maîtrise des architectures interactives et des systèmes temps réel.",
    longDescription:
      "Un jeu de TicTacToe multijoueur qui permet à deux joueurs de s'affronter en temps réel. L'application utilise les WebSockets pour synchroniser les coups entre les joueurs, gérer les salles de jeu et maintenir l'état du jeu en temps réel.",
    features: [
      "Multijoueur en temps réel",
      "WebSockets pour la synchronisation",
      "Système de salles de jeu",
      "Chat en temps réel",
      "Historique des parties",
      "Classement des joueurs",
    ],
    stack: ["React", "Node.js", "Socket.io", "WebSockets"],
    live: "https://multiplayer-tic-tac-toe-delta.vercel.app",
    github: "https://github.com/Mtg221/multiplayer_tic_tac_toe",
    image: "/projects/tictactoe.png",
    color: "#0099FF",
  },
  {
    slug: "nkg-couture",
    title: "NKG Couture",
    shortDescription: "Application de gestion pour atelier de couture",
    description:
      "Application complète de gestion pour atelier de couture à Dakar. Gestion des rendez-vous, mesures clients, commandes et suivi de production.",
    longDescription:
      "NKG Couture est une application de gestion pour atelier de couture qui permet de gérer tous les aspects de l'activité : prise de rendez-vous, enregistrement des mesures clients, suivi des commandes, gestion des paiements et suivi de la production. L'application optimise le flux de travail de l'atelier et améliore l'expérience client.",
    features: [
      "Gestion des rendez-vous",
      "Carnet de mesures clients",
      "Suivi des commandes",
      "Gestion des paiements",
      "Suivi de production",
      "Notifications clients",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    live: "https://couture1.vercel.app/",
    github: "https://github.com/Mtg221/couture1",
    image: "/projects/nkg-couture.png",
    color: "#00AAFF",
  },
  {
    slug: "footreserve",
    title: "FootReserve",
    shortDescription: "Application de réservation de terrains de football",
    description:
      "Plateforme de réservation de terrains de football à Dakar. Recherche, réservation en ligne, gestion des créneaux horaires et paiement.",
    longDescription:
      "FootReserve est une plateforme qui permet aux passionnés de football de réserver facilement des terrains à Dakar. L'application offre une recherche géolocalisée, la disponibilité en temps réel, la réservation en ligne et un système de paiement intégré. Les gestionnaires de terrains peuvent gérer leurs créneaux horaires et leurs réservations via un dashboard dédié.",
    features: [
      "Recherche de terrains géolocalisée",
      "Réservation en temps réel",
      "Gestion des créneaux horaires",
      "Paiement en ligne",
      "Dashboard gestionnaire",
      "Système d'avis",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    live: "https://foot-vert.vercel.app/",
    github: "https://github.com/Mtg221/foot",
    image: "/projects/footreserve.png",
    color: "#00CCFF",
  },
];

export const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "TailwindCSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Java", "REST API"] },
  { category: "Bases de données", items: ["MongoDB", "MySQL", "SQLite", "Firebase", "PostgreSQL"] },
  { category: "DevOps & Outils", items: ["Git", "GitHub", "Vercel", "Render", "Docker", "Linux"] },
];

export const certifications = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Mai 2025",
    id: "4L3CQglaSmSDhAupux3W1Q",
    link: "https://learn.nvidia.com/certificates?id=4L3CQglaSmSDhAupux3W1Q#",
    color: "#0088FF",
    icon: "N",
  },
];

export const education = {
  degree: "Diplôme d'ingénieur en informatique",
  school: "Dakar American University of Science & Technology",
  period: "2023 – Présent",
  location: "Somone, Sénégal",
};

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Wolof", level: "Natif" },
  { name: "English", level: "Courant" },
];