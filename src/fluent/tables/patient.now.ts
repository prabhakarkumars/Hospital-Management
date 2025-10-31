import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, IntegerColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Patient table for hospital management
export const x_hete_hospital_ma_patient = Table({
    name: 'x_hete_hospital_ma_patient',
    label: 'Patient',
    schema: {
        first_name: StringColumn({
            label: 'First Name',
            mandatory: true,
            maxLength: 50
        }),
        last_name: StringColumn({
            label: 'Last Name',
            mandatory: true,
            maxLength: 50
        }),
        patient_id: StringColumn({
            label: 'Patient ID',
            mandatory: true,
            maxLength: 20,
            attributes: {
                unique: true
            }
        }),
        date_of_birth: DateColumn({
            label: 'Date of Birth',
            mandatory: true
        }),
        gender: StringColumn({
            label: 'Gender',
            maxLength: 10,
            choices: {
                male: { label: 'Male', sequence: 0 },
                female: { label: 'Female', sequence: 1 },
                other: { label: 'Other', sequence: 2 }
            },
            dropdown: 'dropdown_with_none'
        }),
        phone: StringColumn({
            label: 'Phone Number',
            maxLength: 20
        }),
        email: StringColumn({
            label: 'Email Address',
            maxLength: 100
        }),
        address: StringColumn({
            label: 'Address',
            maxLength: 500
        }),
        emergency_contact_name: StringColumn({
            label: 'Emergency Contact Name',
            maxLength: 100
        }),
        emergency_contact_phone: StringColumn({
            label: 'Emergency Contact Phone',
            maxLength: 20
        }),
        blood_type: StringColumn({
            label: 'Blood Type',
            maxLength: 5,
            choices: {
                'a_positive': { label: 'A+', sequence: 0 },
                'a_negative': { label: 'A-', sequence: 1 },
                'b_positive': { label: 'B+', sequence: 2 },
                'b_negative': { label: 'B-', sequence: 3 },
                'ab_positive': { label: 'AB+', sequence: 4 },
                'ab_negative': { label: 'AB-', sequence: 5 },
                'o_positive': { label: 'O+', sequence: 6 },
                'o_negative': { label: 'O-', sequence: 7 }
            },
            dropdown: 'dropdown_with_none'
        }),
        medical_history: StringColumn({
            label: 'Medical History',
            maxLength: 4000
        }),
        allergies: StringColumn({
            label: 'Allergies',
            maxLength: 1000
        }),
        insurance_provider: StringColumn({
            label: 'Insurance Provider',
            maxLength: 100
        }),
        insurance_number: StringColumn({
            label: 'Insurance Number',
            maxLength: 50
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true
        }),
        assigned_doctor: ReferenceColumn({
            label: 'Assigned Doctor',
            referenceTable: 'x_hete_hospital_ma_doctor'
        })
    },
    display: 'patient_id',
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private',
    allow_web_service_access: true
})