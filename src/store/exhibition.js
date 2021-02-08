import axios from 'axios'

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
    getExhibitionById: state => id => state.exhibitions.find(exhibition => exhibition._id === id)
  }
}
