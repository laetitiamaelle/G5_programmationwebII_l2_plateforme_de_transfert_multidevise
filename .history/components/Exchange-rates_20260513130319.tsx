'use client'
import { useEffect } from "react";
import { Search, Clock, Bell, Download, Plus, Filter, ArrowUpRight, ArrowDownLeft, RefreshCw, Info } from 'lucide-react'
import {
  House,
  ArrowLeftRight,
  Wallet,
  Users,
  ChartNoAxesCombined,
  Shield,
  LogOut,
  Clock3,
  TrendingUp,
  Activity,
} from "lucide-react";


import "./Exchange-rates.css";
import "./HistoriqueTransactions.css"; // Si le CSS a le même nom que le composant


const Dashboard = () => {
  useEffect(() => {
    document.body.className = "dashboard-body-global";
  }, []);

  return (
      
      <div className="dashboard-content">
        {/* TOPBAR */}

        <header className="topbar">
        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search transactions or contacts..." className="search" />
        </div>
        <div className="topbar-right">
          <button className="icon-btn"><Clock size={20} /></button>
          <button className="icon-btn"><Bell size={20} /></button>
          <div className="user">
            <div className="user-info">
              <span className="user-name">Alex Rivera</span>
              <span className="user-role">Personal Account</span>
            </div>
            <img src="https://i.pravatar.cc/40" alt="avatar" className="user-avatar" />
          </div>
        </div>
        </header>

        {/* MAIN */}

        <div className="dashboard-main">
          <div className="dashboard-header">
            <div>
              <p className="dashboard-subtitle">
                ADMINISTRATION CENTRALE
              </p>

              <h1>
                Tableau des Taux de Change
              </h1>

              <p className="dashboard-description">
                Gérez et surveillez les conversions
                en temps réel pour le réseau Cashflow.
              </p>
            </div>

            <div className="header-actions">
              <div className="interval-box">
                Intervalle auto : 12h
              </div>

              <button className="update-btn">
                <RefreshCw size={18} />
                Forcer la mise à jour
              </button>
            </div>
          </div>

          {/* RATE CARDS */}

          <div className="rates-grid">
            <div className="rate-card">
              <div className="rate-top">
                <div>
                  <h3>XAF ↔ EUR</h3>

                  <p>
                    Banque Centrale des États
                    de l'Afrique
                  </p>
                </div>

                <span className="positive">
                  +0.02%
                </span>
              </div>

              <h1>655.957</h1>

              <div className="rate-time">
                <Clock3 size={14} />
                Mis à jour : il y a 12 min
              </div>

              <div className="graph positive-bg" />

              <div className="rate-buttons">
                <button>Historique</button>
                <button>Analyses</button>
              </div>
            </div>

            <div className="rate-card">
              <div className="rate-top">
                <div>
                  <h3>XAF ↔ USD</h3>

                  <p>
                    Thomson Reuters API
                  </p>
                </div>

                <span className="negative">
                  -1.15%
                </span>
              </div>

              <h1>612.420</h1>

              <div className="rate-time">
                <Clock3 size={14} />
                Mis à jour : il y a 8 min
              </div>

              <div className="graph negative-bg" />

              <div className="rate-buttons">
                <button>Historique</button>
                <button>Analyses</button>
              </div>
            </div>

            <div className="rate-card">
              <div className="rate-top">
                <div>
                  <h3>EUR ↔ USD</h3>

                  <p>
                    European Central Bank
                  </p>
                </div>

                <span className="positive">
                  +0.45%
                </span>
              </div>

              <h1>1.0825</h1>

              <div className="rate-time">
                <Clock3 size={14} />
                Mis à jour : il y a 5 min
              </div>

              <div className="graph positive-bg" />

              <div className="rate-buttons">
                <button>Historique</button>
                <button>Analyses</button>
              </div>
            </div>
          </div>

          {/* SECOND GRID */}

          <div className="bottom-grid">
            {/* LEFT */}

            <div className="status-card">
              <h2>
                État des flux de données
              </h2>

              <p className="status-sub">
                Visualisation de la latence.
              </p>

              <div className="status-list">
                <div className="status-item">
                  <div>
                    <h4>
                      Banque Centrale (BEAC)
                    </h4>
                  </div>

                  <div className="status-right">
                    <span>
                      Latence : 14ms
                    </span>

                    <div className="green-badge">
                      Opérationnel
                    </div>
                  </div>
                </div>

                <div className="status-item">
                  <div>
                    <h4>
                      European Central Bank
                    </h4>
                  </div>

                  <div className="status-right">
                    <span>
                      Latence : 42ms
                    </span>

                    <div className="green-badge">
                      Opérationnel
                    </div>
                  </div>
                </div>

                <div className="status-item">
                  <div>
                    <h4>
                      XE.com Real-Time
                    </h4>
                  </div>

                  <div className="status-right">
                    <span>
                      Latence : 890ms
                    </span>

                    <div className="red-badge">
                      Instable
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="security-card">
              <h2>
                Actions de Sécurité
              </h2>

              <div className="security-box">
                <h4>
                  Gel du spread
                </h4>

                <p>
                  Fige temporairement les taux.
                </p>

                <button className="security-btn yellow">
                  Activer le gel manuel
                </button>
              </div>

              <div className="security-box">
                <h4>
                  Basculer de source
                </h4>

                <p>
                  Changer de source en cas de panne.
                </p>

                <button className="security-btn dark">
                  Configurer le failover
                </button>
              </div>
            </div>
          </div>

          {/* STATS */}

          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-title">
                <Activity size={14} />
                VOLUME CONVERTI
              </div>

              <h2>€1.2M</h2>

              <div className="stat-green">
                <TrendingUp size={14} />
                +12% vs hier
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-title">
                <Activity size={14} />
                TRANSACTIONS
              </div>

              <h2>48</h2>

              <div className="stat-green">
                <TrendingUp size={14} />
                Toutes validées
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-title">
                <Activity size={14} />
                SPREAD MOYEN
              </div>

              <h2>0.15%</h2>

              <div className="stat-green">
                <TrendingUp size={14} />
                Optimisé
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-title">
                <Activity size={14} />
                TEMPS RÉPONSE
              </div>

              <h2>1.2s</h2>

              <div className="stat-green">
                <TrendingUp size={14} />
                Serveur ECB
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;