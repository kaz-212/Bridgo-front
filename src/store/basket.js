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
    ADD_TO_BASKET(state, updateItem) {
      /* eslint-disable */
      for (const item of state.basket) {
        if (
          item.particular._id === updateItem.particular._id &&
          item.info._id === updateItem.info._id
        ) {
          return (item.qty += 1)
        }
      }
      return state.basket.push(updateItem)
      // ======== CHECK IF PRODUCT WITH SAME SIZE IS ALREADY IN ========
    },
    UPDATE_QUANTITY(state, payload) {
      for (const item of state.basket) {
        if (
          item.particular._id === payload.item.particular._id &&
          item.info._id === payload.item.info._id
        ) {
          console.log('YUUUP')
          item.qty = payload.qty
        }
      }
    },
    REMOVE_ITEM(state, item) {
      for (let i = 0; i < state.basket.length; i++) {
        if (state.basket[i].particular._id == item.particular._id) {
          state.basket.splice(i, 1)
        }
      }
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
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload)
    },
    removeItem({ commit }, item) {
      commit('REMOVE_ITEM', item)
    }
  },

  getters: {}
}
