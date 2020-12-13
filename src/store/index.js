import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    projects: []
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    }
  },
  actions: {
    async getProjects({ commit }) {
      const res = await axios.get('projects')
      commit('setProjects', res.data)
    }
  },
  getters: {
    /* eslint-disable no-underscore-dangle */
    getProjById: state => id => state.projects.find(todo => todo._id === id)
  },
  modules: {}
})
