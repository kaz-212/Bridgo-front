<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Units Remaining</th>
          <th>Units Sold</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <router-link :to="{ name: 'ShowProductDetails', params: { id: product._id } }"
            ><td>{{ product.name }}</td></router-link
          >
          <td>{{ totalRemaining(product.particulars) }}</td>
          <td>{{ totalSold(product.particulars) }}</td>
          <td><i @click="deleteProduct(product._id)" class="far fa-trash-alt"></i></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'ProductTable',
  props: {
    products: Array
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    async deleteProduct(id) {
      /* eslint-disable */
      if (confirm('Are you sure you want to delete? All the data will be lost!')) {
        try {
          await this.$store.dispatch('inventory/deleteProduct', id)
        } catch (e) {
          console.log(e.response.data)
        }
      }
    },
    totalRemaining(particulars) {
      /* eslint-disable */
      let total = 0
      for (const particular of particulars) {
        total += particular.unitsRemaining
      }
      return total
    },
    totalSold(particulars) {
      /* eslint-disable */
      let total = 0
      for (const particular of particulars) {
        total += particular.unitsSold
      }
      return total
    }
  }
}
</script>

<style lang="scss" scoped></style>
