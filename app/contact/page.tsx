import React from "react";

export default function ContactPage(): React.JSX.Element {
  return (
    <div className="w-full font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-7rem)]">
        
        {/* Colonne Gauche : Infos */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-24 bg-white text-neutral-900">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-12 text-neutral-950 leading-tight">
            Contactez-<br />moi !
          </h1>
          
          <div className="space-y-6 text-lg text-neutral-800 font-light">
            <p className="leading-relaxed">
              Avenue du Valais 27<br />
              1896 Vouvry
            </p>
            <p className="pt-4 font-normal hover:text-neutral-600 transition-colors">
              <a href="tel:+41774599678">077 459 96 78</a>
            </p>
            <p className="hover:text-neutral-600 transition-colors underline underline-offset-4">
              <a href="mailto:deo.photographie@gmail.com">deo.photographie@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Colonne Droite : Formulaire */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-24 bg-neutral-950 text-white border-t md:border-t-0 md:border-l border-white/5">
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="w-full max-w-lg space-y-6"
          >
            <input type="hidden" name="access_key" value="54ef41a7-5a79-4fed-a911-bae7745cc5c5" />
            <input type="hidden" name="subject" value="Nouveau message via site web DEO" />
            <input type="hidden" name="from_name" value="Site Web DEO" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-light text-neutral-400">Prénom *</label>
                <input 
                  type="text" 
                  name="first_name" 
                  required 
                  className="bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-500 transition-colors rounded" 
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-light text-neutral-400">Nom *</label>
                <input 
                  type="text" 
                  name="last_name" 
                  required 
                  className="bg-neutral-900 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-500 transition-colors rounded" 
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-neutral-400">Email *</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="bg-neutral-900 border border-neutral-800 px-4 py-3 w-full text-white focus:outline-none focus:border-neutral-500 transition-colors rounded" 
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light text-neutral-400">Message *</label>
              <textarea 
                name="message" 
                required 
                rows={5} 
                className="bg-neutral-900 border border-neutral-800 px-4 py-3 w-full text-white focus:outline-none focus:border-neutral-500 transition-colors rounded resize-none"
              ></textarea>
            </div>

            <p className="text-[10px] text-neutral-500 font-light leading-relaxed">
              Conformité nLPD : Vos données sont traitées uniquement pour répondre à votre demande. Aucune donnée n'est transmise à des tiers.
            </p>

            <button 
              type="submit" 
              className="w-full bg-[#E8C48C] hover:bg-[#d4b078] text-neutral-950 font-bold py-4 transition-all duration-300 rounded shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}