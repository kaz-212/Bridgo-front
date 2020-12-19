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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/solid.min.css');

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
