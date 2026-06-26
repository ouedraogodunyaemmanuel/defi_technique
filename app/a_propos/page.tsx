import Link from "next/link";
import Image from "next/image";

export default function Propos() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans antialiased">
      
      {/* Navigation (Rappel) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex items-center justify-between bg-black/20 backdrop-blur-md">
        <div className="relative w-16 h-16">
          <Image src="/logo-deo.png" alt="DEO Logo" fill className="object-contain" />
        </div>
        <nav className="flex bg-white/10 rounded-lg overflow-hidden border border-white/10">
          <Link href="/" className="px-8 py-3 hover:bg-white/10 transition-colors">Accueil</Link>
          <Link href="/prestations" className="px-8 py-3 hover:bg-white/10 transition-colors">Prestations</Link>
          <div className="px-8 py-3 bg-[#E8C48C] text-neutral-950 font-bold">À propos</div>
          <Link href="/contact" className="px-8 py-3 hover:bg-white/10 transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Contenu "À propos" */}
      <main className="pt-40 pb-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Texte */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extralight tracking-widest text-neutral-200">Qui suis-je ?</h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Bonjour et bienvenue sur mon site. Je m'appelle Dûnya-Emmanuel Ouédraogo et j'étudie les arts visuels au Lycée-Collège de St-Maurice.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Étant passionné de photographie, j'ai développé un amour pour la capture de moments précieux et uniques à travers mon objectif. Entre concerts, évènements et spectacles en tout genre, laissez-vous transporter par mon travail.
          </p>
        </div>

        {/* Portrait */}
        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl border border-white/10">
          <Image 
            src="/portrait.jpg" // À mettre dans ton dossier public
            alt="Portrait de Dûnya-Emmanuel"
            fill
            className="object-cover"
          />
        </div>

      </main>
    </div>
  );
}