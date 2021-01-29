<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Customer</th>
          <th>items</th>
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
  name: 'OrdersTable',
  props: {
    orders: Array
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
