import axios from 'axios'
import router from '../../router'

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
      state.exhibitions.unshift(exhibition)
      router.push({ name: 'AllExhibitions' })
    },
    EDIT_EXHIBITION(state, exhibition) {
      for (let i = 0; i < state.exhibitions.length; i++) {
        if (state.exhibitions[i]._id === exhibition._id) {
          state.exhibitions[i] = exhibition
        }
      }
      router.push({ name: 'AllExhibitions' })
    }
  },

  actions: {
    async getExhibitions({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get('admin/exhibitions')
          commit('GET_EXHIBITIONS', res.data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },
    async deleteExhibition({ commit }, id) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.delete(`admin/exhibitions/${id}`)
          commit('DELETE_EXHIBITION', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async submitExhibition({ commit }, fd) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.post('admin/exhibitions', fd)
          commit('ADD_NEW_EXHIBITION', res.data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async editExhibition({ commit }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.put(`admin/exhibitions/${payload.id}`, payload.fd)
          commit('EDIT_EXHIBITION', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async updateOrder({ commit }, exhibitions) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.patch('admin/exhibitions/order', exhibitions)
          commit('GET_EXHIBITIONS', data)
          resolve('success')
        } catch (err) {
          reject(e)
        }
      })
    }
  },

  getters: {
    /* eslint-disable no-underscore-dangle */
    getExhibitionById: state => id => state.exhibitions.find(exhibition => exhibition._id === id),
    getExhibitions: state => {
      console.log('e', state.exhibitions)
      return state.exhibitions
    },
    getNewIndex: state => {
      if (state.exhibitions.length > 0) {
        return state.exhibitions[0].index + 1
      }
      return 0
    }
  }
}
