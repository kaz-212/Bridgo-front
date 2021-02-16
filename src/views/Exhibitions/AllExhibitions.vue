<template>
  <div id="exhibitions" v-if="exhibitions">
    <div class="fixed" :class="{ scrolling: scrolling }">
      <div class="exhibition-banner">
        <h1>EXHIBITIONS</h1>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="all-exhibitions">
      <div class="exhibitions-container">
        <div v-for="exhibition in leftSide" :key="exhibition._id" class="exhibition-card">
          <ExhibitionCard :exhibition="exhibition" />
        </div>
      </div>
      <div class="exhibitions-container">
        <div v-for="exhibition in rightSide" :key="exhibition._id" class="exhibition-card">
          <ExhibitionCard :exhibition="exhibition" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExhibitionCard from '@/components/Exhibitions/ExhibitionCard.vue'

export default {
  name: 'AllExhibitions',
  components: { ExhibitionCard },
  data() {
    return {
      scrolling: false
    }
  },
  computed: {
    exhibitions() {
      return this.$store.state.exhibition.exhibitions
    },
    leftSide() {
      const leftSide = []
      for (let i = 0; i < this.exhibitions.length; i += 2) {
        leftSide.push(this.exhibitions[i])
      }
      return leftSide
    },
    rightSide() {
      const rightSide = []
      for (let i = 1; i < this.exhibitions.length; i += 2) {
        rightSide.push(this.exhibitions[i])
      }
      return rightSide
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        this.scrolling = true
      } else {
        this.scrolling = false
      }
    })
  },
  unmounted() {
    window.removeEventListener('scroll', () => {
      this.scrolling = false
    })
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  width: 84%;
  height: 28vh;
  max-height: 250px;
  margin: 0 auto;
  margin-top: 70px;
  position: fixed;
  top: 0;
  left: 8%;
  transition: all 0.5s ease-out;
  z-index: 1000;

  &.scrolling {
    width: 100%;
    height: 23vh;
    left: 0;
    top: 5vh;
    margin: 0;
  }

  .exhibition-banner {
    width: 100%;
    height: 100%;
    // margin: 0 auto;
    // margin-top: 7vh;
    // height: 25vh;
    background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612954180/Bridgo/statics/540A3F34-C815-4FD3-B272-44463C5D1990_slzuyp.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
      // color: #98982b;
      // color: #7b7b02ed;
      // text-shadow: 5px 5px 3px #4e3535;
      // this one with main color transparent
      color: rgba(255, 255, 255, 0);
      font-size: 53px;
      text-shadow: 0 0 2px #c3bf43;
      font-weight: 300;
    }
  }
}
.spacer {
  margin-top: 70px;
  height: 28vh;
  max-height: 250px;
}
.all-exhibitions {
  margin-top: 7vh;
  display: flex;
  justify-content: center;

  .exhibitions-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .exhibition-card {
      margin: 1rem 1.5rem;
    }
  }
}
</style>
