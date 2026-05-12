import './page.css';
import Image from 'next/image';


export default function Dashboard() {
  const users = [
    { name: "Jean Dupont", email: "jean.dupont@email.com", currency: "EUR", balance: "2 540,50 €", status: "Actif" },
    { name: "Marie Ngo", email: "marie.ngo@outlook.fr", currency: "XAF", balance: "1 250 000 FCFA", status: "Actif" },
    { name: "Alice Walker", email: "a.walker@finance.com", currency: "USD", balance: "8 400,00 $US", status: "Vérification" },
    { name: "Paul Atangana", email: "paulata@gmail.com", currency: "XAF", balance: "45 000 FCFA", status: "Suspendu" },
    { name: "Sophie Martin", email: "s.martin@service.com", currency: "EUR", balance: "120,75 €", status: "Actif" },
  ];

  return (
    <div className="app-container">
      {/* SIDEBAR GAUCHE */}
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

        <nav className="sidebar-nav">
          <div className="nav-group">
            <p>MAIN NAVIGATION</p>
                <ul>
                  <li className="active"> 🏠 Home</li>
                  <li> 💸 Transfer</li>
                  <li> 📊 Transactions</li>
                  <li> 👥 Contacts</li>
                </ul>
          </div>
          <div className="nav-group">
            <p>MANAGEMENT</p>
            <ul>
              <li className="admin-link">⚙️ Admin Panels</li>
            </ul>
          </div>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn">
            <span className="logout-icon">↪</span> Logout
          </button>
        </div>
      </aside>

      {/* ZONE DE DROITE */}
      <main className="main-content">
        {/* BARRE HORIZONTALE (TOP NAV) */}
        <header className="top-nav">
          <div className="search-wrapper">
            <span>🔍</span>
            <input type="text" placeholder="Search transactions or contacts..." />
          </div>
          <div className="top-nav-right">
            <span className="nav-icon">🌐</span>
            <span className="nav-icon">🔔</span>
            <div className="admin-profile">
              <div className="admin-info">
                <span className="admin-name">Admin Principal</span>
                <span className="admin-role">Personal Account</span>
              </div>
              <div className="avatar">A</div>
            </div>
          </div>
        </header>

        {/* CONTENU SCROLLABLE */}
        <div className="dashboard-view">
          <section className="welcome">
            <h1>Administration des Utilisateurs & Transactions</h1>
            <p>Surveillance globale de l'activité financière et gestion des comptes utilisateurs.</p>
          </section>

          {/* GRILLE DE CARTES */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="card-label">Utilisateurs Totaux</span>
              <h2>1,284</h2>
              <p className="trend">+12 nouveaux cette semaine</p>
            </div>
            <div className="stat-card">
              <span className="card-label">Volume 24h</span>
              <h2>45,820,000 XAF</h2>
              <p className="subtext">Volume total des transferts sortants</p>
            </div>
            <div className="stat-card">
              <span className="card-label">Transactions Actives</span>
              <h2>86</h2>
              <p className="subtext">En cours de traitement</p>
            </div>
            <div className="stat-card gold-border">
              <span className="card-label">Réserve Plateforme</span>
              <h2 className="gold-text">248,500.00 EUR</h2>
              <p className="subtext">Liquidités totales multi-devises</p>
            </div>
          </div>

          {/* TABLEAU */}
          <div className="table-header">
            <div className="header-title">
              <h2>Répertoire des Utilisateurs</h2>
              <p>Gérez les accès et surveillez les soldes individuels.</p>
            </div>
            <div className="header-controls">
              <div className="search-container">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Rechercher un utilisateur..." />
              </div>
              <button className="filter-button">
                <span>⚙️</span> Filtres
              </button>
            </div>
          </div>
          <section className="table-section">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Utilisateur</th>
                  <th>Devise du Compte</th>
                  <th>Solde Actuel</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr key={i}>
                    <td>
                      <div className="user-cell">
                        <div className="u-avatar">{u.name.charAt(0)}</div>
                        <div><div className="u-name">{u.name}</div><div className="u-email">{u.email}</div></div>
                      </div>
                    </td>
                    <td>{u.currency}</td>
                    <td>{u.balance}</td>
                    <td><span className={`status ${u.status.toLowerCase()}`}>{u.status}</span></td>
                    <td className="actions-cell">👤- 👤+ ...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}
