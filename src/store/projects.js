import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  state: {
    projects: []
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },
    deleteProject(state, project) {
      /* eslint-disable */
      router.push({ name: 'AdminProjects' })
      for (let i = 0; i < state.projects.length; i++) {
        if (state.projects[i]._id === project._id) {
          state.projects.splice(i, 1)
        }
      }
    }
  },
  actions: {
    async getProjects({ commit }) {
      const res = await axios.get('projects')
      commit('setProjects', res.data)
    },

    async deleteProject({ commit }, id) {
      const res = await axios.delete(`projects/${id}`)
      commit('deleteProject', res.data)
    },

    async submitPiece({ dispatch }, payload) {
      const fd = new FormData()
      fd.append('img', payload.piece.img)
      fd.append('piece', JSON.stringify(payload.piece))
      const res = await axios.patch(`projects/${payload.id}`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      router.push({ name: 'ShowProject', params: { id: payload.id } })
      dispatch('getProjects')
    }
  },
  getters: {
    /* eslint-disable no-underscore-dangle */
    getProjById: state => id => state.projects.find(todo => todo._id === id),

    getPortfolioPieces: state => {
      const portProjects = state.projects.filter(project => project.onShow)
      return portProjects.sort((a, b) => a.index - b.index)
    }
  }
}
