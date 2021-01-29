<template>
  <div v-if="orders">
    <h1>YUUUP</h1>
    {{ orders }}
  </div>
</template>

<script>
export default {
  name: 'AllOrders',
  computed: {
    orders() {
      return this.$store.state.orders.orders
    }
  }
}
</script>

<style lang="scss" scoped></style>
