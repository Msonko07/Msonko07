// Dependencies
import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.3.133:5001/api/v1'

// Initial state
const state = {
  analysis: null,
  analyses: [],
  comment: null,
  totalItems: null,
}

// State getters
const getters = {
  analysis: state => id => state.analyses.find(item => item.project.id === id),
}

// State mutation
const mutations = {
  setAnalysis (state, analysis) {
    state.analysis = analysis
  },
  setAnalyses (state, analyses) {
    state.analyses = analyses
  },
  setTotalItems (state, totalItems) {
    state.totalItems = totalItems
  },
  setComment (state, comment) {
    state.comment = comment
  },
}

// State actions
const actions = {
  async fetchAnalysis ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.get(`/analysis-results/${payload}/by-project`)
      commit('setAnalysis', analysis.data)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  async fetchAnalyses ({ commit }) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get('/analysis-results/')
      commit('setAnalyses', analyses.data)
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects for risk review
  async fetchAnalysisForRiskReview ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.page}/${payload.item}/for-risk-review`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects by risk manager
  async fetchAnalysisByRiskManager ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.riskManager}/${payload.page}/${payload.item}/risk-manager`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects by review owner
  async fetchAnalysisByRiskOwner ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.riskOwner}/${payload.page}/${payload.item}/risk-owner`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects to be reviewed
  async fetchAnalysisToBeReviewed ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.page}/${payload.item}/to-be-reviewed`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects by portfolio owner
  async fetchAnalysisByPortfolioOwner ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.sectorOwner}/${payload.page}/${payload.item}/portfolio-owner`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects by review owner
  async fetchAnalysisByReviewOwner ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.sectorOwner}/${payload.page}/${payload.item}/review-owner`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects by sector owner
  async fetchAnalysisBySectorOwner ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.sectorOwner}/${payload.page}/${payload.item}/sector-owner`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Fetch projects by analysis owner
  async fetchAnalysisByAnalysisOwner ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analyses = await axios.get(`/projects/${payload.analysisOwner}/${payload.page}/${payload.item}/analysis-owner`)
      commit('projects/setProjects', analyses.data.projects, { root: true })
      commit('projects/setTotalItems', analyses.data.totalItems, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while fetching analyses: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Affect project for analysis
  async affectProject ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.post('/analysis-results', payload)
      await dispatch('addAnalysisComment', {
        analysis: analysis.data.id,
        author: payload.author,
        text: payload.text,
      })
      commit('projects/updateProjectAnalysis', analysis.data, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // assign review to portfolio owner
  async assignReview ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.put(`/analysis-results/${payload.project}/assign-review`, payload)
      await dispatch('addAnalysisComment', {
        analysis: analysis.data.id,
        author: payload.author,
        text: payload.text,
      })
      commit('projects/updateProjectAnalysis', analysis.data, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // assign review to risk manager
  async assignToRiskManager ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.put(`/analysis-results/${payload.project}/assign-to-risk-manager`, payload)
      await dispatch('addAnalysisComment', {
        analysis: analysis.data.id,
        author: payload.author,
        text: payload.text,
      })
      commit('projects/updateProjectAnalysis', analysis.data, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },
  // Assign project to agent for analysis purpose
  async assignProjectToAgent ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.put(`/analysis-results/${payload.analysis}/${payload.agent}/assign`)
      await dispatch('addAnalysisComment', payload)
      commit('projects/updateProjectAnalysis', analysis.data, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Assign project to agent for analysis purpose
  async assignToReview ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.put(`/analysis-results/${payload.analysis}/${payload.agent}/assign-to-review`)
      // window.console.log({ analysis: analysis, data: analysis.data })
      await dispatch('addAnalysisComment', payload)
      commit('projects/updateProjectAnalysis', analysis.data, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Assign project to agent for analysis purpose
  async assignToRiskAnalyst ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.put(`/analysis-results/${payload.analysis}/${payload.agent}/assign-to-risk-analyst`)
      // window.console.log({ analysis: analysis, data: analysis.data })
      await dispatch('addAnalysisComment', payload)
      commit('projects/updateProjectAnalysis', analysis.data, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Save analysis result
  async saveAnalysis ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.put(`/analysis-results/${payload.id}/add-analysis`, payload)
      commit('setAnalysis', analysis.data)
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Approved analysis result
  async approveAnalysisResult ({ commit, dispatch }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const analysis = await axios.put(`/analysis-results/${payload.analysis}/approve-analysis`, payload)
      await dispatch('addAnalysisComment', payload)
      commit('projects/updateProjectAnalysis', analysis.data, { root: true })
    } catch (error) {
      commit('utilities/setError', 'Error while approving analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Analysis comment section
  // Fetch comment
  async fetchAnalysisComment ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const comment = await axios.get(`/analysis-comments/${payload}/by-analysis`)
      commit('setComment', comment.data)
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Save new analysis comment
  async addAnalysisComment ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const comment = await axios.post('/analysis-comments', payload)
      commit('setComment', comment.data)
    } catch (error) {
      commit('utilities/setError', 'Error while adding analysis comment: ' + error.message, { root: true })
    } finally {
      commit('utilities/setLoading', false, { root: true })
    }
  },

  // Update existing analysis comment
  async updateAnalysisComment ({ commit }, payload) {
    try {
      commit('utilities/clearError', null, { root: true })
      commit('utilities/setLoading', true, { root: true })
      const comment = await axios.put(`/analysis-comments/${payload.id}/update`, payload)
      commit('setComment', comment.data)
    } catch (error) {
      commit('utilities/setError', 'Error while updating analysis comment: ' + error.message, { root: true })
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
