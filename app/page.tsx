import React from "react";
import Image from "next/image";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans antialiased">
      
      {/* 1. L'IMAGE DE FOND */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <Image
          src="/photo-concert.jpg"
          alt="Ambiance de concert"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. LE CONTENU PRINCIPAL (Le header est maintenant géré par le layout) */}
      <main className="flex min-h-screen items-center justify-center pt-24">
        <div className="text-center space-y-2">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">DEO.</h1>
          <h2 className="text-3xl sm:text-5xl font-light text-white opacity-90">Photographie</h2>
          <p className="pt-4 text-xl sm:text-2xl font-light text-white/80 tracking-wide">concerts, évènements</p>
        </div>
      </main>

    </div>
  );
}