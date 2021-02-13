<template>
  <div id="home">
    <video autoplay muted loop id="back-video">
      <source src="../assets/bridget2.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: black;
  #back-video {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
