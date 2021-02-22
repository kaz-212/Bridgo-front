<template>
  <div id="carousel-main">
    <div class="wrapper">
      <img :src="image.imgURL" />
      <div class="arrow-overlay">
        <i
          v-if="selected !== 0"
          @click="prevSlide"
          class="chevvy left fas fa-2x fa-chevron-left"
        ></i>
        <i
          v-if="selected != length - 1"
          @click="nextSlide"
          class="chevvy right fas fa-2x fa-chevron-right"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselMain',
  props: { image: Object, selected: Number, length: Number },
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
  }
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

  .wrapper {
    position: relative;
    top: 0;
    left: 0;
    // background-color: red;
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .arrow-overlay {
      position: absolute;
      color: white;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.171);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      transition: opacity 0.2s ease-out;
      &:hover {
        opacity: 1;
      }
      .chevvy {
        cursor: pointer;
        margin-left: 5px;
        &.right {
          margin-left: auto;
          margin-right: 5px;
        }
      }
    }

    img {
      max-height: 60vh;
      max-width: 100%;
      display: block;
    }
  }
}
</style>
