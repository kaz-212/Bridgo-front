<template>
  <div>
    <div v-for="project in projects" :key="project._id">
      <!-- <img :src="project.images[0].thumbnail" /> -->
      {{ project }}
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
