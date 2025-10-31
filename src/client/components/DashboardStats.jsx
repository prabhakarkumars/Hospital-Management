import React from 'react';
import './DashboardStats.css';

export default function DashboardStats({ stats }) {
  const statCards = [
    {
      title: 'Total Patients',
      value: stats.totalPatients,
      subtitle: `${stats.activePatients} active`,
      icon: '👥',
      color: 'blue'
    },
    {
      title: 'Total Doctors',
      value: stats.totalDoctors,
      subtitle: `${stats.activeDoctors} available`,
      icon: '👨‍⚕️',
      color: 'green'
    },
    {
      title: 'Total Appointments',
      value: stats.totalAppointments,
      subtitle: `${stats.completedAppointments} completed`,
      icon: '📅',
      color: 'purple'
    },
    {
      title: 'Today\'s Appointments',
      value: stats.todayAppointments,
      subtitle: 'scheduled for today',
      icon: '⏰',
      color: 'orange'
    }
  ];

  return (
    <div className="dashboard-stats">
      <h2>Hospital Overview</h2>
      <div className="stats-grid">
        {statCards.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-subtitle">{stat.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}