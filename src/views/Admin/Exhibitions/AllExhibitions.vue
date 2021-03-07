<template>
  <div id="all-exhibitions" v-if="exhibitions">
    <h1>Exhibitions</h1>
    <DraggableExhibitions :exhi="exhibitions" />
  </div>
</template>

<script>
import DraggableExhibitions from '@/components/Admin/Exhibitions/DraggableExhibitions.vue'
// FIXME figure out why when refresh this page, doesnt load
export default {
  name: 'exhibitions',
  components: { DraggableExhibitions },
  computed: {
    exhibitions() {
      return this.$store.state.adminExhibition.exhibitions
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 9% 0 0 7%;
}
</style>
