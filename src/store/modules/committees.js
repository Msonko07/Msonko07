// Dependencies
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'

// Initial state
const state = {
  committees: [],
  committee_results: [],
  committee: null,
}

// State getters
const getters = {
  committee: state => id => state.committees.find(item => item.id === id),
}

// State mutation
const mutations = {
  setCommittees (state, committees) {
    state.committees = committees
  },
  setCommitteeResults (state, committeeResults) {
    state.committee_results = committeeResults
  },
  addCommittee (state, committee) {
    state.committees.push(committee)
  },
  addCommitteeResult (state, committeeResult) {
    state.committee_results.push(committeeResult)
  },
  setCommittee (state, committee) {
    state.committee = committee
  },
  updateCommittee (state, committee) {
    const index = state.committees.indexOf(committee)
    state.committees.splice(index, 1, committee)
  },
  updateCommitteeResult (state, committeeResult) {
    const index = state.committee_results.indexOf(committeeResult)
    state.committee_results.splice(index, 1, committeeResult)
  },
  deleteCommittee (state, committee) {
    const index = state.committees.indexOf(committee)
    state.committees.splice(index, 1)
  },
}

// State actions
const actions = {
  async fetchCommittees ({ commit }) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committees = await axios.get('/committees')
      commit('setCommittees', committees.data)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching committee: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  async fetchCommittee ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committee = await axios.get(`/committees/${payload}`)
      commit('setCommittee', committee.data)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching committee: ' + error.message, { root: true })
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

  async saveCommittee ({ commit, dispatch }, payload) {
    if (payload.editedIndex === -1) {
      await dispatch('addCommittee', payload.committee)
    } else {
      await dispatch('updateCommittee', payload.committee)
    }
  },

  async addCommittee ({ state, commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committee = await axios.post('/committees', payload)
      commit('addCommittee', committee.data)
    } catch (error) {
      commit('utilities/setError', 'Error while saving committee: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  async updateCommittee ({ state, commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committee = await axios.put(`/committees/${payload.id}/update`, payload)
      commit('updateCommittee', committee.data)
    } catch (error) {
      commit('utilities/setError', 'Error while updating committee: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  async addParticipants ({ state, commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committee = await axios.put(`/committees/${payload.id}/add-participants`, payload.participants)
      commit('updateCommittee', committee.data)
    } catch (error) {
      commit('utilities/setError', 'Error while adding participants to committee: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  async deleteCommittee ({ state, commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committee = await axios.delete(`/committees/${payload}`)
      commit('deleteCommittee', committee.data)
    } catch (error) {
      commit('utilities/setError', 'Error while deleting committee: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Committee Result section
  async fetchCommitteeResults ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committeeResults = await axios.get(`/committee-results/${payload}/committee`)
      commit('setCommitteeResults', committeeResults.data)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching committee: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  async saveCommitteeResult ({ commit, dispatch }, payload) {
    if (payload.editedIndex === -1) {
      await dispatch('addCommitteeResult', payload.result)
    } else {
      await dispatch('updateCommitteeResult', payload.result)
    }
  },
  async addCommitteeResult ({ state, commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committee = await axios.post('/committee-results', payload)
      commit('addCommitteeResult', committee.data)
    } catch (error) {
      commit('utilities/setError', 'Error while saving committee: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  async updateCommitteeResult ({ state, commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const committee = await axios.put(`/committee-results/${payload.id}/update`, payload)
      commit('updateCommitteeResult', committee.data)
    } catch (error) {
      commit('utilities/setError', 'Error while updating committee: ' + error.message, { root: true })
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
