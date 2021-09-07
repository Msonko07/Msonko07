// Dependencies
import axios from 'axios'
// import router from '../../router'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'
// Initial state
const state = {
  projectsInRegion: [],
  projectsInSector: [],
}

// State getters
const getters = {
  getProjectInRegion: state => {
    return state.projectsInRegion.splice(9)
  },
  getProjectsInSector: state => {
    return state.projectsInSector
  },
}

// State mutation
const mutations = {
  setProjectsInRegion (state, projects) {
    state.projectsInRegion = projects
  },
  setProjectsInSector (state, projects) {
    state.projectsInSector = projects
  },
}

// State actions
const actions = {
  async loadDashboard ({ commit }) {
    try {
      commit('utilities/setLoading', true, { root: true })
      const regions = await axios.get('/regions')
      commit('setProjectsInRegion', regions.data)
    } catch (err) {
      window.console.log(err)
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
}

// Exporting the module
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
