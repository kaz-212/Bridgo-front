<template>
  <div id="carousel-main">
    <img :src="piece.imgURL" />
    <i class="fas fa-chevron-right"></i>
  </div>
</template>

<script>
export default {
  name: 'CarouselMain',
  props: { piece: Object },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
#carousel-main {
  margin: 5px;
  width: 50%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
