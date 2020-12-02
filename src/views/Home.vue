<template>
  <div id="home">
    <h1>Bridget Simpson Art.</h1>
    <div id="img"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
#img {
  position: fixed;
  top: 0;
  z-index: -10;
  min-height: 100vh;
  min-width: 100vw;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.021), rgba(0, 0, 0, 0.411)),
    url('../assets/main.jpg');
  background-size: cover;
}
</style>
