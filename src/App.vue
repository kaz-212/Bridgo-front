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
    background-image: linear-gradient(rgba(249, 249, 249, 0.5), rgba(201, 201, 255, 0.13)),
      url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1613992704/Bridgo/statics/E8B0536F-0EA4-4204-9875-94BA57DDD4CA_yvz2mc.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  #base {
    min-height: 100vh;
  }
}
</style>
