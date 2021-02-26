<template>
  <div id="home">
    <video autoplay muted loop id="back-video">
      <!-- <source src="../assets/bridget2.mp4" type="video/mp4" /> -->
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
  height: calc(100% - 50px);
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background: black;
  #back-video {
    max-height: 100%;
    min-width: 90%;
  }
}
</style>
