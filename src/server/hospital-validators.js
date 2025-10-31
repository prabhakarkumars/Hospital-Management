import { gs } from '@servicenow/glide'
import { GlideRecord } from '@servicenow/glide'

export function validatePatientData(current, previous) {
    // Validate email format if provided
    if (current.email && current.email != '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(current.email.toString())) {
            gs.addErrorMessage('Please enter a valid email address');
            current.setAbortAction(true);
        }
    }
    
    // Validate phone number format if provided
    if (current.phone && current.phone != '') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(current.phone.toString())) {
            gs.addErrorMessage('Please enter a valid phone number');
            current.setAbortAction(true);
        }
    }
    
    // Generate patient ID if not provided
    if (!current.patient_id || current.patient_id == '') {
        const gr = new GlideRecord('x_hete_hospital_ma_patient');
        gr.query();
        const count = gr.getRowCount();
        current.patient_id = 'PAT' + String(count + 1).padStart(6, '0');
    }
}

export function validateDoctorData(current, previous) {
    // Validate email format if provided
    if (current.email && current.email != '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(current.email.toString())) {
            gs.addErrorMessage('Please enter a valid email address');
            current.setAbortAction(true);
        }
    }
    
    // Generate doctor ID if not provided
    if (!current.doctor_id || current.doctor_id == '') {
        const gr = new GlideRecord('x_hete_hospital_ma_doctor');
        gr.query();
        const count = gr.getRowCount();
        current.doctor_id = 'DOC' + String(count + 1).padStart(6, '0');
    }
}

export function generateAppointmentId(current, previous) {
    // Generate appointment ID if not provided
    if (!current.appointment_id || current.appointment_id == '') {
        const gr = new GlideRecord('x_hete_hospital_ma_appointment');
        gr.query();
        const count = gr.getRowCount();
        current.appointment_id = 'APT' + String(count + 1).padStart(6, '0');
    }
}

export function checkAppointmentConflicts(current, previous) {
    // Check for doctor availability conflicts
    const appointmentGr = new GlideRecord('x_hete_hospital_ma_appointment');
    appointmentGr.addQuery('doctor', current.doctor);
    appointmentGr.addQuery('appointment_date', current.appointment_date);
    appointmentGr.addQuery('status', 'IN', 'scheduled,confirmed,in_progress');
    
    // Exclude current record if updating
    if (current.sys_id) {
        appointmentGr.addQuery('sys_id', '!=', current.sys_id);
    }
    
    appointmentGr.query();
    
    if (appointmentGr.hasNext()) {
        gs.addErrorMessage('Doctor is not available at the selected time. Please choose a different time slot.');
        current.setAbortAction(true);
    }
}