<template>
  <div id="all-exhibitions">
    <h1>Exhibitions</h1>
    <h2>Upcoming</h2>
    <div v-for="exhibition in upcomingExhibitions" :key="exhibition._id">
      <router-link :to="{ name: 'EditExhibition', params: { id: exhibition._id } }">{{
        exhibition.name
      }}</router-link>
    </div>
    <h2>Past</h2>
    <div v-for="exhibition in pastExhibitions" :key="exhibition._id">
      <router-link :to="{ name: 'EditExhibition', params: { id: exhibition._id } }">{{
        exhibition.name
      }}</router-link>
    </div>

    <router-link :to="{ name: 'NewExhibition' }"><button>Add Exhibition</button></router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'exhibitions',
  computed: {
    ...mapGetters('exhibition', {
      upcomingExhibitions: 'getUpcomingExhibitions',
      pastExhibitions: 'getPastExhibitions'
    })
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#all-exhibitions {
  width: 100%;
}
</style>
