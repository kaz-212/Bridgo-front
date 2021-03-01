<template>
  <div id="base" v-if="this.$store.state.project.themes">
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
    // FIXME load everything when app loads. gets errors when we uncomment out below
    // this.$store.dispatch('project/getThemes')
    // this.$store.dispatch('exhibition/getExhibitions')
    // this.$store.dispatch('basket/initialiseBasket')
  }
}
</script>

<style lang="scss">
html {
  overflow-x: hidden;

  body {
    background-image: url('https://res.cloudinary.com/bridget-simpson-art/image/upload/w_auto,q_auto/v1614603594/Bridgo/statics/Background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  #base {
    min-height: 100vh;
  }
}
</style>
