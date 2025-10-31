import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { validatePatientData, validateDoctorData, generateAppointmentId, checkAppointmentConflicts } from '../../server/hospital-validators.js'

// Business Rule for Patient validation
export const PatientValidation = BusinessRule({
    $id: Now.ID['patient_validation'],
    name: 'Patient Data Validation',
    table: 'x_hete_hospital_ma_patient',
    when: 'before',
    action: ['insert', 'update'],
    script: validatePatientData,
    order: 100,
    active: true,
    description: 'Validates patient data including email format and generates patient ID'
})

// Business Rule for Doctor validation
export const DoctorValidation = BusinessRule({
    $id: Now.ID['doctor_validation'],
    name: 'Doctor Data Validation',
    table: 'x_hete_hospital_ma_doctor',
    when: 'before',
    action: ['insert', 'update'],
    script: validateDoctorData,
    order: 100,
    active: true,
    description: 'Validates doctor data including email format and generates doctor ID'
})

// Business Rule for Appointment ID generation
export const AppointmentIdGeneration = BusinessRule({
    $id: Now.ID['appointment_id_generation'],
    name: 'Generate Appointment ID',
    table: 'x_hete_hospital_ma_appointment',
    when: 'before',
    action: ['insert'],
    script: generateAppointmentId,
    order: 50,
    active: true,
    description: 'Automatically generates unique appointment IDs'
})

// Business Rule for Appointment conflict checking
export const AppointmentConflictCheck = BusinessRule({
    $id: Now.ID['appointment_conflict_check'],
    name: 'Check Appointment Conflicts',
    table: 'x_hete_hospital_ma_appointment',
    when: 'before',
    action: ['insert', 'update'],
    script: checkAppointmentConflicts,
    order: 200,
    active: true,
    description: 'Prevents double-booking of doctors'
})