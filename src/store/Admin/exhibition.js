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
      try {
        const res = await axios.get('admin/exhibitions')
        commit('GET_EXHIBITIONS', res.data)
      } catch (e) {
        console.log(e)
      }
    },
    async deleteExhibition({ commit }, id) {
      const { data } = await axios.delete(`admin/exhibitions/${id}`)
      commit('DELETE_EXHIBITION', data)
    },

    async submitExhibition({ commit }, fd) {
      try {
        const { data } = await axios.post('admin/exhibitions', fd)
        commit('ADD_NEW_EXHIBITION', data)
      } catch (e) {
        console.log(e)
      }
    },

    async editExhibition({ commit }, payload) {
      try {
        const { data } = await axios.put(`admin/exhibitions/${payload.id}`, payload.fd)
        commit('EDIT_EXHIBITION', data)
      } catch (e) {
        console.log(e)
      }
    },

    async updateOrder({ commit }, exhibitions) {
      try {
        const { data } = await axios.patch('admin/exhibitions/order', exhibitions)
        commit('GET_EXHIBITIONS', data)
      } catch (err) {
        console.log(err)
      }
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
        console.log('hi')
        return state.exhibitions[0].index + 1
      }
      console.log('hello')
      return 0
    }
  }
}
