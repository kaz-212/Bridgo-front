<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch('getProjects')
  }
}
</script>

<style lang="scss">
html {
  overflow-x: hidden;

  #app {
    height: 100vh;
  }
}
</style>
