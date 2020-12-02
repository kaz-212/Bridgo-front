<template>
  <div id="home">
    <section class="section s1">
      <PortfolioWindow class="window left-image" :image="images[0]" />
      <PortfolioWindow class="window right-image" :image="images[1]" />
    </section>
    <section class="section s2">
      <PortfolioWindow class="window left-image" :image="images[2]" />
      <PortfolioWindow class="window right-image" :image="images[3]" />
    </section>
  </div>
</template>

<script>
import PortfolioWindow from '@/components/PortfolioWindow.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioWindow
  },
  data() {
    return {
      images: [
        {
          imgName: 'sub1.jpg',
          pieceName: 'Yummy',
          materials: 'Oil on Canvas',
          year: '2020'
        },
        {
          imgName: 'sub2.jpg',
          pieceName: 'Tasty',
          materials: 'Acrilic on Canvas',
          year: '2013'
        },
        {
          imgName: 'sub3.jpg',
          pieceName: 'Piccy',
          materials: 'Pencil on Canvas',
          year: '2015'
        },
        {
          imgName: 'sub4.jpg',
          pieceName: 'Elvis',
          materials: 'Poo on Canvas',
          year: '1920'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  .section {
    height: 94vh;
    position: relative;

    &.s1 {
      background-color: olive;
    }

    &.s2 {
      background-color: aliceblue;
    }
  }
}
</style>
