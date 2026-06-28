import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home(): React.JSX.Element {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white font-sans">

      {/* 2. LE CONTENU PRINCIPAL CENTRÉ */}
      <div className="text-center space-y-8 z-10 px-4">
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">DEO.</h1>
          <h2 className="text-3xl sm:text-5xl font-light text-white opacity-90">Photographie</h2>
          <p className="pt-4 text-xl sm:text-2xl font-light text-white/80 tracking-wide">
            concerts, évènements
          </p>
        </div>

        {/* BOUTON CTA HARMONISÉ */}
        <Link 
          href="/prestations"
          className="inline-block px-8 py-4 bg-[#E8C48C] text-neutral-950 font-bold rounded-lg hover:bg-[#d4b078] transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Voir le Portfolio
        </Link>
      </div>

    </div>
  );
}