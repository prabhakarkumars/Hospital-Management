import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { hospital_admin, hospital_doctor, hospital_nurse, hospital_receptionist, hospital_manager, hospital_system_admin } from '../roles/hospital_roles.now'

// Patient table ACLs
export const patient_read_acl = Acl({
    $id: Now.ID['patient_read'],
    type: 'record',
    table: 'x_hete_hospital_ma_patient',
    operation: 'read',
    roles: [hospital_admin, hospital_doctor, hospital_nurse, hospital_receptionist, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow hospital staff to read patient records'
})

export const patient_create_acl = Acl({
    $id: Now.ID['patient_create'],
    type: 'record',
    table: 'x_hete_hospital_ma_patient',
    operation: 'create',
    roles: [hospital_admin, hospital_doctor, hospital_receptionist, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow authorized staff to create patient records'
})

export const patient_write_acl = Acl({
    $id: Now.ID['patient_write'],
    type: 'record',
    table: 'x_hete_hospital_ma_patient',
    operation: 'write',
    roles: [hospital_admin, hospital_doctor, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow doctors and admins to update patient records'
})

export const patient_delete_acl = Acl({
    $id: Now.ID['patient_delete'],
    type: 'record',
    table: 'x_hete_hospital_ma_patient',
    operation: 'delete',
    roles: [hospital_admin, hospital_system_admin],
    active: true,
    description: 'Only admins can delete patient records'
})

// Doctor table ACLs
export const doctor_read_acl = Acl({
    $id: Now.ID['doctor_read'],
    type: 'record',
    table: 'x_hete_hospital_ma_doctor',
    operation: 'read',
    roles: [hospital_admin, hospital_doctor, hospital_nurse, hospital_receptionist, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow hospital staff to read doctor information'
})

export const doctor_create_acl = Acl({
    $id: Now.ID['doctor_create'],
    type: 'record',
    table: 'x_hete_hospital_ma_doctor',
    operation: 'create',
    roles: [hospital_admin, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Only admins and managers can create doctor records'
})

export const doctor_write_acl = Acl({
    $id: Now.ID['doctor_write'],
    type: 'record',
    table: 'x_hete_hospital_ma_doctor',
    operation: 'write',
    roles: [hospital_admin, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Only admins and managers can update doctor records'
})

export const doctor_delete_acl = Acl({
    $id: Now.ID['doctor_delete'],
    type: 'record',
    table: 'x_hete_hospital_ma_doctor',
    operation: 'delete',
    roles: [hospital_admin, hospital_system_admin],
    active: true,
    description: 'Only system admins can delete doctor records'
})

// Appointment table ACLs
export const appointment_read_acl = Acl({
    $id: Now.ID['appointment_read'],
    type: 'record',
    table: 'x_hete_hospital_ma_appointment',
    operation: 'read',
    roles: [hospital_admin, hospital_doctor, hospital_nurse, hospital_receptionist, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow hospital staff to read appointments'
})

export const appointment_create_acl = Acl({
    $id: Now.ID['appointment_create'],
    type: 'record',
    table: 'x_hete_hospital_ma_appointment',
    operation: 'create',
    roles: [hospital_admin, hospital_doctor, hospital_receptionist, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow authorized staff to create appointments'
})

export const appointment_write_acl = Acl({
    $id: Now.ID['appointment_write'],
    type: 'record',
    table: 'x_hete_hospital_ma_appointment',
    operation: 'write',
    roles: [hospital_admin, hospital_doctor, hospital_nurse, hospital_receptionist, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow hospital staff to update appointments'
})

export const appointment_delete_acl = Acl({
    $id: Now.ID['appointment_delete'],
    type: 'record',
    table: 'x_hete_hospital_ma_appointment',
    operation: 'delete',
    roles: [hospital_admin, hospital_doctor, hospital_manager, hospital_system_admin],
    active: true,
    description: 'Allow doctors and admins to cancel appointments'
})