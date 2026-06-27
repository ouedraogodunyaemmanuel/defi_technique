import React from 'react';

export default function ContactPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Conteneur Principal scindé en deux colonnes à partir des écrans md */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Colonne de Gauche : Infos de contact (Fond Blanc) */}
        <div className="flex flex-col justify-center px-12 py-16 md:px-24 bg-white">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-12 text-gray-900 leading-tight">
            Contactez-<br />moi !
          </h1>
          
          <div className="space-y-6 text-lg text-gray-800 font-light">
            <p className="leading-relaxed">
              Avenue du Valais 27<br />
              1896 Vouvry
            </p>
            
            <p className="pt-4">
              077 459 96 78
            </p>
            
            <p>
              deo.photographie@gmail.com
            </p>
          </div>

          {/* Icône Instagram (SVG intégré directement, sans bibliothèque externe) */}
          <div className="mt-12">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition-colors inline-block"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Colonne de Droite : Formulaire (Fond Noir) */}
        <div className="flex flex-col justify-center px-12 py-16 md:px-24 bg-black text-white">
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="w-full max-w-lg space-y-6"
          >
            {/* Clé d'accès Web3Forms obligatoire */}
            <input type="hidden" name="access_key" value="54ef41a7-5a79-4fed-a911-bae7745cc5c5" />

            {/* Rangée : Prénom et Nom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-light tracking-wide text-gray-300">First Name</label>
                <input 
                  type="text" 
                  name="first_name" 
                  required
                  className="bg-black border border-white px-4 py-2.5 text-white focus:outline-none focus:border-gray-400 transition-colors h-12"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-light tracking-wide text-gray-300">Last Name</label>
                <input 
                  type="text" 
                  name="last_name" 
                  required
                  className="bg-black border border-white px-4 py-2.5 text-white focus:outline-none focus:border-gray-400 transition-colors h-12"
                />
              </div>
            </div>

            {/* Champ : Email */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light tracking-wide text-gray-300">Email *</label>
              <input 
                type="email" 
                name="email" 
                required
                className="bg-black border border-white px-4 py-2.5 w-full text-white focus:outline-none focus:border-gray-400 transition-colors h-12"
              />
            </div>

            {/* Champ : Message */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light tracking-wide text-gray-300">Message</label>
              <textarea 
                name="message" 
                required
                rows={6}
                className="bg-black border border-white px-4 py-3 w-full text-white resize-none focus:outline-none focus:border-gray-400 transition-colors"
              ></textarea>
            </div>

            {/* Bouton Envoyer */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#E8CBE7] hover:bg-[#dec1dd] text-black font-normal py-3 px-6 transition-colors text-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}