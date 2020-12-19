<template>
  <div id="carousel-main">
    <i @click="nextSlide" class="chevvy fas fa-chevron-left"></i>
    <img :src="piece.imgURL" />
    <i @click="prevSlide" class="chevvy fas fa-chevron-right"></i>
  </div>
</template>

<script>
export default {
  name: 'CarouselMain',
  props: { piece: Object },
  data() {
    return {}
  },
  methods: {
    nextSlide() {
      this.$emit('next-slide')
    },
    prevSlide() {
      this.$emit('prev-slide')
    }
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

  .chevvy {
    cursor: pointer;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
