<template>
  <div id="exhibitions" v-if="exhibitions">
    <h1>Exhibitions</h1>
    <div class="all-exhibitions">
      <div class="exhibitions-container">
        <div v-for="exhibition in leftSide" :key="exhibition._id" class="exhibition-card">
          <ExhibitionCard :exhibition="exhibition" />
        </div>
      </div>
      <div class="exhibitions-container">
        <div v-for="exhibition in rightSide" :key="exhibition._id" class="exhibition-card">
          <ExhibitionCard :exhibition="exhibition" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExhibitionCard from '@/components/Exhibitions/ExhibitionCard.vue'

export default {
  name: 'AllExhibitions',
  components: { ExhibitionCard },
  computed: {
    exhibitions() {
      return this.$store.state.exhibition.exhibitions
    },
    leftSide() {
      const leftSide = []
      for (let i = 0; i < this.exhibitions.length; i += 2) {
        leftSide.push(this.exhibitions[i])
      }
      return leftSide
    },
    rightSide() {
      const rightSide = []
      for (let i = 1; i < this.exhibitions.length; i += 2) {
        rightSide.push(this.exhibitions[i])
      }
      return rightSide
    }
  }
}
</script>

<style lang="scss" scoped>
.all-exhibitions {
  display: flex;
  justify-content: center;

  .exhibitions-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .exhibition-card {
      margin: 1rem 1.5rem;
    }
  }
}
</style>
