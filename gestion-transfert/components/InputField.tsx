// ============================================================
// components/InputField.tsx
// Champ de saisie réutilisable avec label, icône, gestion
// des erreurs, et lien optionnel (ex: "Mot de passe oublié ?").
// ============================================================

import React from 'react';
import styles from '../styles/InputField.module.css';

// ----- Types des props -----
interface InputFieldProps {
  /** Libellé affiché au-dessus du champ */
  label: string;

  /** Nom du champ (pour l'attribut name et l'accessibilité) */
  name: string;

  /** Type HTML du champ (text, email, password, etc.) */
  type?: string;

  /** Valeur contrôlée du champ */
  value: string;

  /** Fonction appelée à chaque changement de valeur */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** Texte affiché quand le champ est vide */
  placeholder?: string;

  /**
   * Icône SVG affichée à gauche du champ.
   * On passe directement un élément JSX (ex: <MailIcon />)
   */
  icon?: React.ReactNode;

  /**
   * Texte du lien optionnel à droite du label
   * (ex: "Mot de passe oublié ?")
   */
  linkText?: string;

  /** Fonction appelée quand on clique sur le lien optionnel */
  onLinkClick?: () => void;

  /** Message d'erreur affiché sous le champ (si non vide) */
  error?: string;

  /** Si true, le champ est désactivé */
  disabled?: boolean;

  /** Texte d'auto-complétion (ex: "email", "current-password") */
  autoComplete?: string;
}

// ============================================================
// Composant principal
// ============================================================
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  icon,
  linkText,
  onLinkClick,
  error,
  disabled = false,
  autoComplete,
}) => {
  // ID unique pour lier le label à l'input (accessibilité)
  const inputId = `input-${name}`;

  return (
    <div className={styles.fieldWrapper}>

      {/* ---- Ligne label + lien optionnel ---- */}
      <div className={styles.labelRow}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>

        {/* Lien optionnel (affiché seulement si linkText est fourni) */}
        {linkText && onLinkClick && (
          <button
            type="button"
            className={styles.labelLink}
            onClick={onLinkClick}
          >
            {linkText}
          </button>
        )}
      </div>

      {/* ---- Conteneur de l'input avec icône ---- */}
      <div className={styles.inputContainer}>

        {/* Icône à gauche (affichée seulement si fournie) */}
        {icon && (
          <span className={styles.inputIcon} aria-hidden="true">
            {icon}
          </span>
        )}

        {/* Champ de saisie */}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          className={[
            styles.input,
            !icon ? styles.inputNoIcon : '',   // Pas d'icône → padding gauche normal
            error ? styles.inputError : '',    // Bordure rouge si erreur
          ].filter(Boolean).join(' ')}
          aria-invalid={!!error}               // Accessibilité : signale une erreur
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      </div>

      {/* ---- Message d'erreur (affiché seulement si error est non vide) ---- */}
      {error && (
        <span
          id={`${inputId}-error`}
          className={styles.errorMessage}
          role="alert"     // Annoncé par les lecteurs d'écran
        >
          {error}
        </span>
      )}

    </div>
  );
};

export default InputField;
