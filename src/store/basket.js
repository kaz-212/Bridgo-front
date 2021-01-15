// import axios from 'axios'
// import router from '../router'

export default {
  namespaced: true,
  state: {
    basket: []
  },

  mutations: {
    SET_BASKET(state, basket) {
      state.basket = basket
    },
    ADD_TO_BASKET(state, item) {
      state.basket.push(item)
    }
  },

  actions: {
    initialiseBasket({ commit }) {
      if (localStorage.getItem('basket')) {
        const storage = JSON.parse(localStorage.getItem('basket'))
        commit('SET_BASKET', storage.basket)
      }
    },
    addToBasket({ commit }, item) {
      try {
        commit('ADD_TO_BASKET', item)
      } catch (err) {
        console.log(err)
      }
    }
  },

  getters: {}
}
