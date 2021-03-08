<template>
  <div id="projects">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Projects',
  async created() {
    try {
      await this.$store.dispatch('adminProject/getThemes')
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#projects {
  margin-left: 15vw;
  width: 85vw;
}
</style>
