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
    UPDATE_ORDER(state, order) {
      /* eslint-disable */
      for (let i = 0; i < state.orders.length; i++) {
        if (state.orders[i]._id == order._id) {
          state.orders[i] = order
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
    async toggleDispatched({ commit }, id) {
      try {
        const { data } = await axios.put(`admin/orders/dispatch/${id}`)
        console.log(data)
        commit('UPDATE_ORDER', data)
      } catch (err) {
        console.log(err)
      }
    },
    async editDetails({ commit }, payload) {
      try {
        const { data } = await axios.put(`admin/orders/details/${payload.id}`, {
          details: payload.details
        })
        commit('UPDATE_ORDER', data)
      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: {
    getOrders: state => state.orders.filter(order => order.dispatched === false),
    getPastOrders: state => state.orders.filter(order => order.dispatched),
    getOrderById: state => id => state.orders.find(order => order._id === id)
  }
}
