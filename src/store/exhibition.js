import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  state: {
    exhibitions: []
  },

  mutations: {
    GET_EXHIBITIONS(state, exhibitions) {
      state.exhibitions = exhibitions
    },

    DELETE_EXHIBITION(state, exhibition) {
      /* eslint-disable */
      router.push({ name: 'AllExhibitions' })
      for (let i = 0; i < state.exhibitions.length; i++) {
        if (state.exhibitions[i]._id === exhibition._id) {
          state.exhibitions.splice(i, 1)
        }
      }
    },
    ADD_NEW_EXHIBITION(state, exhibition) {
      state.exhibitions.push(exhibition)
      router.push({ name: 'AllExhibitions' })
    }
  },

  actions: {
    async getExhibitions({ commit }) {
      try {
        const res = await axios.get('exhibitions')
        commit('GET_EXHIBITIONS', res.data)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteExhibition({ commit }, id) {
      const res = await axios.delete(`exhibitions/${id}`)
      commit('DELETE_EXHIBITION', res.data)
    },

    async submitExhibition({ commit }, fd) {
      try {
        const res = await axios.post('exhibitions', fd)
        commit('ADD_NEW_EXHIBITION', res.data)
      } catch (e) {
        console.log(e)
      }
    },

    async editExhibition({ commit }, payload) {
      try {
        const res = await axios.put(`exhibitions/${payload.id}`, payload.fd)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  },

  getters: {
    /* eslint-disable no-underscore-dangle */
    getExhibitionById: state => id => state.exhibitions.find(exhibition => exhibition._id === id),

    getPortfolioPieces: state => {
      const portProjects = state.projects.filter(project => project.onShow)
      return portProjects.sort((a, b) => a.index - b.index)
    }
  }
}
