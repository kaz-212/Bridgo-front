<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  created() {
    this.$store.dispatch('inventory/getProducts')
  }
}
</script>
