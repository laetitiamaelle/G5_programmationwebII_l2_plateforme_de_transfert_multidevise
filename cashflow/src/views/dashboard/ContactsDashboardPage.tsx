"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/lib/api-client";
import { AppFooter } from "@/components/layout/AppFooter";

type C = { id: string; name: string; email: string; currency: string; avatarSeed: string };

export function ContactsDashboardPage() {
  const [list, setList] = useState<C[]>([]);

  useEffect(() => {
    apiGet<C[]>("/api/v1/contacts").then(setList);
  }, []);

  return (
    <div className="p-6 pb-10 lg:p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold text-white">Contacts</h1>
            <p className="mt-2 text-sm text-cash-muted">
              Bénéficiaires enregistrés pour vos transferts multi-devises.
            </p>
          </div>
          <Link href="/transfer" className="text-sm font-medium text-accent hover:underline">
            Retour au transfert
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <div key={c.id} className="rounded-2xl border border-white/10 bg-cash-panel p-5">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-full bg-white/10 text-sm font-bold text-white">
                  {c.avatarSeed.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-semibold text-white">{c.name}</div>
                  <div className="truncate text-xs text-cash-muted">{c.email}</div>
                </div>
              </div>
              <div className="mt-4 inline-block rounded-md bg-white/[0.06] px-2 py-1 text-xs font-medium text-cash-muted">
                {c.currency}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl">
        <AppFooter />
      </div>
    </div>
  );
}
