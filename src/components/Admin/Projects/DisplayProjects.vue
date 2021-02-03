<template>
  <div>
    <div v-for="project in projects" :key="project._id">
      <router-link :to="{ name: 'EditProject', params: { id: project._id } }"
        ><img :src="project.images[0].thumbnail"
      /></router-link>
      <h4>{{ project.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayProjects',
  props: { projects: Array }
}
</script>

<style lang="scss" scoped></style>
