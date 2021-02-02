<template>
  <div id="all-exhibitions" v-if="pastExhibitions">
    <h1>Exhibitions</h1>
    <h2>Upcoming</h2>
    <div v-for="exhibition in upcomingExhibitions" :key="exhibition._id">
      <router-link :to="{ name: 'ShowExhibition', params: { id: exhibition._id } }">{{
        exhibition.name
      }}</router-link>
    </div>
    <h2>Past</h2>
    <div v-for="exhibition in pastExhibitions" :key="exhibition._id">
      <router-link :to="{ name: 'ShowExhibition', params: { id: exhibition._id } }">{{
        exhibition.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AllExhibitions',
  computed: {
    ...mapGetters('exhibition', {
      upcomingExhibitions: 'onShowUpcoming',
      pastExhibitions: 'onShowPast'
    })
  }
}
</script>
