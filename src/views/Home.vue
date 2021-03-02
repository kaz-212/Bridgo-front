<template>
  <div id="home">
    <video autoplay muted loop id="back-video">
      <!-- <source
        src="https://res.cloudinary.com/dqyymjqpg/video/upload/v1614430828/Bridgo/statics/FullSizeRender_ae3orh.mp4"
        type="video/mp4"
      /> -->
      <source
        src="https://res.cloudinary.com/dqyymjqpg/video/upload/v1614431322/Bridgo/statics/FullSizeRender_2_ccdc57.mp4"
        type="video/mp4"
        poster="https://res.cloudinary.com/bridget-simpson-art/image/upload/w_auto,q_auto/v1614692203/Bridgo/statics/A7885051-B336-4E48-A693-7DE5DD957E88_fpqwzs.jpg"
      />
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
  height: calc(100vh - 60px);
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  // background: black;
  #back-video {
    height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
}
</style>
