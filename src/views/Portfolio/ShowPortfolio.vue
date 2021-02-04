<template>
  <div v-if="project" class="main">
    <h1>{{ project.name }}</h1>
    <div class="carousel-wrapper">
      <section class="img-desc">
        <CarouselMain
          :image="project.images[selected]"
          :selected="selected"
          :length="project.images.length"
          @next-slide="nextSlide"
          @prev-slide="prevSlide"
        />
        <CarouselDescription :project="project" />
      </section>
      <section class="carousel-thumbnails">
        <CarouselThumbnail
          v-for="(image, index) of project.images"
          :key="image._id"
          :image="image"
          :class="{ active: selected === index }"
          @click="selectImage(index)"
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
      selected: 0
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
    },
    nextSlide() {
      this.selected += 1
    },
    prevSlide() {
      this.selected -= 1
    }
  }
}
</script>

<style lang="scss" scoped>
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
