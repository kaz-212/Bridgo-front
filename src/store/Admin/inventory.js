import axios from 'axios'
import router from '../../router'

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
        if (state.products[i]._id === product._id) {
          state.products[i] = product
          console.log(product)
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
    },

    EDIT_PARTICULAR(state, particular) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i]._id === particular.product) {
          for (let j = 0; j < state.products[i].particulars; j++) {
            if (state.products[i].particulars[j]._id == particular._id) {
              state.products[i].particulars[j] = particular
              console.log(particular)
            }
          }
        }
      }
    }
  },

  actions: {
    async getProducts({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.get('admin/inventory')
          commit('GET_PRODUCTS', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async submitProduct({ commit }, fd) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post('admin/inventory', fd)
          // console.log(data)
          commit('SUBMIT_PRODUCT', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async editProduct({ commit }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.put(`admin/inventory/product/${payload.id}`, payload.fd)
          commit('EDIT_PRODUCT', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async editParticular({ commit }, particular) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.put(
            `admin/inventory/particular/${particular._id}`,
            particular
          )
          commit('EDIT_PARTICULAR', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async deleteProduct({ commit }, id) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.delete(`admin/inventory/product/${id}`)
          commit('DELETE_PRODUCT', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async deleteParticular({ commit }, id) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.delete(`admin/inventory/particular/${id}`)
          commit('EDIT_PRODUCT', data)
          resolve('success')
        } catch (e) {
          reject(e)
        }
      })
    },

    async addParticular({ commit }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(`admin/inventory/particular`, payload)
          commit('EDIT_PRODUCT', data)
          resolve('success')
        } catch (err) {
          reject(e)
        }
      })
    },

    async updateInventory({ dispatch }, intent) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(`payment-intent/process`, intent, {
            withCredentials: true
          })
          dispatch('getProducts')
          resolve('success')
        } catch (err) {
          reject(e)
        }
      })
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
