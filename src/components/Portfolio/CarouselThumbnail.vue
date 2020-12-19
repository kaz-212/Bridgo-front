<template>
  <div id="carousel-thumbnail">
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
#carousel-thumbnail {
  min-width: 160px;
  height: 150px;
  // background-color: olive;
  // display: inline-block;
  margin: 0 10px;
  background-color: olive;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    border: 2px solid red;
  }

  img {
    // max-height: 146px;
    // max-width: 200px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
