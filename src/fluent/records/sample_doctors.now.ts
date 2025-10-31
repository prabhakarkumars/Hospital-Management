import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Doctor Records
export const doctor1 = Record({
  $id: Now.ID['doctor1'],
  table: 'x_hete_hospital_ma_doctor',
  data: {
    first_name: 'Sarah',
    last_name: 'Johnson',
    doctor_id: 'DOC000001',
    license_number: 'MD12345',
    specialization: 'cardiology',
    phone: '555-0123',
    email: 'sarah.johnson@hospital.com',
    office_location: 'Cardiology Wing, Room 201',
    hire_date: '2018-03-15',
    years_experience: 12,
    department: 'cardiology',
    availability_status: 'available',
    salary: 185000,
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const doctor2 = Record({
  $id: Now.ID['doctor2'],
  table: 'x_hete_hospital_ma_doctor',
  data: {
    first_name: 'Michael',
    last_name: 'Chen',
    doctor_id: 'DOC000002',
    license_number: 'MD23456',
    specialization: 'emergency_medicine',
    phone: '555-0124',
    email: 'michael.chen@hospital.com',
    office_location: 'Emergency Department',
    hire_date: '2020-07-01',
    years_experience: 8,
    department: 'emergency',
    availability_status: 'on_call',
    salary: 165000,
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const doctor3 = Record({
  $id: Now.ID['doctor3'],
  table: 'x_hete_hospital_ma_doctor',
  data: {
    first_name: 'Emily',
    last_name: 'Rodriguez',
    doctor_id: 'DOC000003',
    license_number: 'MD34567',
    specialization: 'pediatrics',
    phone: '555-0125',
    email: 'emily.rodriguez@hospital.com',
    office_location: 'Pediatrics Wing, Room 305',
    hire_date: '2019-01-20',
    years_experience: 10,
    department: 'pediatrics',
    availability_status: 'available',
    salary: 175000,
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const doctor4 = Record({
  $id: Now.ID['doctor4'],
  table: 'x_hete_hospital_ma_doctor',
  data: {
    first_name: 'David',
    last_name: 'Williams',
    doctor_id: 'DOC000004',
    license_number: 'MD45678',
    specialization: 'surgery',
    phone: '555-0126',
    email: 'david.williams@hospital.com',
    office_location: 'Surgery Department, Room 401',
    hire_date: '2015-09-10',
    years_experience: 15,
    department: 'surgery',
    availability_status: 'busy',
    salary: 220000,
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})

export const doctor5 = Record({
  $id: Now.ID['doctor5'],
  table: 'x_hete_hospital_ma_doctor',
  data: {
    first_name: 'Lisa',
    last_name: 'Thompson',
    doctor_id: 'DOC000005',
    license_number: 'MD56789',
    specialization: 'neurology',
    phone: '555-0127',
    email: 'lisa.thompson@hospital.com',
    office_location: 'Neurology Unit, Room 502',
    hire_date: '2021-02-14',
    years_experience: 6,
    department: 'neurology',
    availability_status: 'available',
    salary: 195000,
    active: true
  },
  $meta: {
    installMethod: 'demo'
  }
})