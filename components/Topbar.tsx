export default function Topbar() {
  return (
    <header className="top-nav">
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search transactions or contacts..." />
      </div>
      <div className="top-nav-right">
        <div className="status-icons">
          <span className="nav-icon">🌐</span>
          <span className="nav-icon">🔔</span>
        </div>
        
        <div className="admin-profile">
          <div className="admin-info">
            <span className="admin-name">Admin Principal</span>
          </div>
          <div className="avatar">A</div>
        </div>
      </div>
    </header>
  );
}
