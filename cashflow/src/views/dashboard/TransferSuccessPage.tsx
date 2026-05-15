"use client";

import Link from "next/link";
import { CheckCircle2, Download, FileText, LayoutGrid, RefreshCw, Share2 } from "@/components/icons";
import { AppFooter } from "@/components/layout/AppFooter";

export function TransferSuccessPage() {
  return (
    <div className="p-6 pb-12 lg:p-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 grid size-16 place-items-center rounded-full border-2 border-emerald-400/40 bg-emerald-500/10">
          <CheckCircle2 className="size-9 text-emerald-400" strokeWidth={2} />
        </div>
        <h1 className="text-3xl font-bold text-white">Transfert Réussi !</h1>
        <p className="mt-3 text-sm leading-relaxed text-cash-muted">
          Votre transfert a été traité avec succès. Les fonds seront disponibles sur le compte du bénéficiaire sous peu.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-cash-panel p-6 text-left">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
              <FileText className="size-5" strokeWidth={2} />
              Reçu officiel Cashflow
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">Complété</span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase text-cash-muted">Référence</div>
              <div className="mt-1 font-semibold text-white">TRX-8829-4410-XAF</div>
            </div>
            <div>
              <div className="text-xs uppercase text-cash-muted">Date &amp; heure</div>
              <div className="mt-1 font-semibold text-white">24 Mai 2024, 14:32:10</div>
            </div>
          </div>
          <dl className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
            {[
              ["Expéditeur", "Alex Rivera | **** 4410 (XAF)"],
              ["Bénéficiaire", "Marie Dupont | FR76 3000 6000 **** 1234 (EUR)"],
              ["Montant envoyé", "500 000 XAF"],
              ["Taux de change", "1 XAF = 0,00152 EUR"],
              ["Montant reçu (est.)", "762,20 EUR"],
              ["Frais de service", "2 500 XAF"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="text-cash-muted">{k}</dt>
                <dd className="text-right font-medium text-white">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="my-6 border-t border-dashed border-white/15" />
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">Total débité</span>
            <span className="text-2xl font-bold text-accent">502 500 XAF</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-sm font-medium text-white hover:bg-white/5"
            >
              <Download className="size-4" />
              Télécharger PDF
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-sm font-medium text-white hover:bg-white/5"
            >
              <Share2 className="size-4" />
              Partager
            </button>
          </div>
          <p className="mt-4 text-center text-xs text-cash-muted">
            Ceci est un document généré automatiquement et ne nécessite pas de signature.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/transfer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-bold text-black hover:brightness-110"
          >
            <RefreshCw className="size-4" />
            Nouveau Transfert
          </Link>
          <Link
            href="/home"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-sm font-semibold text-white hover:bg-white/5"
          >
            <LayoutGrid className="size-4" />
            Tableau de Bord
          </Link>
        </div>
        <p className="mt-8 text-sm text-cash-muted">
          Besoin d&apos;aide avec cette transaction ?{" "}
          <a href="#support" className="font-medium text-accent hover:underline">
            Contactez le support
          </a>
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-2xl">
        <AppFooter />
      </div>
    </div>
  );
}
