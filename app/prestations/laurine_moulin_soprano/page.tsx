import React from "react";
import Image from "next/image";

export default function GalerieLaurineMoulin(): React.JSX.Element {
  return (
    <div className="pb-20 px-6 max-w-7xl mx-auto pt-12 space-y-16">
      
      {/* ================= BLOC 1 (Images 1, 2, 3) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-8">
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5157.jpg" 
              alt="Laurine Moulin - Photo 1" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
              priority 
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5284.jpg" 
              alt="Laurine Moulin - Photo 2" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
              priority 
            />
          </div>
        </div>
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image 
            src="/images/prestations/laurine_moulin/dscf5291 (1).jpg" 
            alt="Laurine Moulin - Photo 3" 
            width={800} 
            height={1200} 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="w-full h-auto object-contain" 
            priority 
          />
        </div>
      </div>

      {/* ================= BLOC 2 (Images 4, 5, 6) - INVERSÉ ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 order-2 md:order-1">
          <Image 
            src="/images/prestations/laurine_moulin/dscf5299.jpg" 
            alt="Laurine Moulin - Photo 4" 
            width={800} 
            height={1200} 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="w-full h-auto object-contain" 
          />
        </div>
        <div className="flex flex-col gap-8 order-1 md:order-2">
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5302.jpg" 
              alt="Laurine Moulin - Photo 5" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5317.jpg" 
              alt="Laurine Moulin - Photo 6" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
          />
          </div>
        </div>
      </div>

      {/* ================= BLOC 3 (Images 7, 8, 9) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-8">
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5324.jpg" 
              alt="Laurine Moulin - Photo 7" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5325.jpg" 
              alt="Laurine Moulin - Photo 8" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image 
            src="/images/prestations/laurine_moulin/dscf5420.jpg" 
            alt="Laurine Moulin - Photo 9" 
            width={800} 
            height={1200} 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>

      {/* ================= BLOC 4 (Images 10, 11, 12) - INVERSÉ ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 order-2 md:order-1">
          <Image 
            src="/images/prestations/laurine_moulin/dscf5477 (1).jpg" 
            alt="Laurine Moulin - Photo 10" 
            width={800} 
            height={1200} 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="w-full h-auto object-contain" 
          />
        </div>
        <div className="flex flex-col gap-8 order-1 md:order-2">
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5499 (1).jpg" 
              alt="Laurine Moulin - Photo 11" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
            />
          </div>
          <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image 
              src="/images/prestations/laurine_moulin/dscf5403.jpg" 
              alt="Laurine Moulin - Photo 12" 
              width={800} 
              height={600} 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>

      {/* ================= BLOC DE FIN (Images 13, 14) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image 
            src="/images/prestations/laurine_moulin/dscf7240.jpg" 
            alt="Laurine Moulin - Photo 13" 
            width={800} 
            height={600} 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="w-full h-auto object-contain" 
          />
        </div>
        <div className="w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image 
            src="/images/prestations/laurine_moulin/dscf7344.jpg" 
            alt="Laurine Moulin - Photo 14" 
            width={800} 
            height={600} 
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>

    </div>
  );
}