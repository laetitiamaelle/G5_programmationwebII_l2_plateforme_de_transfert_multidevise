// ============================================================
// components/Navbar.tsx
// Barre de navigation supérieure, commune aux deux pages auth.
// Affiche le logo Cashflow et des boutons d'action (aide,
// notifications, Sign In).
// ============================================================

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Button from './Button';

// ----- Types des props -----
interface NavbarProps {
  /** Si true, le bouton "Sign In" est masqué (on est déjà sur la page login) */
  hideSignIn?: boolean;
}

// ----- Icône "onde / activité" du logo -----
const LogoIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="2 12 6 6 10 14 14 8 18 12 22 12" />
  </svg>
);

// ----- Icône point d'interrogation (aide) -----
const HelpIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// ----- Icône cloche (notifications) -----
const BellIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

// ============================================================
// Composant principal
// ============================================================
const Navbar: React.FC<NavbarProps> = ({ hideSignIn = false }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>

      
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <LogoIcon />
          </div>
          <span className={styles.logoText}>Cashflow</span>
        </Link>

        
        <div className={styles.navActions}>
          {/* Bouton Aide */}
          

          {/* Bouton Notifications */}
          

          {/* Bouton "Sign In" — masqué si déjà sur la page login */}
          {!hideSignIn && (
            <Link href="/login">
              {/*
                Ici on utilise un <a> natif car Button est un bouton HTML.
                On pourrait aussi utiliser le composant Button avec variant="secondary"
                en passant onClick={() => router.push('/login')}.
              */}
              <button
                style={{
                  padding: '8px 20px',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  background: 'transparent',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-family)',
                  transition: 'background-color 200ms ease, border-color 200ms ease',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLButtonElement).style.backgroundColor = 'var(--color-bg-input)';
                  (e.target as HTMLButtonElement).style.borderColor = 'var(--color-text-secondary)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLButtonElement).style.borderColor = 'var(--color-border)';
                }}
              >
                Sign In
              </button>
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
