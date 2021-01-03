<template>
  <div id="all-admin-products">
    <h1>All Products</h1>
    <router-link :to="{ name: 'NewProduct' }"><button>New Product</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'AllProducts'
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#exhibitions {
  margin-left: 15vw;
  width: 100%;
}
</style>
