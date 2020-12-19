<template>
  <div id="carousel-description">
    <h2>{{ piece.name }}</h2>
    <p>{{ piece.description }}</p>
    <i class="fas fa-chevron-right"></i>
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

  img {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
