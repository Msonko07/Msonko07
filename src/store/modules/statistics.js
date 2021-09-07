// Dependencies
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'

// Initial state
const state = {
  numberOfProjectBySectors: [],
  numberOfProjectByRegions: [],
}

// State getters
const getters = {
  totalProjects: state => {
    return state.numberOfProjectByRegions.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)
  },
}

// State mutation
const mutations = {
  setNumberOfProjectBySectors (state, statistics) {
    state.numberOfProjectBySectors = statistics
  },
  setNumberOfProjectByRegions (state, statistics) {
    state.numberOfProjectByRegions = statistics
  },
}

// State actions
const actions = {
  // Fetch statistics in sectors
  async fetchNumberOfProjectBySectors ({ commit }) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const statistics = await axios.get('/stats-project-by-sectors')
      commit('setNumberOfProjectBySectors', statistics.data)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching statistic: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  // Fetch statistics number of project by region
  async fetchNumberOfProjectByRegions ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const statistics = await axios.get('/stats-project-by-regions')
      commit('setNumberOfProjectByRegions', statistics.data)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching statistic: ' + error.message, { root: true })
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
