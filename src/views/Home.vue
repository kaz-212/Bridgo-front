<template>
  <div id="home">
    <video autoplay muted loop id="back-video">
      <!-- <source
        src="https://res.cloudinary.com/dqyymjqpg/video/upload/v1614430828/Bridgo/statics/FullSizeRender_ae3orh.mp4"
        type="video/mp4"
      /> -->

      <source
        src="https://res.cloudinary.com/bridget-simpson-art/video/upload/v1614698267/Bridgo/statics/home_back_video.mp4"
        type="video/mp4"
      />
    </video>
    <div class="foreground">
      <h1>bridget simpson</h1>
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
    background: linear-gradient(to bottom, #79d3e157, #c187ca4f);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: rgba(255, 255, 255, 0);
      font-size: 63px;
      color: white;
      text-shadow: 0 0 5px #534040;
      font-weight: 600;
      letter-spacing: 9px;
      z-index: 2;
    }
  }
}
</style>
