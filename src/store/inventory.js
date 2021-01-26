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
    },

    EDIT_PRODUCT(state, product) {
      /* eslint-disable */
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].product._id === product._id) {
          state.products[i].product = product
        }
      }
    },

    DELETE_PRODUCT(state, product) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i]._id === product) {
          state.products.splice(i, 1)
          break
        }
      }
    }
  },

  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get('admin/inventory')
        commit('GET_PRODUCTS', data)
      } catch (e) {
        console.log(e)
      }
    },

    async submitProduct({ commit }, fd) {
      try {
        const { data } = await axios.post('admin/inventory', fd)
        // console.log(data)
        commit('SUBMIT_PRODUCT', data)
      } catch (e) {
        console.log(e)
      }
    },
    async editProduct({ commit }, payload) {
      try {
        const { data } = await axios.put(`admin/inventory/product/${payload.id}`, payload.fd)
        return commit('EDIT_PRODUCT', data)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteProduct({ commit }, id) {
      try {
        const { data } = await axios.delete(`admin/inventory/${id}`)
        commit('DELETE_PRODUCT', data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: {
    /* eslint-disable no-underscore-dangle */
    getProductById: state => id => {
      const product = state.products.find(item => item._id === id)
      // // below to stop error cannot get size_type_qty of undefined
      // if (product) {
      //   product.size_price_qty.sort((a, b) => a.index - b.index)
      // }
      return product
    },
    getPieces: state => state.products.filter(item => item.type === 'piece'),
    getPrints: state => state.products.filter(item => item.type === 'print'),
    getOther: state => state.products.filter(item => item.type === 'other')
  }
}
