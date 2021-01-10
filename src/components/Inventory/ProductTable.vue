<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Units Remaining</th>
          <th>Units Sold</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(particular, index) in products" :key="particular._id">
          <router-link :to="{ name: 'EditProduct', params: { id: particular._id } }"
            ><td>{{ particular.product.name }}</td></router-link
          >
          <td>6</td>
          <td>4</td>
          <td>{{ index + 1 }}</td>
          <td><i class="far fa-trash-alt"></i></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'ProductTable',
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.getters['inventory/getPrints']
    }
  }
}
</script>

<style lang="scss" scoped></style>
