import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

      {/* 2. L'EN-TÊTE (Navigation) */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-start justify-between">
          
          <div className="bg-black p-6 rounded-lg">
            <Image
              src="/logo-deo.png"
              alt="Logo DEO Photographie"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>

          <nav className="bg-white/10 backdrop-blur-sm rounded-lg flex overflow-hidden">
            <Link href="/" className="px-6 py-3 text-sm font-medium text-neutral-950 bg-[#E8C48C] hover:bg-[#D9B37A] transition-colors">
              Accueil
            </Link>
            <Link href="/prestations" className="px-6 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors">
              Prestations
            </Link>
            <Link href="/propos" className="px-6 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="px-6 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* 3. LE CONTENU PRINCIPAL */}
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