<template>
  <div id="exhibitions">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ExhibitionBasu',
  created() {
    this.$store.dispatch('exhibition/getExhibitions')
  }
}
</script>
