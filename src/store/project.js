import axios from 'axios'
// import router from '../router'

export default {
  namespaced: true,
  state: {
    themes: []
  },
  mutations: {
    SET_THEMES(state, themes) {
      state.themes = themes
    }
  },

  actions: {
    async getThemes({ commit }) {
      try {
        const { data } = await axios.get('projects')
        commit('SET_THEMES', data)
      } catch (err) {
        console.log('ERROR', err)
      }
    }
  },
  getters: {
    /* eslint-disable no-underscore-dangle */
  }
}
