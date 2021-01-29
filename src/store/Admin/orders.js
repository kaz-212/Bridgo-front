import axios from 'axios'
// import router from '../router'

export default {
  namespaced: true,
  state: {
    orders: []
  },

  mutations: {
    GET_ORDERS(state, orders) {
      state.orders = orders
      console.log(orders)
    }
  },

  actions: {
    async getOrders({ commit }) {
      try {
        const { data } = await axios.get('admin/orders')
        commit('GET_ORDERS', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
