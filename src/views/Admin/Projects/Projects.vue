<template>
  <div class="main">
    <h1>All projects</h1>
    <router-link to="/admin/projects/new"><button>New Project</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'AdminProjects',
  components: {}
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;
}
</style>
