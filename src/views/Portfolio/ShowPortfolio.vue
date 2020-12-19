<template>
  <div v-if="project" class="main">
    <h1>{{ project.name }}</h1>
    <div class="carousel-wrapper">
      <section class="img-desc">
        <CarouselMain :piece="pieces[selected]" />
        <CarouselDescription :piece="pieces[selected]" />
      </section>
      <section class="carousel-thumbnails">
        <CarouselThumbnail
          v-for="(piece, index) of pieces"
          :key="piece._id"
          :piece="piece"
          :class="{ active: selected === index }"
          @click="selectPiece(index)"
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
      return this.$store.getters.getProjById(this.id)
    },
    pieces() {
      // array of pieces sorted by index
      return this.project.pieces.filter(piece => piece.showInProj).sort((a, b) => a - b)
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
