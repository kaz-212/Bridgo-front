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
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.021), rgba(0, 0, 0, 0.411)),
    url('./assets/main.jpg');
  background-size: cover;
  background-position: top;
}
</style>
