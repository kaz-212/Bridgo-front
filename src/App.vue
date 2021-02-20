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
    // background: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612965186/Bridgo/statics/A5AADBDA-339A-46B0-82E3-B696A9B826CB_vkvamo.jpg');
    // background: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1613759104/Bridgo/statics/Background1_zqy8ai.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  #base {
    min-height: 100vh;
  }
}
</style>
