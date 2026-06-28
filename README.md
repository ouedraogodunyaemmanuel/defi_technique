# Portfolio Professionnel — DEO Photographie

Ce projet presente l'application web et le portfolio professionnel de DEO Photographie. L'application est developpee avec Next.js et structuree pour une future integration conteneurisee.

- URL Publique Actuelle : https://defitechnique.vercel.app
- Acces : Public, sans authentification requise.

---

## Stack Technique

### Frontend et UI
- Framework : Next.js 14+ (App Router)
- Styles : Tailwind CSS (Interface sombre, epuree et adaptee aux mobiles et ecrans de bureau)
- Icones : Lucide React

### Architecture et Deploiement
- Etat actuel : Deploiement initial et hebergement sur la plateforme Vercel pour la validation des composants front-end.
- Evolution cible : Le projet integre un Dockerfile a sa racine, prepare pour migrer vers une infrastructure auto-hebergee sous Docker Compose (derriere un reverse proxy Caddy) afin d'unifier l'application avec les services existants.

---

## Structure et Pages de l'Application

L'arborescence du site est segmentee en quatre sections cles accessibles publiquement :
1. Page d'accueil : Vitrine principale et introduction a l'univers visuel.
2. Page d'information : Presentation de la demarche artistique et des prestations.
3. Pages Portfolios : Trois galeries distinctes dediees a l'exposition des realisations photographiques via des grilles Tailwind.
4. Page de contact : Formulaire operationnel pour les demandes de devis et collaborations.

---

## Conformité nLPD et Traitement des Données

Dans le respect de la Loi federale sur la protection des donnees (nLPD) suisse, la gestion des flux d'informations est cartographiee ainsi :

- Collecte minimale : Seules les donnees explicitement saisies par l'utilisateur dans le formulaire de contact (nom, adresse email, message) sont traitees. Aucun cookie de tracage tiers ou script analytique n'est injecte dans le code.
- Routage du formulaire : Les requetes du formulaire de contact sont traitees via l'API de Web3Forms, qui agit comme sous-traitant technique pour acheminer les messages directement vers la boite de reception email privee de l'administrateur. Conformement a la politique de confidentialite de Web3Forms, les donnees ne sont pas persistees a des fins publicitaires.

---

## Instructions de Lancement Local

### Prerequis
- Node.js v20+ installe localement.

### Execution du projet en developpement
```bash
npm install
npm run dev

### commandes Github
git add .
git commit -m "Finalisation du projet et documentation du README"
git push origin main