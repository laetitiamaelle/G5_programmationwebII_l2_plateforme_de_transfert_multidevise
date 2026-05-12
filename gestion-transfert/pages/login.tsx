// ============================================================
// pages/login.tsx  (ou app/login/page.tsx si tu utilises App Router)
// Page de connexion avec formulaire email/mot de passe.
// ============================================================

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // App Router de Next.js 13+
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';
import styles from '../styles/LoginPage.module.css';

// ============================================================
// Icônes SVG inline (pas de dépendance externe nécessaire)
// ============================================================

/** Icône cadenas (au-dessus de la carte) */
const LockIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/** Icône enveloppe (champ email) */
const MailIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/** Icône cadenas (champ mot de passe) */
const KeyIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/** Icône aide (lien pied de carte) */
const HelpCircleIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/** Icône flèche (bouton "Se connecter") */
const ArrowIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ============================================================
// Composant principal
// ============================================================
const LoginPage: React.FC = () => {
  const router = useRouter();

  // ---- État du formulaire ----
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ---- État des erreurs de validation ----
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // ----------------------------------------------------------
  // Validation simple côté client
  // ----------------------------------------------------------
  const validate = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'L\'adresse e-mail est requise.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format d\'e-mail invalide.';
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis.';
    } else if (password.length < 6) {
      newErrors.password = 'Au moins 6 caractères requis.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true si aucune erreur
  };

  // ----------------------------------------------------------
  // Soumission du formulaire
  // ----------------------------------------------------------
  const handleSubmit = async () => {
    if (!validate()) return;   // Arrête si erreurs de validation

    setIsLoading(true);

    try {
      /*
       * TODO : Remplacer ce délai par votre appel API réel.
       * Exemple :
       *   const res = await fetch('/api/auth/login', {
       *     method: 'POST',
       *     headers: { 'Content-Type': 'application/json' },
       *     body: JSON.stringify({ email, password }),
       *   });
       *   if (!res.ok) throw new Error('Identifiants incorrects');
       */
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulation

      // Redirection vers le dashboard après connexion réussie
      router.push('/dashboard');
    } catch (err) {
      console.error('Erreur de connexion:', err);
      setErrors({ password: 'Identifiants incorrects. Veuillez réessayer.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // hideSignIn=true car on est déjà sur la page de connexion
    <AuthLayout hideSignIn>

      {/* ---- Icône cadenas au-dessus de la carte ---- */}
      <div className={styles.lockIconWrapper}>
        <LockIcon />
      </div>

      {/* ---- Carte du formulaire ---- */}
      <div className={styles.loginCard}>

        {/* En-tête */}
        <div className={styles.cardHeader}>
          <h1 className={styles.cardTitle}>Bon retour parmi vous</h1>
          <p className={styles.cardSubtitle}>
            Accédez à votre compte multi-devises en un instant.
          </p>
        </div>

        {/* Formulaire */}
        <div className={styles.form}>

          {/* Champ email */}
          <InputField
            label="Adresse e-mail ou nom d'utilisateur"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="exemple@cashflow.com"
            icon={<MailIcon />}
            error={errors.email}
            autoComplete="email"
          />

          {/* Champ mot de passe avec lien "oublié" */}
          <InputField
            label="Mot de passe"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            icon={<KeyIcon />}
            linkText="Mot de passe oublié ?"
            onLinkClick={() => router.push('/forgot-password')} // TODO: créer cette page
            error={errors.password}
            autoComplete="current-password"
          />

          {/* Checkbox "Se souvenir de cet appareil" */}
          <label className={styles.rememberRow}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            <span className={styles.rememberLabel}>Se souvenir de cet appareil</span>
          </label>

          {/* Bouton de connexion principal */}
          <Button
            variant="primary"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Se connecter <ArrowIcon />
          </Button>

          {/* Séparateur */}
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>NOUVEAU SUR CASHFLOW ?</span>
            <div className={styles.dividerLine} />
          </div>

          {/* Bouton vers la page d'inscription */}
          <Button
            variant="secondary"
            onClick={() => router.push('/register')}
          >
            Créer un compte professionnel
          </Button>

        </div>

        {/* Liens de bas de carte */}
        <div className={styles.cardFooterLinks}>
          <HelpCircleIcon />
          <button className={styles.footerLink}>Besoin d&apos;aide ?</button>
          <div className={styles.dot} />
          <button className={styles.footerLink}>Confidentialité</button>
          <div className={styles.dot} />
          <button className={styles.footerLink}>Sécurité</button>
        </div>

      </div>
    </AuthLayout>
  );
};

export default LoginPage;
