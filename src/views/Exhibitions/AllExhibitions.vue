<template>
  <div id="exhibitions" v-if="exhibitions">
    <section class="header">
      <div class="exhibition-banner">
        <h1>EXHIBITIONS</h1>
        <h2>EXHIBITIONS</h2>
      </div>
    </section>
    <section class="exhibitions">
      <div class="exhibitions-container">
        <div v-for="exhibition in exhibitions" :key="exhibition._id" class="exhibition-card">
          <ExhibitionCard :exhibition="exhibition" />
        </div>
      </div>
    </section>
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
.header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .exhibition-banner {
    // box-shadow: 0 0 6px 3px #8c3a3a;
    // box-shadow: 0 0 6px 3px #2c7d48;
    box-shadow: 0 0 6px 3px #8a0000;
    width: 84%;
    height: 70%;
    margin: auto;
    background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/w_auto,q_auto/v1614024082/Bridgo/statics/Exhibition_Header.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h1 {
      margin: 0;
      color: rgba(255, 255, 255, 0);
      font-size: 63px;
      color: white;
      // text-shadow: 0 0px 8px #b14e4e;
      // text-shadow: 0 0px 9px #83b58d, 0 50px #233340;
      // text-shadow: 0 4px 6px #41884f;
      font-weight: 600;
      letter-spacing: 9px;
      z-index: 2;
    }
    h2 {
      position: absolute;
      font-size: 64px;
      letter-spacing: 11px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0);
      // text-shadow: 0 65px 1px #808080;
      // text-shadow: 0 65px 2px #80808087;
      text-shadow: 0 65px 2px #8080805e;
      z-index: 1;
    }
  }
}

// .spacer {
//   margin-top: 70px;
//   height: 28vh;
//   max-height: 250px;
// }

.exhibitions {
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
      &:nth-of-type(2n) {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
