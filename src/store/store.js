import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import utilities from './modules/utilities'
import dashboard from './modules/dashboard'
import projects from '@/store/modules/projects'
import committees from '@/store/modules/committees'
import agents from '@/store/modules/agents'
import analysis from '@/store/modules/analysis'
import statistics from '@/store/modules/statistics'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
    drawer: null,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_SCRIM (state, payload) {
      state.barColor = payload
    },
  },
  actions: {

  },
  modules: {
    auth,
    utilities,
    dashboard,
    projects,
    committees,
    agents,
    analysis,
    statistics,
  },
})
