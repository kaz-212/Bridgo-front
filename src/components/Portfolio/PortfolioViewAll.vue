<template>
  <div class="container">
    <div class="project-window" v-for="project in projects" :key="project._id">
      <router-link :to="{ name: 'ShowPortfolio', params: { id: project._id } }">
        <div class="img-box">
          <img :src="project.images[0].imgURL" />
          <div class="img-info">
            <h3>{{ project.name }}</h3>
            <!-- <h4>{{ project.materials }}</h4> -->
            <h4>{{ project.year }}</h4>
          </div>
        </div>
      </router-link>
    </div>
    <button @click="toggleScrollView">Scroll View</button>
  </div>
</template>

<script>
export default {
  name: 'PortfolioViewAll',
  props: { projects: Array },
  emits: ['toggle-scroll-view'],
  methods: {
    toggleScrollView() {
      this.$emit('toggle-scroll-view')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 4vw auto;
  width: 68vw;
  grid-gap: 20px;
  .project-window {
    width: 288px;
    height: 246px;
    .img-box {
      position: relative;
      cursor: pointer;
      width: 288px;
      height: 246px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-height: 100%;
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
  }
}
</style>
