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
    },

    DELETE_PROJECT(state, project) {
      for (let i = 0; i < state.themes.length; i++) {
        if (state.themes[i]._id === project.theme) {
          for (let j = 0; j < state.themes[i].projects.length; j++) {
            if (state.themes[i].projects[j]._id === project._id) {
              state.themes[i].projects.splice(j, 1)
              router.push({ name: 'AdminProjects' })
              return
            }
          }
        }
      }
    }
  },

  actions: {
    async getThemes({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.get('admin/projects/theme')
          commit('SET_THEMES', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async submitTheme({ commit }, theme) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post('admin/projects/theme', theme)
          commit('ADD_THEME', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async submitProject({ commit }, fd) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post('admin/projects/project', fd)
          commit('EDIT_THEME', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async editProject({ commit }, fd) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.put('admin/projects/project', fd)
          // FIXME doesnt refresh the draggable components. need to manually refresh the page
          for (const theme of data) {
            commit('EDIT_THEME', theme)
          }
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async deleteProject({ commit }, id) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.delete(`admin/projects/${id}`)
          commit('DELETE_PROJECT', data)
          resolve('success')
        } catch (e) {
          console.log(e)
          reject(e)
        }
      })
    },

    async updateOrder({ commit }, projects) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.patch('admin/projects/project', projects)
          commit('EDIT_THEME', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    }
  },

  getters: {
    getProjById: state => id => {
      for (const theme of state.themes) {
        const found = theme.projects.find(project => project._id === id)
        if (found) {
          return found
        }
      }
      return null
    },
    getThemeById: state => id => {
      return state.themes.find(theme => theme._id === id)
    }
  }
}
