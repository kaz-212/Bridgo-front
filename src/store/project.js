import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  state: {
    projects: []
  },
  mutations: {
    GET_PROJECTS(state, projects) {
      state.projects = projects
    },
    DELETE_PROJECT(state, project) {
      /* eslint-disable */
      router.push({ name: 'AdminProjects' })
      for (let i = 0; i < state.projects.length; i++) {
        if (state.projects[i]._id === project._id) {
          state.projects.splice(i, 1)
        }
      }
    },

    SUBMIT_PROJECT(state, project) {
      state.projects.push(project)
      router.push({ name: 'AdminProjects' })
    },

    SUBMIT_PIECE(state, payload) {
      for (project in state.projects) {
        if (project._id == payload.id) {
          project.pieces.push(payload.piece)
        }
      }
      router.push({ name: 'AdminProjects' })
    }
  },

  actions: {
    async getProjects({ commit }) {
      try {
        const res = await axios.get('projects')
        commit('GET_PROJECTS', res.data)
      } catch (e) {
        console.log('ERROR', e)
      }
    },

    async deleteProject({ commit }, id) {
      const res = await axios.delete(`projects/${id}`)
      commit('DELETE_PROJECT', res.data)
    },

    async submitProject({ commit }, fd) {
      try {
        const res = await axios.post('projects', fd, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        commit('SUBMIT_PROJECT', res.data)
      } catch (err) {
        console.log('Error!', err)
      }
    },

    async submitPiece({ commit }, payload) {
      try {
        const res = await axios.patch(`projects/${payload.id}`, payload.fd, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        router.push({ name: 'ShowProject', params: { id: payload.id } })
        commit('SUBMIT_PIECE', { piece: res.data, id: payload.id })
      } catch (e) {
        console.log('ERROR!!', e)
      }
    },

    async editPiece({ commit }, payload) {
      axios
        .put(
          `projects/${this.id}`,
          { project: this.project, filenames: this.deleteFilenames },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(res => {
          console.log(res)
          this.$router.push({ name: 'AdminProjects' })
        })
        .catch(e => {
          console.log('ERROR!', e)
        })
    }
  },
  getters: {
    /* eslint-disable no-underscore-dangle */
    getProjById: state => id => state.projects.find(project => project._id === id),

    getPortfolioPieces: state => {
      const portProjects = state.projects.filter(project => project.onShow)
      return portProjects.sort((a, b) => a.index - b.index)
    }
  }
}
