import { Button } from "../components/ui/Button";
import { AppFooter } from "../components/layout/AppFooter";
import styles from "./TransferConfirmPage.module.css";

export type TransferConfirmPageProps = {
  onConfirm: () => void;
  onEdit: () => void;
};

export function TransferConfirmPage({ onConfirm, onEdit }: TransferConfirmPageProps) {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.main}>
          <div className={styles.kicker}>TRANSFERT D&apos;ARGENT &gt; CONFIRMATION</div>
          <h1 className={styles.title}>Vérifiez les détails du transfert</h1>
          <p className={styles.subtitle}>
            Vérifiez attentivement les informations ci-dessous avant de confirmer. Les transferts sont traités selon le
            taux affiché et peuvent être soumis à des délais bancaires.
          </p>

          <div className={styles.summary}>
            <div className={styles.summaryHead}>
              <div>
                <div className={styles.summaryTitle}>Résumé de la transaction</div>
                <div className={styles.ref}>Réf. CF-2026-05-12-88421</div>
              </div>
              <div className={styles.badge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M7 11V8a5 5 0 0110 0v3M6 11h12v9a1 1 0 01-1 1H7a1 1 0 01-1-1v-9z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Taux Verrouillé
              </div>
            </div>

            <div className={styles.partyRow}>
              <div className={styles.party}>
                <div className={styles.partyLabel}>EXPÉDITEUR</div>
                <div className={styles.partyName}>Alex Rivera</div>
                <div className={styles.partyEmail}>a.rivera@cashflow.com</div>
                <div className={styles.rowMeta}>
                  <span className={styles.currency}>EUR</span>
                  <span className={styles.accountType}>Compte Courant Principal</span>
                </div>
              </div>

              <div className={styles.arrowCircle} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className={styles.party}>
                <div className={styles.partyLabel}>DESTINATAIRE</div>
                <div className={styles.partyName}>Jean-Baptiste Ndongo</div>
                <div className={styles.partyEmail}>jb.ndongo@email.com</div>
                <div className={styles.rowMeta}>
                  <span className={styles.currency}>XAF</span>
                  <span className={styles.accountType}>Compte Mobile Money</span>
                </div>
              </div>
            </div>

            <div className={styles.rows}>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Montant envoyé</span>
                <span className={styles.rowValue}>2 500,00 EUR</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Frais de transfert</span>
                <span className={styles.rowValue}>12,50 EUR</span>
              </div>
              <div className={styles.rateHighlight}>
                <span>Taux de change appliqué</span>
                <span>1 EUR = 655,95 XAF</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Montant reçu (estimé)</span>
                <span className={styles.rowValue}>1 639 875 XAF</span>
              </div>
              <div className={[styles.row, styles.totalRow].join(" ")}>
                <span className={styles.totalLabel}>Total à débiter</span>
                <span className={styles.totalValue}>2 512,50 EUR</span>
              </div>
            </div>

            <div className={styles.infoBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="9" stroke="#9ca3af" strokeWidth="2" />
                <path d="M12 10v5M12 8h.01" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>
                Le taux affiché est garanti pendant <strong style={{ color: "#e5e7eb" }}>10 minutes</strong>. Passé ce
                délai, un nouveau taux pourra s&apos;appliquer avant validation finale par votre banque.
              </span>
            </div>

            <div className={styles.actions}>
              <Button variant="secondary" onClick={onEdit}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Modifier les détails
              </Button>
              <Button variant="primary" onClick={onConfirm}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Confirmer le transfert
              </Button>
            </div>

            <div className={styles.footerLinks}>
              <a href="#terms-transfer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M8 6h13M8 12h13M8 18h13M4 6h.01M4 12h.01M4 18h.01" stroke="currentColor" strokeWidth="2" />
                </svg>
                Conditions de transfert
              </a>
              <a href="#security-reports">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 3l7 4v6c0 5-3.5 8.5-7 9.5-3.5-1-7-4.5-7-9.5V7l7-4z" stroke="currentColor" strokeWidth="2" />
                </svg>
                Rapports de sécurité
              </a>
            </div>
          </div>
        </div>

        <aside className={styles.rail} aria-label="Informations contextuelles">
          <div className={styles.security}>
            <div className={styles.securityTitle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3l7 4v6c0 5-3.5 8.5-7 9.5-3.5-1-7-4.5-7-9.5V7l7-4z" stroke="currentColor" strokeWidth="2" />
              </svg>
              Sécurité Garantie
            </div>
            <ul className={styles.list}>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Protection contre la fraude
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Conformité AML/KYC
              </li>
            </ul>
          </div>

          <div className={styles.support}>
            <h3>Besoin d&apos;aide ?</h3>
            <p>Notre équipe support est disponible 7j/7 pour vous accompagner sur ce transfert.</p>
            <Button variant="secondary" size="sm" fullWidth>
              Contacter l&apos;assistance
            </Button>
          </div>

          <div className={styles.disclaimer}>
            Les transferts internationaux peuvent être irréversibles une fois confirmés. Vérifiez le bénéficiaire et la
            devise avant validation.
          </div>
        </aside>
      </div>

      <AppFooter />
    </div>
  );
}
