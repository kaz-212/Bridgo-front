import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  state: {
    products: []
  },

  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products
    },
    SUBMIT_PRODUCT(state, product) {
      state.products.push(product)
      router.push({ name: 'AllProducts' })
    }
  },

  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get('inventory')
        console.log(data)
        commit('GET_PRODUCTS', data)
      } catch (e) {
        console.log(e)
      }
    },

    async submitProduct({ commit }, fd) {
      try {
        const { data } = await axios.post('inventory', fd)
        // console.log(data)
        commit('SUBMIT_PRODUCT', data)
      } catch (e) {
        console.log(e)
      }
    }
  },

  getters: {
    /* eslint-disable no-underscore-dangle */
  }
}
