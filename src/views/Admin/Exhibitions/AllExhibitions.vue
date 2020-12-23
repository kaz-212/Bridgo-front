<template>
  <div id="all-exhibitions">
    <h1>Exhibitions</h1>
    <h2>Upcoming</h2>
    <h2>Past</h2>
    <div v-for="exhibition in exhibitions" :key="exhibition._id">
      <router-link :to="{ name: 'EditExhibition', params: { id: exhibition._id } }">{{
        exhibition.name
      }}</router-link>
    </div>
    <router-link :to="{ name: 'NewExhibition' }"><button>Add Exhibition</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'exhibitions',
  computed: {
    exhibitions() {
      return this.$store.state.exhibition.exhibitions
    }
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
