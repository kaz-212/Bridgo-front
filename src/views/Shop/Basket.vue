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
            {{ item.particular.product.name }}
            {{ item.info.size.size != 'unisize' ? item.info.size.size : '' }}
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
          <td>£ {{ item.info.price * item.qty }}</td>
          <td><i @click="removeItem(item)" class="far fa-trash-alt"></i></td>
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
    }
  },
  methods: {
    changeQuantity(item, event) {
      this.$store.dispatch('basket/updateQuantity', { qty: event.target.value, item })
    },
    removeItem(item) {
      /* eslint-disable */
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
