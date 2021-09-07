// =========================================================
// * Vuetify Material Dashboard PRO - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard-pro
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/vue-world-map'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  async beforeCreate () {
    await store.dispatch('utilities/fetchItems', {
      resources: [
        'countries',
        'regions',
        'departments',
        'towns',
        'genders',
        'legalForms',
        'qualificationLevels',
        'maritalStatuses',
        'professionalSituations',
        'projectStatuses',
        'sectors',
        'subsectors',
        'natures',
        'publicFunding',
        'banks',
      ],
    })
  },
  async created () {
    const authToken = localStorage.getItem('authToken')
    const expiresIn = localStorage.getItem('expiresIn')
    if (authToken && expiresIn) {
      await this.$store.dispatch('auth/checkAuth', { authToken: authToken, expiresIn: expiresIn })
    }
  },
  render: h => h(App),
}).$mount('#app')
