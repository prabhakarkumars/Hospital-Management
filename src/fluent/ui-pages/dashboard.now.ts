import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import dashboardPage from '../../client/index.html'

export const hospital_admin_dashboard = UiPage({
  $id: Now.ID['hospital_admin_dashboard'],
  endpoint: 'x_hete_hospital_ma_admin_dashboard.do',
  html: dashboardPage,
  direct: true
})