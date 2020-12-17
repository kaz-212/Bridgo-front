<template>
  <router-link :to="{ name: 'ShowPortfolio', params: { id: project._id } }">
    <div class="img-box">
      <img :src="mainUrl" />
      <div class="img-info">
        <h3>{{ project.name }}</h3>
        <!-- <h4>{{ project.materials }}</h4> -->
        <h4>{{ project.year }}</h4>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PortfolioWindow',
  props: { project: Object },
  computed: {
    mainUrl() {
      const found = this.project.pieces.find(piece => piece.isMain)
      return found.imgURL
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  margin: 0;
}
.img-box {
  border: solid rgb(0, 0, 0) 10px;

  position: relative;
  cursor: pointer;
  max-width: 90%;
  height: auto;

  img {
    max-height: 70vh;
    max-width: 100%;
    display: block;
  }

  .img-info {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.596);
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
      opacity: 1;
    }
  }
}
</style>
