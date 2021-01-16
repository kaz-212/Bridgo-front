<template>
  <div v-if="basketItems">
    <h1>Basket</h1>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Size</th>
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
            />
          </td>
          <td>{{ item.info.price }}</td>
          <td><i class="far fa-trash-alt"></i></td>
        </tr>
      </tbody>
    </table>
    {{ basketItems }}
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
