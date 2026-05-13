// ============================================================
// pages/_app.tsx
//
// Ce fichier est AUTOMATIQUEMENT utilisé par Next.js.
// Il enveloppe TOUTES tes pages (login, register, etc.).
// C'est ici qu'on importe le CSS global UNE SEULE FOIS.
//
// Tu n'as pas besoin de l'appeler toi-même dans tes pages,
// Next.js le fait automatiquement.
// ============================================================

import type { AppProps } from 'next/app';

// ← Import du CSS global (variables de couleurs, polices, reset)
// Sans cette ligne, rien ne sera stylisé ! 
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // "Component" = la page en cours (login.tsx, register.tsx, etc.)
  // "pageProps" = les données passées à cette page
  return <Component {...pageProps} />;
}
