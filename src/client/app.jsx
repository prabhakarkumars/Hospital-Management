import React, { useState, useEffect, useMemo } from 'react';
import { HospitalService } from './services/HospitalService.js';
import DashboardStats from './components/DashboardStats.jsx';
import { display, value } from './utils/fields.js';
import './app.css';

export default function App() {
  const service = useMemo(() => new HospitalService(), []);
  const [currentView, setCurrentView] = useState('dashboard');
  const [stats, setStats] = useState({});
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [todayAppointments, setTodayAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [service]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [statsData, patientsData, doctorsData, appointmentsData, todayData] = await Promise.all([
        service.getDashboardStats(),
        service.getPatients(),
        service.getDoctors(),
        service.getAppointments(20),
        service.getTodayAppointments()
      ]);

      setStats(statsData);
      setPatients(patientsData);
      setDoctors(doctorsData);
      setAppointments(appointmentsData);
      setTodayAppointments(todayData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderNavigation = () => (
    <nav className="main-nav">
      <div className="nav-brand">
        <h1>🏥 Hospital Management System</h1>
      </div>
      <div className="nav-links">
        <button 
          className={currentView === 'dashboard' ? 'active' : ''} 
          onClick={() => setCurrentView('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={currentView === 'patients' ? 'active' : ''} 
          onClick={() => setCurrentView('patients')}
        >
          👥 Patients
        </button>
        <button 
          className={currentView === 'doctors' ? 'active' : ''} 
          onClick={() => setCurrentView('doctors')}
        >
          👨‍⚕️ Doctors
        </button>
        <button 
          className={currentView === 'appointments' ? 'active' : ''} 
          onClick={() => setCurrentView('appointments')}
        >
          📅 Appointments
        </button>
      </div>
    </nav>
  );

  const renderDashboard = () => (
    <div className="dashboard-view">
      <DashboardStats stats={stats} />
      
      <div className="dashboard-sections">
        <div className="section">
          <h1>NEW DASHBOARD CHANGES</h1>
          <h3>Today's Appointments ({todayAppointments.length})</h3>
          <div className="appointments-list">
            {todayAppointments.slice(0, 5).map(appointment => (
              <div key={value(appointment.sys_id)} className="appointment-item">
                <div className="appointment-time">
                  {new Date(display(appointment.appointment_date)).toLocaleTimeString()}
                </div>
                <div className="appointment-details">
                  <strong>{display(appointment.patient)}</strong> → {display(appointment.doctor)}
                  <div className="appointment-type">{display(appointment.appointment_type)}</div>
                </div>
                <div className={`appointment-status status-${value(appointment.status)}`}>
                  {display(appointment.status)}
                </div>
              </div>
            ))}
            {todayAppointments.length === 0 && (
              <p className="no-data">No appointments scheduled for today</p>
            )}
          </div>
        </div>

        <div className="section">
          <h3>Recent Patients ({patients.length})</h3>
          <div className="patients-list">
            {patients.slice(0, 5).map(patient => (
              <div key={value(patient.sys_id)} className="patient-item">
                <div className="patient-info">
                  <strong>{display(patient.first_name)} {display(patient.last_name)}</strong>
                  <div className="patient-id">ID: {display(patient.patient_id)}</div>
                </div>
                <div className="patient-details">
                  {display(patient.assigned_doctor) && (
                    <div>Dr. {display(patient.assigned_doctor)}</div>
                  )}
                  <div className={`patient-status ${value(patient.active) === 'true' ? 'active' : 'inactive'}`}>
                    {value(patient.active) === 'true' ? 'Active' : 'Inactive'}
                  </div>
                </div>
              </div>
            ))}
            {patients.length === 0 && (
              <p className="no-data">No patients registered</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPatientsView = () => (
    <div className="data-view">
      <div className="view-header">
        <h2>Patient Records</h2>
        <button className="refresh-btn" onClick={loadData}>🔄 Refresh</button>
      </div>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Phone</th>
              <th>Assigned Doctor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={value(patient.sys_id)}>
                <td>{display(patient.patient_id)}</td>
                <td>{display(patient.first_name)} {display(patient.last_name)}</td>
                <td>{display(patient.date_of_birth)}</td>
                <td>{display(patient.phone)}</td>
                <td>{display(patient.assigned_doctor)}</td>
                <td>
                  <span className={`status ${value(patient.active) === 'true' ? 'active' : 'inactive'}`}>
                    {value(patient.active) === 'true' ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {patients.length === 0 && (
          <p className="no-data">No patients found</p>
        )}
      </div>
    </div>
  );

  const renderDoctorsView = () => (
    <div className="data-view">
      <div className="view-header">
        <h2>Doctor Directory</h2>
        <button className="refresh-btn" onClick={loadData}>🔄 Refresh</button>
      </div>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Department</th>
              <th>Availability</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr key={value(doctor.sys_id)}>
                <td>{display(doctor.doctor_id)}</td>
                <td>Dr. {display(doctor.first_name)} {display(doctor.last_name)}</td>
                <td>{display(doctor.specialization)}</td>
                <td>{display(doctor.department)}</td>
                <td>
                  <span className={`availability ${value(doctor.availability_status)}`}>
                    {display(doctor.availability_status)}
                  </span>
                </td>
                <td>
                  <span className={`status ${value(doctor.active) === 'true' ? 'active' : 'inactive'}`}>
                    {value(doctor.active) === 'true' ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {doctors.length === 0 && (
          <p className="no-data">No doctors found</p>
        )}
      </div>
    </div>
  );

  const renderAppointmentsView = () => (
    <div className="data-view">
      <div className="view-header">
        <h2>Appointments</h2>
        <button className="refresh-btn" onClick={loadData}>🔄 Refresh</button>
      </div>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Date $[AMP] Time</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Type</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={value(appointment.sys_id)}>
                <td>{display(appointment.appointment_id)}</td>
                <td>{new Date(display(appointment.appointment_date)).toLocaleString()}</td>
                <td>{display(appointment.patient)}</td>
                <td>{display(appointment.doctor)}</td>
                <td>{display(appointment.appointment_type)}</td>
                <td>
                  <span className={`status status-${value(appointment.status)}`}>
                    {display(appointment.status)}
                  </span>
                </td>
                <td>
                  <span className={`priority priority-${value(appointment.priority)}`}>
                    {display(appointment.priority)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {appointments.length === 0 && (
          <p className="no-data">No appointments found</p>
        )}
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch(currentView) {
      case 'patients':
        return renderPatientsView();
      case 'doctors':
        return renderDoctorsView();
      case 'appointments':
        return renderAppointmentsView();
      default:
        return renderDashboard();
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">⏳</div>
        <p>Loading hospital management system...</p>
      </div>
    );
  }

  return (
    <div className="hospital-app">
      {renderNavigation()}
      <main className="main-content">
        {renderCurrentView()}
      </main>
    </div>
  );
}