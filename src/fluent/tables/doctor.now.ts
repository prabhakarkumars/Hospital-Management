import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, IntegerColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Doctor table for hospital management
export const x_hete_hospital_ma_doctor = Table({
    name: 'x_hete_hospital_ma_doctor',
    label: 'Doctor',
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
        doctor_id: StringColumn({
            label: 'Doctor ID',
            mandatory: true,
            maxLength: 20,
            attributes: {
                unique: true
            }
        }),
        license_number: StringColumn({
            label: 'Medical License Number',
            mandatory: true,
            maxLength: 50,
            attributes: {
                unique: true
            }
        }),
        specialization: StringColumn({
            label: 'Specialization',
            mandatory: true,
            maxLength: 100,
            choices: {
                cardiology: { label: 'Cardiology', sequence: 0 },
                dermatology: { label: 'Dermatology', sequence: 1 },
                emergency_medicine: { label: 'Emergency Medicine', sequence: 2 },
                family_medicine: { label: 'Family Medicine', sequence: 3 },
                internal_medicine: { label: 'Internal Medicine', sequence: 4 },
                neurology: { label: 'Neurology', sequence: 5 },
                oncology: { label: 'Oncology', sequence: 6 },
                orthopedics: { label: 'Orthopedics', sequence: 7 },
                pediatrics: { label: 'Pediatrics', sequence: 8 },
                psychiatry: { label: 'Psychiatry', sequence: 9 },
                radiology: { label: 'Radiology', sequence: 10 },
                surgery: { label: 'Surgery', sequence: 11 },
                other: { label: 'Other', sequence: 12 }
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
        office_location: StringColumn({
            label: 'Office Location',
            maxLength: 200
        }),
        hire_date: DateColumn({
            label: 'Hire Date',
            mandatory: true
        }),
        years_experience: IntegerColumn({
            label: 'Years of Experience',
            min: 0,
            max: 60
        }),
        department: StringColumn({
            label: 'Department',
            maxLength: 100,
            choices: {
                emergency: { label: 'Emergency Department', sequence: 0 },
                icu: { label: 'Intensive Care Unit', sequence: 1 },
                surgery: { label: 'Surgery Department', sequence: 2 },
                pediatrics: { label: 'Pediatrics', sequence: 3 },
                maternity: { label: 'Maternity Ward', sequence: 4 },
                cardiology: { label: 'Cardiology Unit', sequence: 5 },
                neurology: { label: 'Neurology Unit', sequence: 6 },
                oncology: { label: 'Oncology Unit', sequence: 7 },
                radiology: { label: 'Radiology Department', sequence: 8 },
                laboratory: { label: 'Laboratory', sequence: 9 },
                outpatient: { label: 'Outpatient Clinic', sequence: 10 }
            },
            dropdown: 'dropdown_with_none'
        }),
        availability_status: StringColumn({
            label: 'Availability Status',
            maxLength: 20,
            choices: {
                available: { label: 'Available', sequence: 0 },
                busy: { label: 'Busy', sequence: 1 },
                on_call: { label: 'On Call', sequence: 2 },
                off_duty: { label: 'Off Duty', sequence: 3 },
                vacation: { label: 'On Vacation', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'available'
        }),
        salary: IntegerColumn({
            label: 'Annual Salary',
            min: 0
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true
        }),
        supervising_doctor: ReferenceColumn({
            label: 'Supervising Doctor',
            referenceTable: 'x_hete_hospital_ma_doctor'
        })
    },
    display: 'doctor_id',
    actions: ['create', 'read', 'update', 'delete'],
    accessible_from: 'package_private',
    allow_web_service_access: true
})