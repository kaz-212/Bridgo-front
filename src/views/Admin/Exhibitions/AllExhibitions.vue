<template>
  <div id="all-exhibitions">
    <h1>Exhibitions</h1>
    <h2>Upcoming</h2>
    <h2>Past</h2>
    <router-link :to="{ name: 'NewExhibition' }"><button>Add Exhibition</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'exhibitions',
  created() {}
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
