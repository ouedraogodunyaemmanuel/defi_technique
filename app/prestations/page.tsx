import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Prestations(): React.JSX.Element {
  return (
    <div className="pb-16 px-6 max-w-7xl mx-auto pt-12">
      {/* Titre principal */}
      <h1 className="text-5xl font-extralight text-center mb-20 tracking-widest text-neutral-200">
        Portfolio
      </h1>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PortfolioCard 
          title="Laurine Moulin - Soprano" 
          href="/prestations/laurine_moulin_soprano"
          imageSrc="/images/prestations/dscf5403.jpg" 
        />
        <PortfolioCard 
          title="Collectif Pierre" 
          href="/prestations/collectif_pierre"
          imageSrc="/images/prestations/collectif_pierre/dscf7240.jpg" 
        />
        <PortfolioCard 
          title="Carnaval de Sion" 
          href="/prestations/carnaval_sion"
          imageSrc="/images/prestations/carnaval_sion/dscf6428.jpg" 
        />
      </div>
    </div>
  );
}

function PortfolioCard({ 
  title, 
  href, 
  imageSrc 
}: { 
  title: string; 
  href: string; 
  imageSrc: string; 
}): React.JSX.Element {
  return (
    <Link 
      href={href} 
      className="group relative h-[600px] overflow-hidden rounded-md block shadow-2xl bg-neutral-900"
    >
      {/* Image optimisée */}
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105" 
        priority
      />
      
      {/* Overlay de lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
      
      {/* Texte */}
      <div className="absolute bottom-10 left-0 right-0 px-6">
        <h2 className="text-3xl font-light text-center tracking-wide text-white group-hover:translate-y-[-5px] transition-transform duration-300">
          {title}
        </h2>
      </div>
    </Link>
  );
}