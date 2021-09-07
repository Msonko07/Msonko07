// Dependencies
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'

// Initial state
const state = {
  projects: [],
  totalItems: null,
}

// State getters
const getters = {
  project: state => id => state.projects.find(item => item.id === id),
}

// State mutation
const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  },
  setTotalItems (state, totalItems) {
    if (typeof (totalItems) === 'object' && totalItems instanceof Array) {
      state.totalItems = totalItems[0].total_projects
    } else {
      state.totalItems = totalItems
    }
  },
  updateProjectAnalysis (state, analysis) {
    const projectIndex = state.projects.findIndex(item => item.id === analysis.project)
    const project = state.projects.find(item => item.id === analysis.project)
    project.analysis = analysis
    state.projects.splice(projectIndex, 1, project)
  },
}

// State actions
const actions = {
  async fetchProjects ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const projects = await axios.get(`/projects/${payload.page}/${payload.item}`)
      commit('setProjects', projects.data.projects)
      commit('setTotalItems', projects.data.totalItems)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching project: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  async searchProjects ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const projects = await axios.get(`/projects/${payload.search}/${payload.page}/${payload.item}/search-projects`)
      commit('setProjects', projects.data.projects)
      commit('setTotalItems', projects.data.totalItems)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching project: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  async fetchItem ({ state, commit }, { resource }) {
    return await axios.get(`/${resource.toLowerCase()}`).then(item => {
      commit('setItem', { resource, item })
    })
  },

  fetchItems ({ dispatch }, { resources }) {
    return Promise.all(resources.map(resource => dispatch('fetchItem', { resource: resource })))
  },

  // Fetch projects in sectors
  async fetchProjectBySectors ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const projects = await axios.get(`/projects/${payload.sector}/${payload.page}/${payload.item}/sectors`)
      commit('setProjects', projects.data.projects)
      commit('setTotalItems', projects.data.totalItems)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching project: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects in committee
  async fetchProjectInCommittee ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const projects = await axios.get(`/projects/${payload}/committee`)
      commit('setProjects', projects.data.projects)
      commit('setTotalItems', projects.data.totalItems)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching project: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // fetch projects for committee
  async fetchProjectForCommittee ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const projects = await axios.get(`/projects/${payload.sector}/for-committee`)
      commit('setProjects', projects.data.projects)
      commit('setTotalItems', projects.data.totalItems)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching project: ' + error.message, { root: true })
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
