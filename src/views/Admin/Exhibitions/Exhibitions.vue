<template>
  <div id="exhibitions">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'exhibitions',
  created() {
    this.$store.dispatch('exhibition/getExhibitions')
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#exhibitions {
  margin-left: 15vw;
  width: 100%;
}
</style>
