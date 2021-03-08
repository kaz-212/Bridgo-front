<template>
  <div id="exhibitions">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'exhibitions',
  async created() {
    try {
      await this.$store.dispatch('adminExhibition/getExhibitions')
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#exhibitions {
  margin-left: 15vw;
  width: 85vw;
}
</style>
