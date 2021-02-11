<template>
  <div id="exhibitions" v-if="exhibitions">
    <div class="exhibition-banner">
      <!-- <img
        src="https://res.cloudinary.com/dqyymjqpg/image/upload/v1612899964/Bridgo/statics/4CE38005-BEC1-4ADE-AED6-91F05FE33E7E_ycfzao.jpg"
        alt="exhibitions"
      /> -->
      <h1>EXHIBITIONS</h1>
    </div>
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
  }
}
</script>

<style lang="scss" scoped>
.exhibition-banner {
  width: 84%;
  margin: 0 auto;
  margin-top: 7vh;
  height: 25vh;
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

.all-exhibitions {
  margin-top: 3vh;
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
