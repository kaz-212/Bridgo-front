<template>
  <div id="carousel-description">
    <h2>{{ piece.name }}</h2>
    <p class="description">{{ piece.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CarouselDescription',
  props: { piece: Object },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
#carousel-description {
  margin: 5px;
  width: 50%;
  height: 60vh;
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
