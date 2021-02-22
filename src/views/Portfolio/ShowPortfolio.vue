<template>
  <div v-if="project" class="main">
    <div class="fullscreen-display" v-show="showFullscreen">
      <p @click="showFullscreen = false" class="close">X</p>
      <div class="img-container">
        <img :src="project.images[selected].imgURL" alt="fullscreen-image" />
      </div>
    </div>
    <div class="carousel-wrapper">
      <section class="top-half">
        <div class="img">
          <CarouselMain
            :image="project.images[selected]"
            :selected="selected"
            :length="project.images.length"
            @next-slide="selected += 1"
            @prev-slide="selected -= 1"
            @fullscreen="showFullscreen = true"
          />
        </div>
        <div class="info">
          <CarouselDescription :project="project" />
          <div class="details">
            <p class="project-details">
              {{ project.materials }}, <em>{{ project.year }}</em>
            </p>
          </div>
        </div>
      </section>
      <section class="carousel-thumbnails">
        <CarouselThumbnail
          v-for="(image, index) of project.images"
          :key="image._id"
          :image="image"
          :class="{ active: selected === index }"
          @click="selected = index"
        />
      </section>
    </div>
  </div>
</template>

<script>
import CarouselThumbnail from '@/components/Portfolio/CarouselThumbnail.vue'
import CarouselMain from '@/components/Portfolio/CarouselMain.vue'
import CarouselDescription from '@/components/Portfolio/CarouselDescription.vue'

export default {
  name: 'PortfolioShow',
  components: { CarouselThumbnail, CarouselDescription, CarouselMain },
  data() {
    return {
      selected: 0,
      showFullscreen: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    project() {
      return this.$store.getters['project/getProjById'](this.id)
    }
  },
  methods: {
    selectPiece(index) {
      this.selected = index
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .fullscreen-display {
    position: fixed;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.856);
    display: flex;
    align-items: center;
    justify-content: center;
    .close {
      color: white;
      position: fixed;
      top: 5%;
      right: 5%;
      font-size: 23px;
      cursor: pointer;
    }

    .img-container {
      // max-height: 80vh;
      // max-width: 80vw;
      height: auto;
      width: auto;

      img {
        max-width: 90vw;
        max-height: 88vh;
      }
    }
  }

  .carousel-wrapper {
    margin-top: 8vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-half {
      display: flex;
      .img {
        width: 45%;
        margin-right: auto;
      }

      .info {
        width: 50%;
        .details {
          .project-details {
            font-size: 15px;
          }
        }
      }
    }

    .carousel-thumbnails {
      margin: 8vh auto 0 auto;
      width: 70vw;
      height: 150px;
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
    }
  }
}
</style>
