<template>
  <div class="view-all">
    <div class="container">
      <div class="project-window" v-for="project in projects" :key="project._id">
        <router-link :to="{ name: 'ShowPortfolio', params: { id: project._id } }">
          <div class="img-box">
            <img :src="project.images[0].imgURL" />
            <div class="img-info">
              <h3>{{ project.name }}</h3>
              <!-- <h4>{{ project.materials }}</h4> -->
              <em
                ><h4>{{ project.year }}</h4></em
              >
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <StandardButton class="toggle-view" @click="toggleScrollView">Change View</StandardButton>
  </div>
</template>

<script>
import StandardButton from '@/components/Buttons/StandardButton.vue'

export default {
  name: 'PortfolioViewAll',
  props: { projects: Array },
  components: { StandardButton },
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
  margin: 10vh auto;
  width: 68vw;
  grid-gap: 20px;

  .project-window {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 280px;
    width: 285px;
    position: relative;
    .img-box {
      max-height: 260px;
      max-width: 260px;
      height: auto;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;

      img {
        max-height: 260px;
        max-width: 100%;
        display: block;
      }

      .img-info {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        transition: all 0.5s ease-out;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
.toggle-view {
  position: absolute;
  bottom: 10vh;
  right: 6vw;
}
</style>
