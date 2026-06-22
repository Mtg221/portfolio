import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papa Makhemout Tall - Développeur Full Stack",
  description: "Portfolio de Papa Makhemout Tall, développeur full stack spécialisé en React, Node.js et MongoDB. Découvrez mes projets et compétences.",
  keywords: ["développeur", "full stack", "React", "Node.js", "MongoDB", "portfolio", "Dakar", "Sénégal"],
  authors: [{ name: "Papa Makhemout Tall" }],
  openGraph: {
    title: "Papa Makhemout Tall - Développeur Full Stack",
    description: "Portfolio de Papa Makhemout Tall, développeur full stack spécialisé en React, Node.js et MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}