import Link from "next/link";
import Image from "next/image";

export default function Prestations() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans antialiased">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex items-center justify-between">
        <div className="relative w-20 h-20">
          <Image src="/logo.png" alt="DEO Logo" fill className="object-contain" />
        </div>
        
        <nav className="flex bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-lg">
          <Link href="/" className="px-8 py-3 hover:bg-white/10 transition-colors">Accueil</Link>
          <div className="px-8 py-3 bg-[#E8C48C] text-neutral-950 font-bold">Prestations</div>
          <Link href="/propos" className="px-8 py-3 hover:bg-white/10 transition-colors">À propos</Link>
          <Link href="/contact" className="px-8 py-3 hover:bg-white/10 transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extralight text-center mb-20 tracking-widest text-neutral-200">Portfolio</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PortfolioCard title="Laurine Moulin - Soprano" href="/portfolio/laurine-moulin" imageSrc="/laurine.jpg" />
          <PortfolioCard title="Collectif Pierre" href="/portfolio/collectif-pierre" imageSrc="/pierre.jpg" />
          <PortfolioCard title="Carnaval Sion 2025" href="/portfolio/carnaval-sion" imageSrc="/carnaval.jpg" />
        </div>
      </main>
    </div>
  );
}

function PortfolioCard({ title, href, imageSrc }: { title: string, href: string, imageSrc: string }) {
  return (
    <Link href={href} className="group relative h-[600px] overflow-hidden rounded-md block shadow-2xl">
      {/* Image avec zoom doux */}
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      
      {/* Dégradé pour assurer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
      
      {/* Texte positionné en bas */}
      <div className="absolute bottom-10 left-0 right-0 px-6">
        <h2 className="text-3xl font-light text-center tracking-wide group-hover:translate-y-[-5px] transition-transform duration-300">
          {title}
        </h2>
      </div>
    </Link>
  );
}