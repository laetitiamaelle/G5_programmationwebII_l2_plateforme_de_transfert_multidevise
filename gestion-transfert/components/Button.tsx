// ============================================================
// components/Button.tsx
// Bouton réutilisable avec 3 variantes : primary, secondary, ghost.
// Gère aussi l'état de chargement (spinner).
// ============================================================

import React from 'react';
import styles from '../styles/Button.module.css';

// ----- Types des props -----
interface ButtonProps {
  /** Texte ou contenu du bouton */
  children: React.ReactNode;

  /**
   * Variante visuelle :
   * - "primary"   → fond orange/or (action principale)
   * - "secondary" → contour transparent (action secondaire)
   * - "ghost"     → lien stylisé (action tertiaire)
   */
  variant?: 'primary' | 'secondary' | 'ghost';

  /** Si true, désactive le bouton et empêche les interactions */
  disabled?: boolean;

  /**
   * Si true, affiche un spinner à la place du texte
   * (utilisé pendant les appels réseau)
   */
  loading?: boolean;

  /** Fonction appelée au clic */
  onClick?: () => void;

  /** Type HTML du bouton (utile dans les formulaires) */
  type?: 'button' | 'submit' | 'reset';

  /** Classes CSS supplémentaires (si besoin de surcharge) */
  className?: string;
}

// ============================================================
// Composant principal
// ============================================================
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',    // Valeur par défaut : bouton principal
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  // Construction de la liste de classes CSS
  const classes = [
    styles.btn,              // Styles de base
    styles[variant],         // Variante (primary / secondary / ghost)
    className,               // Classes personnalisées passées en prop
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}   // Désactivé aussi pendant le chargement
      onClick={onClick}
    >
      {loading ? (
        // Affiche un spinner quand l'action est en cours
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
