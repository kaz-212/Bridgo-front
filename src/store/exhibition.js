import axios from 'axios'
// import router from '../router'

export default {
  namespaced: true,
  state: {
    exhibitions: []
  },
  mutations: {
    GET_EXHIBITIONS(state, exhibitions) {
      state.exhibitions = exhibitions
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
