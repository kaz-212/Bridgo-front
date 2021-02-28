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
  }
}
</script>

<style lang="scss" scoped>
.admin {
  min-height: calc(100vh - 70px);
  margin-top: 70px;
}
</style>
