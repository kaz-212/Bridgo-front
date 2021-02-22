<template>
  <div id="carousel-description">
    <h2>{{ project.name }}</h2>
    <p class="description">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CarouselDescription',
  props: { project: Object },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
#carousel-description {
  margin: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-bottom: 25px;
  }

  .description {
    white-space: pre-line;
  }
}
</style>
