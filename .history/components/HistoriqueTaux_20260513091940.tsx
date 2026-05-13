'use client'
import { useState } from 'react'
import { Search, Clock, Bell, RefreshCw, Download, FileText, Activity, Filter, ChevronRight, ChevronDown, Calendar, Zap, Info } from 'lucide-react'
import './HistoriqueTaux.css'

type Snapshot = {
  date: string
  paire: string
  taux: string
  source: string
  statut: 'Succès' | 'Alerte'
}

export default function HistoriqueTaux() {
  const [selected, setSelected] = useState(0)
  
  const data: Snapshot[] = [
    { date: '24 Mai 2024, 12:00:01', paire: 'EUR / XAF', taux: '655.957', source: 'ECB API', statut: 'Succès' },
    { date: '24 Mai 2024, 00:00:05', paire: 'EUR / XAF', taux: '655.957', source: 'ECB API', statut: 'Succès' },
    { date: '23 Mai 2024, 12:00:03', paire: 'USD / XAF', taux: '604.231', source: 'OpenExchange', statut: 'Succès' },
    { date: '23 Mai 2024, 00:00:02', paire: 'EUR / USD', taux: '1.0854', source: 'Exchangerate.host', statut: 'Succès' },
    { date: '22 Mai 2024, 12:00:01', paire: 'EUR / XAF', taux: '655.957', source: 'ECB API', statut: 'Succès' },
    { date: '22 Mai 2024, 00:00:04', paire: 'USD / XAF', taux: '603.890', source: 'OpenExchange', statut: 'Succès' },
    { date: '21 Mai 2024, 12:00:01', paire: 'EUR / XAF', taux: '655.957', source: 'ECB API', statut: 'Alerte' },
    { date: '21 Mai 2024, 00:00:08', paire: 'EUR / XAF', taux: '655.957', source: 'ECB API', statut: 'Succès' },
  ]

  return (
    <div className="main-taux">
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
              <span className="user-name">Admin Principal</span>
              <span className="user-role">Personal Account</span>
            </div>
            <img src="https://i.pravatar.cc/40" alt="avatar" className="user-avatar" />
          </div>
        </div>
      </header>

      <div className="content-taux">
        <div className="header-taux">
          <div>
            <h1>Historique des Taux</h1>
            <p>Consultez et auditez chaque changement de taux de change enregistré.</p>
          </div>
          <div className="actions-taux">
            <button className="btn-dark"><RefreshCw size={16} /> Actualiser</button>
            <button className="btn-yellow"><Download size={16} /> Rapport Complet</button>
          </div>
        </div>

        <div className="cards-grid">
          <div className="card">
            <div className="card-header">
              <div className="card-icon yellow"><FileText size={16} /></div>
              <span className="card-label">Snapshots Totaux</span>
            </div>
            <p className="card-value">14,280</p>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon blue"><Clock size={16} /></div>
              <span className="card-label">Fréquence de Mise à jour</span>
            </div>
            <p className="card-value">Toutes les 12h</p>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon green"><Activity size={16} /></div>
              <span className="card-label">Stabilité Moyenne</span>
            </div>
            <p className="card-value">99.98%</p>
          </div>
        </div>

        <div className="filters-taux">
          <div className="filter-group">
            <label>PAIRE DE DEVISES</label>
            <button className="filter-select">
              <span>Toutes les paires</span>
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="filter-group">
            <label>PÉRIODE D'AUDIT</label>
            <button className="filter-select">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} />
                <span>Sélectionner les dates</span>
              </div>
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="filter-group">
            <label>SOURCE API</label>
            <button className="filter-select">
              <span>Toutes les sources</span>
              <ChevronDown size={16} />
            </button>
          </div>
          <button className="btn-yellow">
            <Filter size={16} /> Appliquer
          </button>
        </div>

        <div className="tables-grid">
          <div className="table-box-taux">
            <h3 className="table-title">LOG DES SNAPSHOTS</h3>
            <table>
              <thead>
                <tr>
                  <th>Horodatage</th>
                  <th>Paire</th>
                  <th>Taux</th>
                  <th>Source</th>
                  <th>Statut</th>
                  <th style={{ width: '48px' }}></th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr 
                    key={i} 
                    onClick={() => setSelected(i)} 
                    className={selected === i? 'selected-row' : ''}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>{row.date}</td>
                    <td><span className="paire-badge">{row.paire}</span></td>
                    <td className="taux-value">{row.taux}</td>
                    <td>{row.source}</td>
                    <td className={row.statut === 'Succès'? 'statut-succes' : 'statut-alerte'}>
                      {row.statut}
                    </td>
                    <td><ChevronRight size={16} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <span>Affichage de 8 snapshots sur 14,280</span>
              <div className="page-btns">
                <button>Précédent</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>Suivant</button>
              </div>
            </div>
          </div>

          <div className="detail-box">
            <div className="detail-header">
              <div className="detail-header-top">
                <h3>Détails du Snapshot</h3>
                <span className="paire-badge">{data[selected].paire}</span>
              </div>
              <p className="detail-id">ID: ECB-MAIN-20240524-A</p>
            </div>
            
            <div className="detail-content">
              <div className="detail-row">
                <Clock size={16} />
                <div>
                  <span className="detail-label">Horodatage</span>
                  <p className="detail-value">{data[selected].date}</p>
                </div>
              </div>
              <div className="detail-row">
                <Zap size={16} />
                <div>
                  <span className="detail-label">Taux Appliqué</span>
                  <p className="detail-value-large">{data[selected].taux}</p>
                </div>
              </div>
              <div className="detail-row">
                <FileText size={16} />
                <div>
                  <span className="detail-label">Source de Données</span>
                  <p className="detail-value">European Central Bank</p>
                </div>
              </div>
              <div className="detail-row">
                <Activity size={16} />
                <div>
                  <span className="detail-label">Latence API</span>
                  <p className="detail-value">142ms</p>
                </div>
              </div>

              <div className="audit-box">
                <p className="audit-title">NOTE D'AUDIT</p>
                <span className="audit-text">
                  Ce snapshot a été utilisé pour 124 transactions actives. Aucune déviation n'a été signalée par le système de surveillance des taux externes (Ref: SNAP-89470).
                </span>
              </div>

              <button className="btn-export">Exporter les métadonnées</button>

              <div className="help-box">
                <div className="help-title">
                  <Info size={14} style={{ color: '#FACC15' }} />
                  <p>Besoin d'aide?</p>
                </div>
                <span className="help-text">
                    Les taux sont récupérés via nos partenaires bancaires et agrégateurs certifiés. Si vous constatez une divergence majeure, veuillez contacter le support technique.
                </span>
                 <a href="#" className="help-link">Consulter la documentation technique</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>© 2025 Cashflow Inc. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help Center</a>
        </div>
      </footer>
    </div>
  )
}