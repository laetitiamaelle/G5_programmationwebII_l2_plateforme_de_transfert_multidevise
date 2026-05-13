"use client"; 

import StatCard from '@/components/statCard';
import UserTable from '@/components/userTable';
import Sidebar from '@/components/Sidebar';

export default function DashboardPage() {
  return (
    <div className="dashboard-view">
    <Sidebar />
      <section className="welcome">
        <h1>Administration des Utilisateurs</h1>
        <p>Surveillance globale de l'activité financière.</p>
      </section>
      <div className="stats-grid">
        <StatCard 
          label="Utilisateurs Totaux" 
          value="1,284" 
          trend="+12 nouveaux cette semaine" 
        />
        <StatCard 
          label="Volume 24h" 
          value="45,820,000 XAF" 
          subtext="Volume total des transferts" 
        />
        <StatCard 
          label="Transactions Actives" 
          value="86" 
          subtext="En cours de traitement" 
        />
        <StatCard 
          label="Réserve Plateforme" 
          value="248,500.00 EUR" 
          isGold={true} 
          subtext="Liquidités totales" 
        />
      </div>
    <section className="table-section-wrapper" style={{ marginTop: '40px' }}>
    <UserTable />
      </section>
    </div>
  );
}