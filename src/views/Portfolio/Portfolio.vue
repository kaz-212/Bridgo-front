<template>
  <div id="portfolio">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('project/getProjects')
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#portfolio {
  max-width: 100vw;
}
</style>
