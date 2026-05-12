// ============================================================
// components/AuthLayout.tsx
// Mise en page partagée par les deux pages d'authentification.
// Inclut la Navbar en haut et le footer en bas.
// ============================================================

import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/AuthLayout.module.css';

// ----- Types des props -----
interface AuthLayoutProps {
  /** Contenu de la page (formulaire de login ou d'inscription) */
  children: React.ReactNode;

  /**
   * Si true, masque le bouton "Sign In" dans la navbar.
   * À utiliser sur la page de connexion elle-même.
   */
  hideSignIn?: boolean;
}

// ============================================================
// Composant principal
// ============================================================
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, hideSignIn = false }) => {
  return (
    <div className={styles.authPage}>

      {/* ---- Barre de navigation en haut ---- */}
      <Navbar hideSignIn={hideSignIn} />

      {/* ---- Contenu principal de la page ---- */}
      <main className={styles.authMain}>
        {children}
      </main>

      {/* ---- Pied de page ---- */}
      <footer className={styles.footer}>
        <span className={styles.footerCopyright}>
          © 2026 Cashflow Inc. All rights reserved.
        </span>

        <div className={styles.footerLinks}>
          <button className={styles.footerLink}>Terms of Service</button>
          <button className={styles.footerLink}>Privacy Policy</button>
          <button className={styles.footerLink}>Help Center</button>
        </div>
      </footer>

    </div>
  );
};

export default AuthLayout;
