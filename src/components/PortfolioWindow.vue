<template>
  <div id="img-box">
    <img :src="require(`@/assets/${image.imgName}`)" />
    <div class="img-info">
      <h3>{{ image.pieceName }}</h3>
      <h4>{{ image.materials }}</h4>
      <h4>{{ image.year }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioWindow',
  props: { image: Object }
}
</script>

<style lang="scss" scoped>
#img-box {
  // border: solid rgb(51, 51, 51) 1px;

  position: relative;
  cursor: pointer;
  max-width: 50%;
  height: auto;

  img {
    max-height: 60vh;
    max-width: 100%;
    display: block;
  }

  .img-info {
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
