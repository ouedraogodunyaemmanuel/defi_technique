import React from "react";
import Image from "next/image";

export default function Propos(): React.JSX.Element {
  return (
    <div className="pb-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-12">
      
      {/* Texte descriptif */}
      <div className="space-y-8">
        <h1 className="text-5xl font-extralight tracking-widest text-neutral-200">
          Qui suis-je ?
        </h1>
        <div className="space-y-4">
          <p className="text-lg text-neutral-300 leading-relaxed font-light">
            Bonjour et bienvenue sur mon site. Je m'appelle Dûnya-Emmanuel Ouédraogo et j'étudie les arts visuels au Lycée-Collège de St-Maurice.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed font-light">
            Étant passionné de photographie, j'ai développé un amour pour la capture de moments précieux et uniques à travers mon objectif. 
            Entre concerts, évènements et spectacles en tout genre, laissez-vous transporter par mon travail.
          </p>
        </div>
      </div>

      {/* Portrait optimisé */}
      <div className="relative h-[600px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
        <Image 
          src="/images/a_propos/20251231_182604(1)(1) (2).jpg" 
          alt="Portrait de Dûnya-Emmanuel Ouédraogo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center" 
          priority
        />
      </div>
    </div>
  );
}