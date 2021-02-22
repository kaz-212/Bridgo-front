<template>
  <div id="carousel-thumbnail">
    <img :src="image.thumbnail" />
  </div>
</template>

<script>
export default {
  name: 'CarouselThumbnail',
  props: { image: Object },
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="scss" scoped>
#carousel-thumbnail {
  width: 160px;
  height: 140px;
  // background-color: olive;
  // display: inline-block;
  margin: 0 10px;
  // background-color: olive;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    border: 2px solid #ffe0bf;
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
