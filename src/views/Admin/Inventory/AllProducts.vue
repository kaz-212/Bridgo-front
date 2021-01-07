<template>
  <div id="all-admin-products">
    <h1>All Products</h1>
    <!-- <ul>
      <li v-for="product in products" :key="product._id">
        <router-link :to="{ name: 'EditProduct', params: { id: product._id } }">
          {{ product.product.name }}
        </router-link>
      </li>
    </ul> -->
    <Tabs>
      <Tab name="tab-1" selected="true">
        <h2>Tab 1</h2>
      </Tab>
      <Tab name="tab-2">
        <h2>Tab 2</h2>
      </Tab>
      <Tab name="tab-3">
        <h2>Tab 3</h2>
      </Tab>
    </Tabs>
    <router-link :to="{ name: 'NewProduct' }"><button>New Product</button></router-link>
  </div>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Tabs from '@/components/Tab/Tabs.vue'

export default {
  name: 'AllProducts',
  components: { Tab, Tabs },
  computed: {
    products() {
      return this.$store.state.inventory.products
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#all-admin-products {
  margin-left: 15vw;
  width: 100%;
}
</style>
