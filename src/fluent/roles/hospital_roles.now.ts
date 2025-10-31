import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

// Hospital Staff roles
export const hospital_admin = Role({
    name: 'x_hete_hospital_ma.hospital_admin',
    description: 'Hospital Administrator with full access to manage the entire hospital system'
})

export const hospital_doctor = Role({
    name: 'x_hete_hospital_ma.hospital_doctor',
    description: 'Medical Doctor with access to patient records and appointment management'
})

export const hospital_nurse = Role({
    name: 'x_hete_hospital_ma.hospital_nurse',
    description: 'Registered Nurse with access to patient care and appointment assistance'
})

export const hospital_receptionist = Role({
    name: 'x_hete_hospital_ma.hospital_receptionist',
    description: 'Front desk receptionist with access to appointment scheduling and basic patient information'
})

export const hospital_manager = Role({
    name: 'x_hete_hospital_ma.hospital_manager',
    description: 'Hospital Manager with administrative oversight and reporting capabilities',
    contains_roles: [hospital_doctor, hospital_nurse, hospital_receptionist]
})

// Admin role contains all other roles
export const hospital_system_admin = Role({
    name: 'x_hete_hospital_ma.hospital_system_admin',
    description: 'System Administrator with complete access to all hospital management functions',
    contains_roles: [hospital_admin, hospital_manager, hospital_doctor, hospital_nurse, hospital_receptionist]
})