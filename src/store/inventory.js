import axios from 'axios'
// import router from '../router'

export default {
  namespaced: true,
  state: {
    products: []
  },

  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products
    }
  },

  actions: {
    // async getProducts({ commit }) {
    //   try {
    //     const res = await axios.get('products')
    //     commit('GET_PRODUCTS', res.data)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },

    async submitProduct(state, fd) {
      try {
        const { data } = await axios.post('inventory', fd)
        console.log(data)
        // commit('ADD_NEW_PRODUCT', data)
      } catch (e) {
        console.log(e)
      }
    }
  },

  getters: {
    /* eslint-disable no-underscore-dangle */
  }
}
