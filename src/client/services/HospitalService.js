export class HospitalService {
  constructor() {
    this.scopePrefix = 'x_hete_hospital_ma';
  }

  async getPatients(limit = 50) {
    const response = await fetch(`/api/now/table/${this.scopePrefix}_patient?sysparm_display_value=all&sysparm_limit=${limit}&sysparm_order_by=patient_id`, {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    const data = await response.json();
    return data.result || [];
  }

  async getDoctors(limit = 50) {
    const response = await fetch(`/api/now/table/${this.scopePrefix}_doctor?sysparm_display_value=all&sysparm_limit=${limit}&sysparm_order_by=doctor_id`, {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    const data = await response.json();
    return data.result || [];
  }

  async getAppointments(limit = 50) {
    const response = await fetch(`/api/now/table/${this.scopePrefix}_appointment?sysparm_display_value=all&sysparm_limit=${limit}&sysparm_order_by=appointment_date`, {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    const data = await response.json();
    return data.result || [];
  }

  async getTodayAppointments() {
    const today = new Date().toISOString().split('T')[0];
    const response = await fetch(`/api/now/table/${this.scopePrefix}_appointment?sysparm_display_value=all&sysparm_query=appointment_dateSTARTSWITH${today}^statusIN^scheduled,confirmed,in_progress&sysparm_order_by=appointment_date`, {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    const data = await response.json();
    return data.result || [];
  }

  async getDashboardStats() {
    try {
      const [patients, doctors, appointments] = await Promise.all([
        this.getPatients(1000),
        this.getDoctors(1000),
        this.getAppointments(1000)
      ]);

      const todayAppointments = await this.getTodayAppointments();
      
      const activePatients = patients.filter(p => p.active?.value === 'true').length;
      const activeDoctors = doctors.filter(d => d.active?.value === 'true').length;
      const completedAppointments = appointments.filter(a => a.status?.value === 'completed').length;
      
      return {
        totalPatients: patients.length,
        activePatients,
        totalDoctors: doctors.length,
        activeDoctors,
        totalAppointments: appointments.length,
        todayAppointments: todayAppointments.length,
        completedAppointments
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      return {
        totalPatients: 0,
        activePatients: 0,
        totalDoctors: 0,
        activeDoctors: 0,
        totalAppointments: 0,
        todayAppointments: 0,
        completedAppointments: 0
      };
    }
  }

  async createPatient(patientData) {
    const response = await fetch(`/api/now/table/${this.scopePrefix}_patient?sysparm_display_value=all`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      },
      body: JSON.stringify(patientData)
    });
    return response.json();
  }

  async createDoctor(doctorData) {
    const response = await fetch(`/api/now/table/${this.scopePrefix}_doctor?sysparm_display_value=all`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      },
      body: JSON.stringify(doctorData)
    });
    return response.json();
  }

  async createAppointment(appointmentData) {
    const response = await fetch(`/api/now/table/${this.scopePrefix}_appointment?sysparm_display_value=all`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      },
      body: JSON.stringify(appointmentData)
    });
    return response.json();
  }

  async updateAppointmentStatus(appointmentId, status) {
    const response = await fetch(`/api/now/table/${this.scopePrefix}_appointment/${appointmentId}?sysparm_display_value=all`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      },
      body: JSON.stringify({ status })
    });
    return response.json();
  }
}