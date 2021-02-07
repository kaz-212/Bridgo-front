<template>
  <div id="all-exhibitions" v-if="exhibitions">
    <h1>Exhibitions</h1>
    <div class="exhibitions-container">
      <div v-for="exhibition in exhibitions" :key="exhibition._id" class="exhibition-card">
        <ExhibitionCard :exhibition="exhibition" />
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
    }
  }
}
</script>

<style lang="scss" scoped>
.exhibitions-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .exhibition-card {
    margin-top: 2rem;
  }
}
</style>
