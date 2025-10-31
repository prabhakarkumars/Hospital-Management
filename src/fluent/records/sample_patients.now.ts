import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Patient Records
export const patient1 = Record({
  $id: Now.ID['patient1'],
  table: 'x_hete_hospital_ma_patient',
  data: {
    first_name: 'John',
    last_name: 'Smith',
    patient_id: 'PAT000001',
    date_of_birth: '1985-06-15',
    gender: 'male',
    phone: '555-1001',
    email: 'john.smith@email.com',
    address: '123 Main Street, Anytown, ST 12345',
    emergency_contact_name: 'Jane Smith',
    emergency_contact_phone: '555-1002',
    blood_type: 'o_positive',
    medical_history: 'Hypertension, managed with medication',
    allergies: 'Penicillin',
    insurance_provider: 'Blue Cross Blue Shield',
    insurance_number: 'BCBS123456789',
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const patient2 = Record({
  $id: Now.ID['patient2'],
  table: 'x_hete_hospital_ma_patient',
  data: {
    first_name: 'Maria',
    last_name: 'Garcia',
    patient_id: 'PAT000002',
    date_of_birth: '1992-03-22',
    gender: 'female',
    phone: '555-1003',
    email: 'maria.garcia@email.com',
    address: '456 Oak Avenue, Somewhere, ST 54321',
    emergency_contact_name: 'Carlos Garcia',
    emergency_contact_phone: '555-1004',
    blood_type: 'a_positive',
    medical_history: 'Asthma, uses inhaler',
    allergies: 'Peanuts, shellfish',
    insurance_provider: 'Aetna',
    insurance_number: 'AETNA987654321',
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const patient3 = Record({
  $id: Now.ID['patient3'],
  table: 'x_hete_hospital_ma_patient',
  data: {
    first_name: 'Robert',
    last_name: 'Johnson',
    patient_id: 'PAT000003',
    date_of_birth: '1978-11-08',
    gender: 'male',
    phone: '555-1005',
    email: 'robert.johnson@email.com',
    address: '789 Pine Road, Elsewhere, ST 98765',
    emergency_contact_name: 'Linda Johnson',
    emergency_contact_phone: '555-1006',
    blood_type: 'b_negative',
    medical_history: 'Diabetes Type 2, controlled with diet and exercise',
    allergies: 'None known',
    insurance_provider: 'Cigna',
    insurance_number: 'CIGNA456789123',
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const patient4 = Record({
  $id: Now.ID['patient4'],
  table: 'x_hete_hospital_ma_patient',
  data: {
    first_name: 'Emma',
    last_name: 'Davis',
    patient_id: 'PAT000004',
    date_of_birth: '2010-07-19',
    gender: 'female',
    phone: '555-1007',
    email: 'emma.parent@email.com',
    address: '321 Elm Street, Hometown, ST 13579',
    emergency_contact_name: 'Sarah Davis',
    emergency_contact_phone: '555-1008',
    blood_type: 'ab_positive',
    medical_history: 'No significant medical history',
    allergies: 'Latex',
    insurance_provider: 'UnitedHealth',
    insurance_number: 'UH147258369',
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const patient5 = Record({
  $id: Now.ID['patient5'],
  table: 'x_hete_hospital_ma_patient',
  data: {
    first_name: 'William',
    last_name: 'Brown',
    patient_id: 'PAT000005',
    date_of_birth: '1955-12-03',
    gender: 'male',
    phone: '555-1009',
    email: 'william.brown@email.com',
    address: '654 Maple Lane, Oldtown, ST 24680',
    emergency_contact_name: 'Margaret Brown',
    emergency_contact_phone: '555-1010',
    blood_type: 'o_negative',
    medical_history: 'Heart disease, previous heart attack in 2018',
    allergies: 'Sulfa drugs',
    insurance_provider: 'Medicare',
    insurance_number: 'MEDICARE753951852',
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})