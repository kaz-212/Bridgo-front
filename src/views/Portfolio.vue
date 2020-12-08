<template>
  <div id="main">
    <section class="section">
      <div class="left-side">
        <PortfolioWindow :class="{ hide: slide !== 1 }" class="window" :image="images[0]" />
        <PortfolioWindow :class="{ hide: slide !== 2 }" class="window " :image="images[2]" />
      </div>
      <div class="right-side">
        <PortfolioWindow :class="{ hide: slide !== 1 }" class="window" :image="images[1]" />
        <PortfolioWindow :class="{ hide: slide !== 2 }" class="window " :image="images[3]" />
      </div>
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
      slide: 1,
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
  },
  methods: {
    throttle(fn, delay) {
      /* eslint-disable consistent-return */

      let last = 0
      return (...args) => {
        const now = new Date().getTime()
        if (now - last < delay) {
          return
        }
        last = now
        return fn(...args)
      }
    }
  },
  mounted() {
    window.addEventListener(
      'wheel',
      this.throttle(event => {
        if (event.deltaY < 0) {
          this.slide -= 1
        } else if (event.deltaY > 0) {
          this.slide += 1
        }
      }, 1000)
    )
  }
}
</script>

<style lang="scss" scoped>
#main {
  // height: 94vh;
  .section {
    // height: 100vh;
    width: 100%;
    position: relative;
    // background-color: olive;
    height: 91vh;
    display: flex;

    .left-side {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right-side {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hide {
      display: none;
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
