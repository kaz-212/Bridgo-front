<template>
  <div id="inventory">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'inventory',
  async created() {
    try {
      await this.$store.dispatch('inventory/getProducts')
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

#inventory {
  margin-left: 15vw;
  width: 100%;
}
</style>
