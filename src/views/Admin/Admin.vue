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
