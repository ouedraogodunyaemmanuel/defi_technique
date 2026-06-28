import React from "react";
import Image from "next/image";

export default function GalerieCollectifPierre(): React.JSX.Element {
  return (
    <div className="pb-20 px-6 max-w-7xl mx-auto pt-12 space-y-16">
      
      {/* ================= BLOC 1 ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col gap-8 justify-between">
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf4385_1.jpg" alt="Collectif Pierre - Photo 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf4672_1.jpg" alt="Collectif Pierre - Photo 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
        <div className="relative h-[592px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/collectif_pierre/dscf4714_1.jpg" alt="Collectif Pierre - Photo 3" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
      </div>

      {/* ================= BLOC 2 - INVERSÉ ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="relative h-[592px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 order-2 md:order-1">
          <Image src="/images/prestations/collectif_pierre/dscf4844.jpg" alt="Collectif Pierre - Photo 4" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-8 justify-between order-1 md:order-2">
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf5707.jpg" alt="Collectif Pierre - Photo 5" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf5824.jpg" alt="Collectif Pierre - Photo 6" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>

      {/* ================= BLOC 3 ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col gap-8 justify-between">
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf5831.jpg" alt="Collectif Pierre - Photo 7" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf6655.jpg" alt="Collectif Pierre - Photo 8" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="relative h-[592px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/collectif_pierre/dscf7046.jpg" alt="Collectif Pierre - Photo 9" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>

      {/* ================= BLOC 4 - INVERSÉ ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="relative h-[592px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 order-2 md:order-1">
          <Image src="/images/prestations/collectif_pierre/dscf7073.jpg" alt="Collectif Pierre - Photo 10" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-8 justify-between order-1 md:order-2">
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf7223.jpg" alt="Collectif Pierre - Photo 11" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf7240.jpg" alt="Collectif Pierre - Photo 12" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>

      {/* ================= BLOC 5 ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col gap-8 justify-between">
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf7344.jpg" alt="Collectif Pierre - Photo 13" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="relative h-[280px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
            <Image src="/images/prestations/collectif_pierre/dscf7711.jpg" alt="Collectif Pierre - Photo 14" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="relative h-[592px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/collectif_pierre/dscf8159_1.jpg" alt="Collectif Pierre - Photo 15" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>

      {/* ================= BLOC 6 (Fin de page - 2 images restantes) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[450px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/collectif_pierre/dscf8343_1.jpg" alt="Collectif Pierre - Photo 16" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="relative h-[450px] w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-neutral-900">
          <Image src="/images/prestations/collectif_pierre/dscf8637.jpg" alt="Collectif Pierre - Photo 17" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>

    </div>
  );
}