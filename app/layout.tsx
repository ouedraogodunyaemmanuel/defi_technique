import React from "react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="fr" className="h-full">
      <body className="bg-neutral-950 text-white m-0 p-0 antialiased h-full">
        
        {/* EN-TÊTE GLOBAL */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="relative block w-16 h-16">
              {/* Utilisation d'une balise img standard pour éviter le crash en production */}
              <img
                src="/logo.png"
                alt="Logo DEO Photographie"
                className="w-full h-full object-contain"
              />
            </Link>

            <nav className="bg-white/5 backdrop-blur-md rounded-lg flex overflow-hidden border border-white/5 shadow-xl">
              <Link href="/" className="px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">Accueil</Link>
              <Link href="/prestations" className="px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">Prestations</Link>
              <Link href="/a_propos" className="px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">À propos</Link>
              <Link href="/contact" className="px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <main className="min-h-screen pt-28">
          {children}
        </main>
      </body>
    </html>
  );
}