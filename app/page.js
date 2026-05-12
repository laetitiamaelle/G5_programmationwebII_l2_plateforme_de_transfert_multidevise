import styles from './page.module.css'

export default function Home() {
  return (
    <div className="app-wrapper">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">⚡ Cashflow</div>
        <nav>
          <p className="label">MAIN NAVIGATION</p>
          <div className="nav-item active">🏠 Home</div>
          <div className="nav-item">💸 Transfer</div>
        </nav>
        <button className="logout-footer">↪ Log Out</button>
      </aside>

      {/* ZONE PRINCIPALE */}
      <main className="main-area">
        <header className="topbar">
          <input type="text" placeholder="Search..." className="search-input" />
          <div className="user-profile">
            <div className="info">
              <span className="name">Admin Principal</span>
            </div>
            <div className="avatar">A</div>
            <button className="btn-exit">Déconnecter</button>
          </div>
        </header>

        <div className="content">
          <h1>Administration des Utilisateurs</h1>
          <div className="stats-grid">
            <div className="card">
              <span>Utilisateurs Totaux</span>
              <h2>1,284</h2>
            </div>
            {/* Ajoute les autres cartes ici */}
          </div>
        </div>
      </main>

      <style jsx>{`
        .app-wrapper { display: flex; height: 100vh; width: 100vw; }
        .sidebar { 
          width: 250px; background: #121212; border-right: 1px solid #222; 
          display: flex; flex-direction: column; padding: 25px; height: 100vh;
        }
        .main-area { flex: 1; display: flex; flex-direction: column; min-width: 0; }
        .topbar { 
          height: 70px; background: #121212; border-bottom: 1px solid #222;
          display: flex; align-items: center; justify-content: space-between; padding: 0 30px;
        }
        .btn-exit { background: #e74c3c; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; }
        .content { padding: 40px; overflow-y: auto; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 20px; }
        .card { background: #181818; padding: 20px; border-radius: 12px; border: 1px solid #222; }
      `}</style>
    </div>
  )
}
