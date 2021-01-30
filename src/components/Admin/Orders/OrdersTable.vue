<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Customer</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order._id">
          <td>
            <router-link :to="{ name: 'ShowOrder', params: { id: order._id } }">{{
              order.orderId
            }}</router-link>
          </td>
          <td>{{ order.email }}</td>
          <td>£{{ (order.amount / 100).toFixed(2) }}</td>
          <td>
            <button v-if="order.dispatched" @click="dispatched(order._id)">
              I've not sent this yet!
            </button>
            <button v-else @click="dispatched(order._id)">I've sent this off!</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'OrdersTable',
  props: {
    orders: Array
  },
  data() {
    return {}
  },
  computed: {},

  methods: {
    dispatched(id) {
      this.$store.dispatch('orders/toggleDispatched', id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
