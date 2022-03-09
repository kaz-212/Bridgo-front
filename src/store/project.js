import axios from 'axios'
// import router from '../router'
// TODO for all non admin routes (except basket) change with credentials to false
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
    /* eslint-disable no-underscore-dangle  */
    /* eslint-disable no-restricted-syntax */
    getProjById: state => id => {
      for (const theme of state.themes) {
        const found = theme.projects.find(project => project._id === id)
        if (found) {
          return found
        }
      }
      return null
    }
  }
}
