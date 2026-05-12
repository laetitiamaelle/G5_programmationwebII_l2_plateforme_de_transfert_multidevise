// ============================================================
// pages/index.tsx
// Page d'accueil — redirige automatiquement vers /register
// (page de création de compte = page d'accueil principale)
// ============================================================

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirection immédiate vers la page d'inscription
    router.replace('/register');
  }, [router]);

  // Pendant la redirection, on n'affiche rien
  return null;
};

export default HomePage;
