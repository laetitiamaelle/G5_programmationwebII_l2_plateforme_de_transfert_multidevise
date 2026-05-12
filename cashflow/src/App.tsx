import { useCallback, useEffect, useState } from "react";
import { AppHeader } from "./components/layout/AppHeader";
import { AppSidebar, type NavKey } from "./components/layout/AppSidebar";
import { DashboardShell } from "./components/layout/DashboardShell";
import { Toast } from "./components/ui/Toast";
import type { ToastPayload } from "./components/ui/Toast";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { ProfileSettingsPage } from "./pages/ProfileSettingsPage";
import { TransferConfirmPage } from "./pages/TransferConfirmPage";

const TOAST_MS = 4200;

export default function App() {
  const [nav, setNav] = useState<NavKey>("transfer");
  const [toast, setToast] = useState<ToastPayload | null>(null);

  const pushToast = useCallback((payload: ToastPayload) => {
    setToast(payload);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), TOAST_MS);
    return () => window.clearTimeout(t);
  }, [toast]);

  const content = (() => {
    switch (nav) {
      case "transfer":
        return (
          <TransferConfirmPage
            onConfirm={() =>
              pushToast({
                type: "success",
                title: "Transfert confirmé",
                message: "Votre transfert a été accepté et sera traité sous peu.",
              })
            }
            onEdit={() =>
              pushToast({
                type: "info",
                title: "Modification",
                message: "Retour à l’étape précédente (démo UI).",
              })
            }
          />
        );
      case "profile":
        return (
          <ProfileSettingsPage
            onSave={() =>
              pushToast({
                type: "success",
                title: "Profil mis à jour",
                message: "Vos informations ont été enregistrées.",
              })
            }
          />
        );
      case "home":
        return (
          <PlaceholderPage
            title="Accueil"
            description="Vue d’ensemble du compte et raccourcis vers vos actions fréquentes."
          />
        );
      case "transactions":
        return (
          <PlaceholderPage
            title="Transactions"
            description="Historique des mouvements, filtres et export (maquette non fournie)."
          />
        );
      case "contacts":
        return (
          <PlaceholderPage
            title="Contacts"
            description="Gestion des bénéficiaires enregistrés et favoris (maquette non fournie)."
          />
        );
      case "rates":
        return (
          <PlaceholderPage
            title="Taux de change"
            description="Suivi des parités et spreads appliqués aux corridors supportés."
          />
        );
      case "admin":
        return (
          <PlaceholderPage
            title="Panneaux d’administration"
            description="Outils internes réservés aux rôles administrateur."
          />
        );
      default:
        return null;
    }
  })();

  return (
    <>
      <DashboardShell header={<AppHeader />} sidebar={<AppSidebar active={nav} onNavigate={setNav} />}>
        {content}
      </DashboardShell>
      {toast ? <Toast {...toast} onClose={() => setToast(null)} /> : null}
    </>
  );
}
