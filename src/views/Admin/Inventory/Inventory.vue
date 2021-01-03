<template>
  <div id="inventory">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'inventory',
  created() {
    // this.$store.dispatch('exhibition/getExhibitions')
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#inventory {
  margin-left: 15vw;
  width: 100%;
}
</style>
