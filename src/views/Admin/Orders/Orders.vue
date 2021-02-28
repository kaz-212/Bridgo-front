<template>
  <div id="orders">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Orders',
  async created() {
    try {
      await this.$store.dispatch('orders/getOrders')
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
#orders {
  margin-left: 15vw;
  width: 100%;
}
</style>
