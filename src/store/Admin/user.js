import axios from 'axios'
// import router from '@/router'

export default {
  namespaced: true,
  state: {
    loggedIn: false
  },

  mutations: {
    LOGIN(state) {
      state.loggedIn = true
      localStorage.setItem('loggedIn', 'true')
    },
    LOGOUT(state) {
      state.login = false
      localStorage.setItem('loggedIn', 'false')
    }
  },

  actions: {
    async login({ commit }, user) {
      /* eslint-disable */
      return new Promise(async (resolve, reject) => {
        try {
          await axios.post('login', user, { withCredentials: true })
          commit('LOGIN')
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },
    async isLoggedIn({ commit, state }) {
      if (localStorage.getItem('loggedIn') === 'true') {
        if (state.loggedIn === true) {
          return new Promise(async (resolve, reject) => {
            try {
              await axios.get('login')
              commit('LOGIN')
              resolve('success')
            } catch (e) {
              commit('LOGOUT')
              reject(e)
            }
          })
        }
      }
      commit('LOGOUT')
      return false
    },
    async loggedIn() {
      return new Promise(async (resolve, reject) => {
        try {
          await axios.get('login', { withCredentials: true })
          // commit('LOGIN')
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    }
  }
}
