import '@servicenow/sdk/global'
import { Table, StringColumn, DateTimeColumn, IntegerColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Appointment table for hospital management
export const x_hete_hospital_ma_appointment = Table({
    name: 'x_hete_hospital_ma_appointment',
    label: 'Appointment',
    schema: {
        appointment_id: StringColumn({
            label: 'Appointment ID',
            mandatory: true,
            maxLength: 20,
            attributes: {
                unique: true
            }
        }),
        patient: ReferenceColumn({
            label: 'Patient',
            mandatory: true,
            referenceTable: 'x_hete_hospital_ma_patient'
        }),
        doctor: ReferenceColumn({
            label: 'Doctor',
            mandatory: true,
            referenceTable: 'x_hete_hospital_ma_doctor'
        }),
        appointment_date: DateTimeColumn({
            label: 'Appointment Date & Time',
            mandatory: true
        }),
        duration_minutes: IntegerColumn({
            label: 'Duration (Minutes)',
            default: 30,
            min: 15,
            max: 480
        }),
        appointment_type: StringColumn({
            label: 'Appointment Type',
            maxLength: 50,
            choices: {
                consultation: { label: 'Consultation', sequence: 0 },
                follow_up: { label: 'Follow-up', sequence: 1 },
                check_up: { label: 'Routine Check-up', sequence: 2 },
                surgery: { label: 'Surgery', sequence: 3 },
                diagnostic: { label: 'Diagnostic Test', sequence: 4 },
                emergency: { label: 'Emergency', sequence: 5 },
                therapy: { label: 'Therapy', sequence: 6 },
                vaccination: { label: 'Vaccination', sequence: 7 }
            },
            dropdown: 'dropdown_with_none'
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 20,
            choices: {
                scheduled: { label: 'Scheduled', sequence: 0 },
                confirmed: { label: 'Confirmed', sequence: 1 },
                in_progress: { label: 'In Progress', sequence: 2 },
                completed: { label: 'Completed', sequence: 3 },
                cancelled: { label: 'Cancelled', sequence: 4 },
                no_show: { label: 'No Show', sequence: 5 },
                rescheduled: { label: 'Rescheduled', sequence: 6 }
            },
            dropdown: 'dropdown_with_none',
            default: 'scheduled'
        }),
        reason: StringColumn({
            label: 'Reason for Visit',
            maxLength: 500
        }),
        notes: StringColumn({
            label: 'Appointment Notes',
            maxLength: 4000
        }),
        room_number: StringColumn({
            label: 'Room Number',
            maxLength: 20
        }),
        created_by: ReferenceColumn({
            label: 'Created By',
            referenceTable: 'sys_user'
        }),
        priority: StringColumn({
            label: 'Priority',
            maxLength: 20,
            choices: {
                low: { label: 'Low', sequence: 0 },
                normal: { label: 'Normal', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                urgent: { label: 'Urgent', sequence: 3 },
                emergency: { label: 'Emergency', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'normal'
        })
    },
    display: 'appointment_id',
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private',
    allow_web_service_access: true
})