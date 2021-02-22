<template>
  <div id="exhibitions" v-if="exhibitions">
    <div class="fixed">
      <div class="exhibition-banner">
        <h1>EXHIBITIONS</h1>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="exhibitions-container">
      <div v-for="exhibition in exhibitions" :key="exhibition._id" class="exhibition-card">
        <ExhibitionCard :exhibition="exhibition" />
      </div>
    </div>
    <!-- <div class="exhibitions-container">
        <div v-for="exhibition in rightSide" :key="exhibition._id" class="exhibition-card">
          <ExhibitionCard :exhibition="exhibition" />
        </div>
      </div> -->
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
  position: absolute;
  top: 0;
  left: 8%;
  transition: all 0.5s ease-out;
  z-index: 1000;
  box-shadow: 0 0 6px 3px #8c3a3a;

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
    // background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612954180/Bridgo/statics/540A3F34-C815-4FD3-B272-44463C5D1990_slzuyp.jpg');
    // background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1613760745/Bridgo/statics/3E5F571A-F969-4ECF-90CE-8C2E2B66B597_lvxoyh.jpg');
    background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1613761494/Bridgo/statics/2B009483-DB4D-4C3B-88F8-A32ED2E7D41C_h46n4n.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
      color: rgba(255, 255, 255, 0);
      font-size: 63px;
      color: white;
      text-shadow: 0 0px 8px red;
      font-weight: 600;
      letter-spacing: 9px;
    }
  }
}

.spacer {
  margin-top: 70px;
  height: 28vh;
  max-height: 250px;
}

.exhibitions-container {
  width: 84%;
  margin: 7vh auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  flex-direction: column;
  align-items: center;
  grid-row-gap: 90px;

  .exhibition-card {
    margin: 1rem 0;
    height: 100%;
  }
}
</style>
