import {
  ADMIN_STATS,
  ADMIN_USERS,
  CONTACTS,
  DATA_FLOWS,
  RATE_PAIRS,
  SNAPSHOTS,
  TRANSACTIONS,
  TRANSFER_CONTEXT,
  type RateSnapshot,
  type TransactionRow,
} from "./seed";

export function listTransactions(filters: {
  q?: string;
  status?: string;
  currency?: string;
  page: number;
  pageSize: number;
}) {
  const expanded: TransactionRow[] = Array.from({ length: 24 }, (_, i) => {
    const t = TRANSACTIONS[i % TRANSACTIONS.length];
    return {
      ...t,
      id: String(i + 1),
      reference: `${t.reference}-${i + 1}`,
      date: t.date,
    };
  });
  let rows = [...expanded];
  if (filters.q) {
    const q = filters.q.toLowerCase();
    rows = rows.filter(
      (r) =>
        r.counterparty.toLowerCase().includes(q) ||
        r.reference.toLowerCase().includes(q) ||
        r.date.toLowerCase().includes(q),
    );
  }
  if (filters.status && filters.status !== "all") {
    rows = rows.filter((r) => r.status === filters.status);
  }
  if (filters.currency && filters.currency !== "all") {
    rows = rows.filter(
      (r) => r.originCurrency === filters.currency || r.convertedCurrency === filters.currency,
    );
  }
  const total = rows.length;
  const start = (filters.page - 1) * filters.pageSize;
  const slice = rows.slice(start, start + filters.pageSize);
  return { rows: slice, total };
}

export function listRateSnapshots(filters: { pair?: string; source?: string; page: number; pageSize: number }) {
  let rows = [...SNAPSHOTS];
  if (filters.pair && filters.pair !== "all") {
    rows = rows.filter((r) => r.pair === filters.pair);
  }
  if (filters.source && filters.source !== "all") {
    rows = rows.filter((r) => r.source === filters.source);
  }
  const total = 14280;
  const start = (filters.page - 1) * filters.pageSize;
  const slice = rows.slice(start, start + filters.pageSize);
  return { rows: slice, total };
}

export function getSnapshotById(id: string): RateSnapshot | undefined {
  return SNAPSHOTS.find((s) => s.id === id);
}

export function listAdminUsers(q?: string) {
  if (!q) return ADMIN_USERS;
  const s = q.toLowerCase();
  return ADMIN_USERS.filter((u) => u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s));
}

export function getRatesDashboard() {
  return {
    pairs: RATE_PAIRS,
    flows: DATA_FLOWS,
    stats: {
      volume24hEur: 1.2e6,
      volumeDeltaPct: 12,
      adminTx: 48,
      spreadAvgPct: 0.15,
      responseSeconds: 1.2,
      responseSource: "Source ECB",
    },
    admin: ADMIN_STATS,
  };
}

export function getTransferContext() {
  return {
    source: TRANSFER_CONTEXT.sourceAccount,
    rate: TRANSFER_CONTEXT.rate,
    contacts: CONTACTS,
  };
}

export function previewTransfer(amountEur: number, contactId: string) {
  const contact = CONTACTS.find((c) => c.id === contactId);
  if (!contact) throw new Error("Destinataire inconnu");
  const { eurToXaf, feePct } = TRANSFER_CONTEXT.rate;
  const fee = (amountEur * feePct) / 100;
  const totalDebit = amountEur + fee;
  const receive = amountEur * eurToXaf;
  return {
    contact,
    amountEur,
    feeEur: fee,
    totalDebitEur: totalDebit,
    receiveXaf: receive,
    eurToXaf,
    feePct,
    updatedAt: TRANSFER_CONTEXT.rate.updatedAt,
    sourceLabel: TRANSFER_CONTEXT.rate.sourceLabel,
  };
}