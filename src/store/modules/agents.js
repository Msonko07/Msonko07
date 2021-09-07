// Dependencies
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'

// Initial state
const state = {
  agents: [],
  agentsInSector: [],
  agent: null,
}

// State getters
const getters = {
  agent: state => id => state.agents.find(item => item.id === id),
  agentInSector: state => id => state.agentsInSector.find(item => item.id === id),
}

// State mutation
const mutations = {
  setAgents (state, agents) {
    state.agents = agents.data
  },
  setAgent (state, agent) {
    state.agent = agent.data
  },
  setAgentBySector (state, agents) {
    state.agentsInSector = agents.data
  },
}

// State actions
const actions = {
  async fetchAgents ({ commit }) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const agents = await axios.get('/agents')
      commit('setAgents', agents)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching agent: ' + error.message, { root: true })
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

  // Fetch agents in sectors
  async fetchAgentBySectors ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const agents = await axios.get(`/agents/${payload}/sectors`)
      commit('setAgentBySector', agents)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching agent: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch agents by ID
  async fetchAgent ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const agent = await axios.get(`/agents/${payload}/user`)
      commit('setAgent', agent)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching agent: ' + error.message, { root: true })
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
