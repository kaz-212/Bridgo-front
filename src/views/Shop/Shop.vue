<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  async created() {
    try {
      await this.$store.dispatch('inventory/getProducts')
    } catch (e) {
      console.log(e.response.data)
    }
    /* eslint-disable */

    // store.subscribe returns an unsubscribe function to stop listening to mutations
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      // if there is a mutation to the state e.g. basket/addToBasket' then update local storage
      if (mutation.type.slice(0, 6) == 'basket') {
        localStorage.setItem('basket', JSON.stringify(state.basket))
      }
    })

    this.$store.dispatch('basket/initialiseBasket')
  },
  beforeUnmount() {
    // when leaving the store route, stop listening to the basket
    this.unsubscribe()
  }
}
</script>
