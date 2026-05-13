'use client'
import React from 'react';
import './admin.css'

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  trend?: string;
  isGold?: boolean; // Pour activer la bordure dorée si besoin
}

export default function StatCard({ label, value, subtext, trend, isGold }: StatCardProps) {
  return (
    <div className={`stat-card ${isGold ? 'gold-border' : ''}`}>
      <span className="card-label">{label}</span>
      <h2 className={isGold ? 'gold-text' : ''}>{value}</h2>
      
      {trend && <p className="trend">{trend}</p>}
      {subtext && <p className="subtext">{subtext}</p>}
    </div>
  );
}