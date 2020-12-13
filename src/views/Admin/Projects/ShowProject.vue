<template>
  <div class="main">
    <h1>{{ project.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ShowProjects',
  components: {},
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },

    project() {
      return this.$store.getters.getProjById(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;
}
</style>
