<template>
  <div id="home">
    <video autoplay muted loop id="back-video">
      <!-- <source
        src="https://res.cloudinary.com/dqyymjqpg/video/upload/v1614430828/Bridgo/statics/FullSizeRender_ae3orh.mp4"
        type="video/mp4"
      /> -->

      <source
        src="https://res.cloudinary.com/bridget-simpson-art/video/upload/v1614724620/Bridgo/statics/My_Movie_2_2_drnaun.mp4"
        type="video/mp4"
      />
    </video>
    <div class="foreground">
      <h1>Bridget Simpson</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap');

#home {
  top: 60px;
  height: calc(100vh - 60px);
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: absolute;
  bottom: 0;
  position: relative;
  // background: black;
  #back-video {
    height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
  .foreground {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#999999d4, #979797c2);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: rgba(255, 255, 255, 0);
      font-size: 73px;
      color: white;
      text-shadow: 0 0 5px #534040;
      // font-weight: 600;
      // letter-spacing: 17px;
      z-index: 2;
      font-family: 'Libre Barcode 39 Text', cursive;
    }
  }
}
</style>
