<template>
  <div id="main">
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
#main {
  .section {
    height: 100vh;
    width: 100%;
    position: relative;

    .window {
      top: 50%;
      transform: translateY(-50%);
    }
    .right-image {
      position: absolute;
      left: 50%;
    }

    .left-image {
      position: absolute;
      left: 0;
    }

    &.s1 {
      background-color: olive;
      height: 94vh;
    }

    &.s2 {
      background-color: aliceblue;
    }
  }

  // .sections-menu {
  //   position: fixed;
  //   right: 1rem;
  //   top: 50%;
  //   transform: translateY(-50%);

  //   .menu-point {
  //     width: 10px;
  //     height: 10px;
  //     border-radius: 50%;
  //     background-color: #fff;
  //     display: block;
  //     margin: 1rem 0;
  //     opacity: 0.6;
  //     transition: 0.4s ease all;

  //     &.active {
  //       opacity: 1;
  //       transform: scale(1.5);
  //     }
  //   }
  // }
}
</style>
