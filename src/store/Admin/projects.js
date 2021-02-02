import axios from 'axios'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    themes: []
  },

  mutations: {
    SET_THEMES(state, themes) {
      state.themes = themes
    },

    ADD_THEME(state, theme) {
      state.themes.push(theme)
      router.push({ name: 'AdminProjects' })
    }
  },

  actions: {
    async getThemes({ commit }) {
      try {
        const { data } = await axios.get('admin/projects/theme')
        commit('SET_THEMES', data)
      } catch (err) {
        console.log(err)
      }
    },

    async submitTheme({ commit }, theme) {
      try {
        const { data } = await axios.post('admin/projects/theme', theme)
        commit('ADD_THEME', data)
      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: {}
}
