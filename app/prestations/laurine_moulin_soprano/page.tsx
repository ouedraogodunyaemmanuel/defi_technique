import React from "react";
import Image from "next/image";

export default function GalerieLaurineMoulin(): React.JSX.Element {
  return (
    <div className="pb-20 px-6 max-w-7xl mx-auto pt-12">
      
      {/* Grille uniforme de 2 colonnes qui aligne parfaitement les photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Photo 1 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5157.jpg" alt="Laurine Moulin - Photo 1" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" priority />
        </div>

        {/* Photo 2 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5284.jpg" alt="Laurine Moulin - Photo 2" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" priority />
        </div>

        {/* Photo 3 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5291 (1).jpg" alt="Laurine Moulin - Photo 3" width={800} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" priority />
        </div>

        {/* Photo 4 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5299.jpg" alt="Laurine Moulin - Photo 4" width={800} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 5 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5302.jpg" alt="Laurine Moulin - Photo 5" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 6 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5317.jpg" alt="Laurine Moulin - Photo 6" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 7 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5324.jpg" alt="Laurine Moulin - Photo 7" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 8 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5325.jpg" alt="Laurine Moulin - Photo 8" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 9 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5420.jpg" alt="Laurine Moulin - Photo 9" width={800} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 10 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5477 (1).jpg" alt="Laurine Moulin - Photo 10" width={800} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 11 */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/laurine_moulin/dscf5499 (1).jpg" alt="Laurine Moulin - Photo 11" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

        {/* Photo 12 (Corrigée : présente à la racine de /prestations/) */}
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/dscf5403.jpg" alt="Laurine Moulin - Photo 12" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto object-contain" />
        </div>

      </div>
    </div>
  );
}