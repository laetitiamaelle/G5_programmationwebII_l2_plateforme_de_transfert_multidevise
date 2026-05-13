import { useEffect } from "react";

import {
  House,
  ArrowLeftRight,
  Wallet,
  Users,
  ChartNoAxesCombined,
  Shield,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  ArrowRight,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Transfer.css";

const Transfer = () => {
  useEffect(() => {
    document.body.className =
      "transfer-body-global";
  }, []);

  return (
    <div className="transfer-page">
      {/* SIDEBAR */}

      <div className="sidebar">
        <div>
          <div className="sidebar-top">
            <div className="logo">
              Cashflow
            </div>
          </div>

          <div className="sidebar-body">
            <p className="menu-title">
              MAIN NAVIGATION
            </p>

            <div className="menu-list">
              <div className="sidebar-item">
                <House size={18} />
                <span>Dashboard</span>
              </div>

              <Link to="/transfer">
                <div className="sidebar-item active">
                  <ArrowLeftRight size={18} />
                  <span>Transfer</span>
                </div>
              </Link>

              <div className="sidebar-item">
                <Wallet size={18} />
                <span>Transactions</span>
              </div>

              <div className="sidebar-item">
                <Users size={18} />
                <span>Contacts</span>
              </div>
            </div>

            <p className="menu-title management">
              MANAGEMENT
            </p>

            <div className="menu-list">
              <Link to="/exchange-rates">
                <div className="sidebar-item">
                  <ChartNoAxesCombined size={18} />
                  <span>
                    Exchange Rates
                  </span>
                </div>
              </Link>

              <div className="sidebar-item">
                <Shield size={18} />
                <span>Admin Panels</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </div>

      {/* CONTENT */}

      <div className="transfer-content">
        {/* TOPBAR */}

        <div className="topbar">
          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search transactions or contacts..."
            />
          </div>

          <div className="topbar-right">
            <button className="notification-btn">
              <Bell size={20} />
            </button>

            <div className="profile-box">
              <img
                src="https://i.pravatar.cc/100"
                alt=""
              />

              <div>
                <h3>Alex Rivera</h3>
                <p>Personal Account</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}

        <div className="transfer-main">
          {/* LEFT */}

          <div className="transfer-left">
            <p className="transfer-subtitle">
              TRANSFERT INTERNATIONAL
            </p>

            <h1>
              Initier un transfert
            </h1>

            <p className="transfer-description">
              Envoyez des fonds rapidement
              avec conversion en temps réel.
            </p>

            {/* ACCOUNT CARD */}

            <div className="transfer-card">
              <span className="label">
                COMPTE DE DÉPART
              </span>

              <div className="account-box">
                <div className="account-left">
                  <div className="currency-icon">
                    €
                  </div>

                  <div>
                    <h3>
                      Compte Euro (EUR)
                    </h3>

                    <p>
                      Solde disponible :
                      4,250.00 €
                    </p>
                  </div>
                </div>

                <div className="account-right">
                  <span className="default-badge">
                    Par défaut
                  </span>

                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* AMOUNT */}

            <div className="transfer-card">
              <div className="amount-header">
                <span className="label">
                  MONTANT À ENVOYER
                </span>

                <span className="limit-text">
                  Limite : 10,000€
                </span>
              </div>

              <div className="amount-box">
                <input
                  type="text"
                  defaultValue="1500"
                />

                <button>MAX</button>
              </div>
            </div>

            {/* BENEFICIARY */}

            <div className="transfer-card">
              <span className="label">
                DESTINATAIRE
              </span>

              <div className="beneficiary-box">
                <div className="beneficiary-avatar">
                  JM
                </div>

                <div className="beneficiary-info">
                  <h3>
                    Jean Mbarga
                  </h3>

                  <p>
                    MTN Mobile Money
                  </p>
                </div>

                <div className="verified-badge">
                  Vérifié
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="conversion-card">
            <div className="conversion-header">
              <div>
                <h2>
                  Détails de conversion
                </h2>

                <p>
                  Taux mis à jour en direct
                </p>
              </div>

              <div className="live-badge">
                LIVE
              </div>
            </div>

            {/* VALUES */}

            <div className="conversion-box">
              <div className="conversion-values">
                <div>
                  <span>
                    VOUS ENVOYEZ
                  </span>

                  <h1>
                    1 500,00 €
                  </h1>
                </div>

                <div className="arrow-circle">
                  <ArrowRight size={22} />
                </div>

                <div className="receive-box">
                  <span>
                    ILS REÇOIVENT
                  </span>

                  <h1>
                    983 935 XAF
                  </h1>
                </div>
              </div>

              <div className="conversion-info">
                <div>
                  <span>
                    Taux de change
                  </span>

                  <strong>
                    1 EUR = 655.957 XAF
                  </strong>
                </div>

                <div>
                  <span>
                    Frais de service
                  </span>

                  <strong className="fee">
                    +22.50 €
                  </strong>
                </div>

                <div>
                  <span>
                    Délai estimé
                  </span>

                  <strong>
                    ~ 2 minutes
                  </strong>
                </div>
              </div>
            </div>

            {/* TOTAL */}

            <div className="total-box">
              <span>
                TOTAL À DÉBITER
              </span>

              <h1>
                1 522,50 €
              </h1>
            </div>

            {/* SECURITY */}

            <div className="security-info">
              <div className="security-row">
                <ShieldCheck size={16} />

                <span>
                  Transaction sécurisée AES-256
                </span>
              </div>

              <div className="security-row">
                <Clock3 size={16} />

                <span>
                  Exécution instantanée
                </span>
              </div>
            </div>

            {/* BUTTON */}

            <button className="confirm-btn">
              Continuer vers la confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;