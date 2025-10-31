import '@servicenow/sdk/global'

// Import all tables
import './tables/patient.now'
import './tables/doctor.now'
import './tables/appointment.now'

// Import roles
import './roles/hospital_roles.now'

// Import ACLs
import './acls/hospital_acls.now'

// Import business rules
import './business-rules/hospital_business_rules.now'

// Import UI pages
import './ui-pages/dashboard.now'

// Import sample records
import './records/sample_doctors.now'
import './records/sample_patients.now'