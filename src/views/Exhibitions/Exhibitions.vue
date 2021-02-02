<template>
  <div id="exhibitions">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Exhibitions',
  created() {
    this.$store.dispatch('exhibition/getExhibitions')
  }
}
</script>
