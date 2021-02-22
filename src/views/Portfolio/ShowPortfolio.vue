<template>
  <div v-if="project" class="main">
    <div class="fullscreen-display" v-show="showFullscreen">
      <p @click="showFullscreen = false" class="close">X</p>
      <div class="img-container">
        <img :src="project.images[selected].imgURL" alt="fullscreen-image" />
      </div>
    </div>
    <div class="carousel-wrapper">
      <section class="img-desc">
        <CarouselMain
          :image="project.images[selected]"
          :selected="selected"
          :length="project.images.length"
          @next-slide="selected += 1"
          @prev-slide="selected -= 1"
          @fullscreen="showFullscreen = true"
        />
        <CarouselDescription :project="project" />
      </section>
      <section class="carousel-thumbnails">
        <CarouselThumbnail
          v-for="(image, index) of project.images"
          :key="image._id"
          :image="image"
          :class="{ active: selected === index }"
          @click="selected = index"
        />
      </section>
    </div>
  </div>
</template>

<script>
import CarouselThumbnail from '@/components/Portfolio/CarouselThumbnail.vue'
import CarouselMain from '@/components/Portfolio/CarouselMain.vue'
import CarouselDescription from '@/components/Portfolio/CarouselDescription.vue'

export default {
  name: 'PortfolioShow',
  components: { CarouselThumbnail, CarouselDescription, CarouselMain },
  data() {
    return {
      selected: 0,
      showFullscreen: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    project() {
      return this.$store.getters['project/getProjById'](this.id)
    }
  },
  methods: {
    selectPiece(index) {
      this.selected = index
    }
  }
}
</script>

<style lang="scss" scoped>
.fullscreen-display {
  position: fixed;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.856);
  display: flex;
  align-items: center;
  justify-content: center;
  .close {
    color: white;
    position: fixed;
    top: 5%;
    right: 5%;
    font-size: 23px;
    cursor: pointer;
  }

  .img-container {
    // max-height: 80vh;
    // max-width: 80vw;
    height: auto;
    width: auto;

    img {
      max-width: 90vw;
      max-height: 88vh;
    }
  }
}

.carousel-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-desc {
    display: flex;
    width: 70vw;
    // height: 40vh;
  }

  .carousel-thumbnails {
    // position: absolute;
    width: 70vw;
    height: 200px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
}
</style>
