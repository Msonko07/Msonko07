// Dependencies
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'

// Initial state
const state = {
  info: null,
  loading: false,
  error: null,
  countries: null,
  regions: null,
  departments: null,
  towns: null,
  genders: null,
  legalForms: null,
  qualificationLevels: null,
  maritalStatuses: null,
  professionalSituations: null,
  projectStatuses: null,
  sectors: null,
  subsectors: null,
  natures: null,
  publicFunding: null,
  banks: null,
}

// State getters
const getters = {
  getInfo: state => {
    return state.info
  },
  getLoading: state => {
    return state.loading
  },
  getError: state => {
    return state.error
  },
  gender: state => id => state.genders.find(item => item.id === id),
  maritalStatus: state => id => state.maritalStatuses.find(item => item.id === id),
  country: state => id => state.countries.find(item => item.id === id),
  region: state => id => state.regions.find(item => item.id === id),
  department: state => id => state.departments.find(item => item.id === id),
  town: state => id => state.towns.find(item => item.id === id),
  departmentsInRegion: state => id => state.departments.filter(item => item.region === id),
  townsInDepartment: state => id => state.towns.filter(item => item.department === id),
  subsectorsInSectors: state => ids => state.subsectors.filter(item => ids.includes(item.sector)),
  subsectorsInSector: state => id => state.subsectors.filter(item => item.sector === id),
}

// State mutation
const mutations = {
  setInfo (state, info) {
    state.info = info
  },
  clearInfo (state) {
    state.info = null
  },
  setLoading (state, loading) {
    state.loading = loading
  },
  setError (state, error) {
    state.error = error
  },
  clearError (state) {
    state.error = null
  },
  setItem (state, { resource, item }) {
    state[resource] = item.data
  },
}

// State actions
const actions = {
  async fetchItem ({ state, commit }, { resource }) {
    return await axios.get(`/${resource.toLowerCase()}`).then(item => {
      commit('setItem', { resource, item })
    })
  },

  fetchItems ({ dispatch }, { resources }) {
    return Promise.all(resources.map(resource => dispatch('fetchItem', { resource: resource })))
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
