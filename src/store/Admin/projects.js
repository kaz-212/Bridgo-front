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
    },

    EDIT_THEME(state, theme) {
      /* eslint-disable */
      for (let i = 0; i < state.themes.length; i++) {
        if (state.themes[i]._id === theme._id) {
          state.themes[i] = theme
        }
      }
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
    },

    async submitProject({ commit }, fd) {
      try {
        const { data } = await axios.post('admin/projects/project', fd)
        commit('EDIT_THEME', data)
      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: {}
}
