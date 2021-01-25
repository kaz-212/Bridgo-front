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
          <router-link :to="{ name: 'EditProduct', params: { id: product._id } }"
            ><td>{{ product.name }}</td></router-link
          >
          <td>6</td>
          <td>4</td>
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
  methods: {
    deleteProduct(id) {
      /* eslint-disable */
      if (confirm('Are you sure you want to delete? All the data will be lost!')) {
        this.$store.dispatch('inventory/deleteProduct', id)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
