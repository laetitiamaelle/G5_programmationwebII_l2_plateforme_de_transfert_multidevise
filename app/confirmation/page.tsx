import './confirmation.css';
import Image from 'next/image';

export default function ConfirmationPage() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
         <div className="sidebar-brand">
          <Image 
            src="/logo-cashflow.jpeg" 
            alt="Logo Cashflow"  
            width={120}               
            height={100}            
            className="brand-logo-full" 
          />
        </div>
        <nav>
          <p style={{fontSize: '11px', color: '#444', marginBottom: '15px', paddingLeft: '12px'}}>MAIN NAVIGATION</p>
          <div className="nav-item">🏠 Home</div>
          <div className="nav-item active">💸 Transfer</div>
          <div className="nav-item">📊 Transactions</div>
          <div className="nav-item">👥 Contacts</div>
        </nav>
        <div style={{marginTop: 'auto'}} className="nav-item">↪ Log Out</div>
      </aside>

      <div className="content-wrapper">
        <header className="topbar">
          <div style={{background: '#1a1b1e', padding: '20px 25px', borderRadius: '6px', width: '350px', color: '#555', fontSize: '13px', display: 'flex', alignItems: 'center'}}>
            <span style={{marginRight: '10px'}}>🔍</span> Search transactions or contacts...
          </div>
          <div style={{display: 'flex', gap: '25px', alignItems: 'center'}}>
            <span style={{fontSize: '18px', cursor: 'pointer'}}>🔔</span>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{textAlign: 'right'}}>
                <div style={{fontSize: '14px', fontWeight: '600'}}>Alex Kamga</div>
                <div style={{fontSize: '11px', color: '#555'}}>Personal Account</div>
              </div>
              <div style={{width: '38px', height: '38px', background: '#333', borderRadius: '50%', border: '1px solid #232529'}}></div>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="status-icon-circle">✓</div>
          <h1 style={{fontSize: '32px', fontWeight: '700', marginBottom: '8px'}}>Transfert Réussi !</h1>
          <p style={{color: '#71767e', textAlign: 'center', maxWidth: '480px', fontSize: '14px', marginBottom: '40px'}}>
            Votre transfert a été traité avec succès. Les fonds seront disponibles sur le compte du bénéficiaire sous peu.
          </p>

          <div className="receipt-card">
            <div className="receipt-header">
              <span style={{color: '#f3ba2f', fontSize: '12px', fontWeight: '800'}}>📜 REÇU OFFICIEL CASHFLOW</span>
              <span style={{color: '#2ecc71', fontSize: '12px', background: 'rgba(46,204,113,0.1)', padding: '4px 12px', borderRadius: '4px'}}>Complété</span>
            </div>

            <div className="ref-box">
              <div>
                <label style={{fontSize: '10px', color: '#444', display: 'block', marginBottom: '4px'}}>RÉFÉRENCE</label>
                <span style={{fontSize: '13px', fontWeight: '600'}}>TRX-8829-4410-XAF</span>
              </div>
              <div style={{textAlign: 'right'}}>
                <label style={{fontSize: '10px', color: '#444', display: 'block', marginBottom: '4px'}}>DATE & HEURE</label>
                <span style={{fontSize: '13px', fontWeight: '600'}}>24 Mai 2024, 14:32:10</span>
              </div>
            </div>

            <div className="info-row">
              <span className="info-label">Expéditeur</span>
              <div className="info-value">Alex Rivera <br/><small style={{color: '#444'}}>**** 4410 (XAF)</small></div>
            </div>
            <div className="info-row">
              <span className="info-label">Bénéficiaire</span>
              <div className="info-value">Marie Dupont <br/><small style={{color: '#444'}}>FR76 3000 6000 **** 1234 (EUR)</small></div>
            </div>
            <div className="info-row">
              <span className="info-label">Montant Envoyé</span>
              <span className="info-value">500 000 XAF</span>
            </div>
            <div className="info-row">
              <span className="info-label">Taux de Change</span>
              <span className="info-value">1 XAF = 0,00152 EUR</span>
            </div>
            <div className="info-row">
              <span className="info-label">Montant Reçu (Est.)</span>
              <span className="info-value">762,20 EUR</span>
            </div>
            <div className="info-row">
              <span className="info-label">Frais de Service</span>
              <span className="info-value">2 500 XAF</span>
            </div>

            <div className="divider-dashed"></div>

            <div className="info-row" style={{paddingBottom: '24px'}}>
              <span className="info-label" style={{fontWeight: '700'}}>Total Débité</span>
              <span className="total-text">502 500 XAF</span>
            </div>

            <div className="action-grid" style={{borderTop: '1px solid #232529'}}>
              <button className="btn-outline">📥 Télécharger PDF</button>
              <button className="btn-outline">🔗 Partager</button>
            </div>
          </div>

          <div className="footer-buttons">
            <button className="btn-gold">🔄 Nouveau Transfert</button>
            <button className="btn-dark">📊 Tableau de Bord</button>
          </div>
        </main>
      </div>
    </div>
  );
}
