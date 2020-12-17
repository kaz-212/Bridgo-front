<template>
  <div id="carousel-image">
    <img :src="piece.thumbnail" />
  </div>
</template>

<script>
export default {
  name: 'CarouselThumbnail',
  props: { piece: Object },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
#carousel-image {
  width: 200px;
  height: 160px;
  background-color: olive;
  border: 1px solid black;
  // display: inline-block;
  margin: 0 5px;
  display: flex;

  img {
    max-height: 160px;
    max-width: 200px;
  }
}
</style>
