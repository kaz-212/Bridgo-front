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
  async created() {
    try {
      await this.$store.dispatch('orders/getOrders')
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.admin {
  min-height: calc(100vh - 70px);
  margin-top: 70px;
}
</style>
