<template>
  <div class="admin">
    <AdminNav />
    <router-view />
  </div>
</template>

<script>
import AdminNav from '@/components/Admin/AdminNav.vue'

export default {
  name: 'Admin',
  components: {
    AdminNav
  },
  mounted() {
    // this.$store.dispatch('project/getProjects')
    this.$store.dispatch('orders/getOrders')
    this.$store.dispatch('exhibition/getExhibitions')
    this.$store.dispatch('inventory/getProducts')
    this.$store.dispatch('project/getProjects')
    this.$store.dispatch('adminProject/getThemes')
  }
}
</script>

<style lang="scss" scoped>
.admin {
  height: 94vh;
}
</style>
