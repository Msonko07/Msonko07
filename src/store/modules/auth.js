// Dependencies
import axios from 'axios'
import router from '../../router'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'
// Initial state
const state = {
  authToken: localStorage.getItem('authToken') || null,
  authUser: localStorage.getItem('username') || null,
  warningTimer: null,
  logoutTimer: new Date(parseInt(localStorage.getItem('expiresIn')) * 1000) - Date.now() || null,
}

// State getters
const getters = {
  authToken: state => {
    return state.authToken
  },
}

// State mutation
const mutations = {
  setAuthToken (state, token) {
    state.authToken = token
  },
  clearAuthToken (state) {
    state.authToken = null
  },
  setAuthUser (state, username) {
    state.authUser = username
  },
  setLogoutTimer (state, time) {
    state.logoutTimer = time
  },
}

// State actions
const actions = {
  async register ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      await axios.post('/users', payload)
    } catch (err) {
      commit('utilities/setError', 'Informations incorrectes!', { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  async authenticate ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const result = await axios({
        method: 'post',
        url: '/auth/token',
        auth: {
          username: payload.email,
          password: payload.password,
        },
      })
      const base64Url = result.data.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      const decodedToken = JSON.parse(window.atob(base64))
      commit('setAuthToken', result.data)
      axios.defaults.headers.common.Authorization = 'Bearer ' + result.data
      const username = decodedToken.email.split('@')[0]
      commit('setAuthUser', username)
      commit('setLogoutTimer', new Date(decodedToken.exp * 1000) - Date.now())
      localStorage.setItem('authToken', result.data)
      localStorage.setItem('expiresIn', decodedToken.exp)
      localStorage.setItem('username', username)
      const user = decodedToken._id
      localStorage.setItem('user', user)
      dispatch('agents/fetchAgent', user, { root: true })
      // window.console.log(result)
      // window.console.log(decodedToken)
      dispatch('autoLogout')
      await router.push('/')
    } catch (err) {
      commit('utilities/setError', 'Email ou mot de passe invalide!', { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  async checkAuth ({ commit, dispatch }, payload) {
    const convertedTime = new Date(parseInt(payload.expiresIn) * 1000)
    window.console.log({ time: convertedTime })
    if (convertedTime > Date.now()) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + payload.authToken
      await dispatch('agents/fetchAgent', localStorage.getItem('user'), { root: true })
      dispatch('autoLogout')
    } else {
      dispatch('logout')
    }
  },
  async logout ({ commit }) {
    commit('clearAuthToken')
    localStorage.removeItem('authToken')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('username')
    localStorage.setItem('user', 'user')
    await router.push('/pages/login')
  },
  autoLogout ({ dispatch, state }) {
    setTimeout(() => {
      dispatch('logout')
    }, state.logoutTimer)
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
