<template>
  <div v-if="order">
    <h1>Order Details</h1>
    <h2>Order ID: {{ order.orderId }}</h2>
    <p>
      (Copy your order ID above and paste it into your stripe dashboard to find more details like
      address/date of payment etc.)
    </p>
    <h3>Customer Email</h3>
    <p>{{ order.email }}</p>
    <h3>Items to send</h3>
    <ul>
      <li v-for="item in order.items" :key="item._id">
        <strong>{{ item.name }} </strong> Size: {{ item.size }}, Quantity: {{ item.qty }}
      </li>
    </ul>
    <h3>Other Details</h3>
    <textarea @blur="saveDetails" v-model="order.otherDetails" rows="5"></textarea>
  </div>
</template>

<script>
export default {
  name: 'ShowOrder',
  computed: {
    id() {
      return this.$route.params.id
    },
    order() {
      return this.$store.getters['orders/getOrderById'](this.id)
    }
  },
  methods: {
    saveDetails() {
      this.$store.dispatch('orders/editDetails', { id: this.id, details: this.order.otherDetails })
    }
  }
}
</script>

<style lang="scss" scoped></style>
