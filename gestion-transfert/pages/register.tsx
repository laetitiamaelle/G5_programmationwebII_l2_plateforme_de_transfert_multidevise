// ============================================================
// pages/register.tsx  (ou app/register/page.tsx)
// Page d'inscription avec présentation des fonctionnalités
// à gauche et formulaire à droite.
// ============================================================

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';
import styles from '../styles/RegisterPage.module.css';

// ============================================================
// Icônes SVG inline
// ============================================================

/** Icône bouclier (Sécurité Totale) */
const ShieldIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

/** Icône globe (Multi-devises) */
const GlobeIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/** Icône personnes (Support Dédié) */
const UsersIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/** Icône info (astuce devise) */
const InfoIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

/** Icône enveloppe (champ email) */
const MailIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/** Icône utilisateur (champ nom) */
const UserIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

/** Icône cadenas (champ mot de passe) */
const LockIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// ----------------------------------------------------------
// Données statiques : liste des fonctionnalités de Cashflow
// ----------------------------------------------------------
const FEATURES = [
  {
    icon: <ShieldIcon />,
    name: 'Sécurité Totale',
    desc: 'Vos transactions sont protégées par un cryptage de bout en bout.',
  },
  {
    icon: <GlobeIcon />,
    name: 'Multi-devises',
    desc: 'Échangez instantanément entre les zones CEMAC, Europe et USA.',
  },
  {
    icon: <UsersIcon />,
    name: 'Support Dédié',
    desc: 'Une équipe d\'experts à votre écoute pour toutes vos opérations.',
  },
];

// ----------------------------------------------------------
// Options de devises disponibles
// ----------------------------------------------------------
const CURRENCIES = [
  { value: 'XAF', label: 'Franc CFA (XAF) — Afrique Centrale' },
  { value: 'EUR', label: 'Euro (EUR) — Europe' },
  { value: 'USD', label: 'Dollar US (USD) — États-Unis' },
];

// ============================================================
// Composant principal
// ============================================================
const RegisterPage: React.FC = () => {
  const router = useRouter();

  // ---- État du formulaire ----
  const [fullName, setFullName]         = useState('');
  const [email, setEmail]               = useState('');
  const [password, setPassword]         = useState('');
  const [confirmPassword, setConfirmPwd] = useState('');
  const [currency, setCurrency]         = useState('XAF');   // Devise par défaut : XAF
  const [isLoading, setIsLoading]       = useState(false);

  // ---- État des erreurs ----
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  // ----------------------------------------------------------
  // Validation du formulaire
  // ----------------------------------------------------------
  const validate = (): boolean => {
    const newErrors: typeof errors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Le nom complet est requis.';
    }

    if (!email.trim()) {
      newErrors.email = 'L\'adresse e-mail est requise.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format d\'e-mail invalide.';
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis.';
    } else if (password.length < 8) {
      newErrors.password = 'Au moins 8 caractères requis.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Veuillez confirmer votre mot de passe.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----------------------------------------------------------
  // Soumission du formulaire
  // ----------------------------------------------------------
  const handleSubmit = async () => {
    if (!validate()) return;

    setIsLoading(true);

    try {
      /*
       * TODO : Remplacer par votre appel API réel.
       * Exemple :
       *   const res = await fetch('/api/auth/register', {
       *     method: 'POST',
       *     headers: { 'Content-Type': 'application/json' },
       *     body: JSON.stringify({ fullName, email, password, currency }),
       *   });
       *   if (!res.ok) throw new Error('Erreur lors de la création du compte');
       */
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation

      // Redirection vers le dashboard après inscription réussie
      router.push('/dashboard');
    } catch (err) {
      console.error('Erreur d\'inscription:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className={styles.registerLayout}>

        {/* ====================================================
            Colonne gauche : présentation des avantages
        ==================================================== */}
        <div className={styles.featuresCol}>

          {/* Grand titre */}
          <h1 className={styles.heroTitle}>
            Rejoignez la nouvelle ère du transfert{' '}
            <span className={styles.heroAccent}>multi-devises.</span>
          </h1>

          {/* Sous-titre */}
          <p className={styles.heroSubtitle}>
            Gérez vos fonds entre XAF, EUR et USD avec des taux transparents
            et une sécurité bancaire.
          </p>

          {/* Liste des fonctionnalités */}
          <div className={styles.featureList}>
            {FEATURES.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                {/* Icône */}
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                {/* Texte */}
                <div className={styles.featureContent}>
                  <p className={styles.featureName}>{feature.name}</p>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Séparateur + Note d'avertissement */}
          <div className={styles.divider} />
          <div className={styles.note}>
            <span className={styles.noteIcon}>
              <InfoIcon />
            </span>
            <span>
              <em>Note : Le changement de devise principale nécessite
              l&apos;intervention de l&apos;administrateur après la création.</em>
            </span>
          </div>

        </div>

        {/* ====================================================
            Colonne droite : formulaire d'inscription
        ==================================================== */}
        <div className={styles.formCol}>
          <div className={styles.formCard}>

            {/* Titre et sous-titre */}
            <h2 className={styles.formTitle}>Créer un compte</h2>
            <p className={styles.formSubtitle}>
              Remplissez les informations ci-dessous pour commencer à transférer.
            </p>

            {/* Formulaire */}
            <div className={styles.form}>

              {/* Nom complet */}
              <InputField
                label="Nom complet"
                name="fullName"
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Mbarga Alain"
                icon={<UserIcon />}
                error={errors.fullName}
                autoComplete="name"
              />

              {/* Adresse email */}
              <InputField
                label="Adresse Email"
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="laetitiamaelle.740@gmail.com"
                icon={<MailIcon />}
                error={errors.email}
                autoComplete="email"
              />

              {/* Mot de passe + Confirmation (côte à côte) */}
              <div className={styles.formRow}>
                <InputField
                  label="Mot de passe"
                  name="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  icon={<LockIcon />}
                  error={errors.password}
                  autoComplete="new-password"
                />
                <InputField
                  label="Confirmer"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPwd(e.target.value)}
                  placeholder="••••••••"
                  icon={<LockIcon />}
                  error={errors.confirmPassword}
                  autoComplete="new-password"
                />
              </div>

              {/* Sélecteur de devise */}
              <div>
                <div className={styles.currencyLabelRow}>
                  <label className={styles.currencyLabel}>Devise du compte</label>
                  <span className={styles.recommendedBadge}>RECOMMANDÉ</span>
                </div>

                <select
                  className={styles.currencySelect}
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                  aria-label="Devise du compte"
                >
                  {CURRENCIES.map(c => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>

                {/* Indication sous le select */}
                <p className={styles.currencyHint}>
                  <InfoIcon />
                  C&apos;est la devise dans laquelle vos soldes seront affichés par défaut.
                </p>
              </div>

              {/* Bouton de soumission */}
              <Button
                variant="primary"
                onClick={handleSubmit}
                loading={isLoading}
              >
                Créer le compte
              </Button>

              {/* Lien retour vers la connexion */}
              <p className={styles.loginPrompt}>
                Vous avez déjà un compte ?{' '}
                <button
                  className={styles.loginLink}
                  onClick={() => router.push('/login')}
                >
                  Se connecter
                </button>
              </p>

            </div>
          </div>
        </div>

      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
