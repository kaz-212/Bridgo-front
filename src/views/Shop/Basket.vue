<template>
  <div v-if="basketItems">
    <h1>Basket</h1>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in basketItems" :key="item.particular._id">
          <td>
            {{ item.product.name }}
            {{ item.particular.size != 'unisize' ? item.particular.size : '' }}
          </td>
          <td>
            <input
              @change="changeQuantity(item, $event)"
              type="number"
              :name="`${index}-qty`"
              :id="`${index}-qty`"
              :value="item.qty"
              min="1"
              max="10"
            />
          </td>
          <td>£ {{ (item.particular.price * item.qty).toFixed(2) }}</td>
          <td><i @click="removeItem(item)" class="far fa-trash-alt"></i></td>
        </tr>
        <tr>
          <td></td>
          <td><strong>Total</strong></td>
          <td>£ {{ totalPrice.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    <div class="checkout">
      <router-link :to="{ name: 'Checkout' }"><button>Continue to Checkout</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basket',
  data() {
    return {}
  },
  computed: {
    basketItems() {
      return this.$store.state.basket.basket
    },
    totalPrice() {
      let sum = 0
      /* eslint-disable */
      for (const item of this.basketItems) {
        sum += item.particular.price * item.qty
      }
      return sum
    }
  },
  methods: {
    changeQuantity(item, event) {
      this.$store.dispatch('basket/updateQuantity', { qty: parseInt(event.target.value, 10), item })
    },
    removeItem(item) {
      if (confirm('Are you sure you want to remove this from your basket?')) {
        this.$store.dispatch('basket/removeItem', item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}
</style>
