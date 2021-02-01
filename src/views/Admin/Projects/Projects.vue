<template>
  <div id="projects">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#projects {
  max-width: 100vw;
}
</style>
