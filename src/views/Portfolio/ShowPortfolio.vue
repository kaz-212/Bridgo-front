<template>
  <div v-if="project" id="main">
    <h1>{{ project.name }}</h1>
    <section>
      <CarouselThumbnail v-for="piece of pieces" :key="piece._id" :piece="piece" />
    </section>
  </div>
</template>

<script>
import CarouselThumbnail from '@/components/Portfolio/CarouselThumbnail.vue'

export default {
  name: 'PortfolioShow',
  components: { CarouselThumbnail },
  data() {
    return {}
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
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
