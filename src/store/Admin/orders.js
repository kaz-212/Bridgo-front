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
    },
    DISPATCHED(state, order) {
      /* eslint-disable */
      for (let i = 0; i < state.orders.length; i++) {
        console.log(state.orders[i], order)
        if (state.orders[i]._id == order._id) {
          state.orders[i] = order
          console.log('POP')
        }
      }
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
    },
    async dispatched({ commit }, id) {
      try {
        const { data } = await axios.put(`admin/orders/dispatch/${id}`)
        console.log(data)
        commit('DISPATCHED', data)
      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: {
    getOrders: state => state.orders.filter(order => order.dispatched === false),
    getPastOrders: state => state.orders.filter(order => order.dispatched)
  }
}
