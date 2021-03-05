<template>
  <div id="exhibitions" v-if="exhibitions">
    <section class="header">
      <div class="exhibition-banner">
        <h1>EXHIBITIONS</h1>
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
  margin-top: 60px;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  .exhibition-banner {
    box-shadow: 0 0 6px 1px #1c1c1c;
    width: 84%;
    height: 76%;
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
      font-weight: 600;
      letter-spacing: 9px;
      z-index: 2;
    }
  }
}

.exhibitions {
  .exhibitions-container {
    width: 84%;
    min-height: 90vh;
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
