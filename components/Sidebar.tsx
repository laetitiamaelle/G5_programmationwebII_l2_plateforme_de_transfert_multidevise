import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* LOGO */}
      <div className="sidebar-brand">
        <Image src="/logo-cashflow.jpeg" alt="Logo" width={120} height={45} className="brand-logo-full" />
      </div>

      {/* NAVIGATION PRINCIPALE */}
      <nav className="sidebar-nav">
        <div className="nav-group">
          <p className="group-title">MAIN NAVIGATION</p>
          <ul>
            <li className="active">🏠 Home</li>
            <li>💸 Transfer</li>
            <li>📊 Transactions</li>
            <li>👥 Contacts</li>
          </ul>
        </div>

        {/* SECTION MANAGEMENT (L'espace se crée ici) */}
        <div className="nav-group">
          <p className="group-title">MANAGEMENT</p>
          <ul>
            <li>📉 Exchange Rates</li>
            <li className="admin-link">⚙️ Admin Panels</li>
          </ul>
        </div>
      </nav>

      {/* FOOTER DE LA SIDEBAR (Tout en bas) */}
      <div className="sidebar-footer">
        <button className="logout-btn">
          <span className="logout-icon">↪</span> Log Out
        </button>
      </div>
    </aside>
  );
}
