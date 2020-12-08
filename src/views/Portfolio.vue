<template>
  <div id="main">
    <div class="menu">
      <div class="menu-point" :class="{ active: slide === 1 }" @click="changeSlide(1)"></div>
      <div class="menu-point" :class="{ active: slide === 2 }" @click="changeSlide(2)"></div>
    </div>
    <section class="section">
      <div class="left-side">
        <PortfolioWindow
          :class="{ destroy: delaySlide !== 1, hide: slide !== 1, show: slide === 1 }"
          class="window"
          :image="images[1]"
        />
        <PortfolioWindow
          :class="{ destroy: delaySlide !== 2, hide: slide !== 2, show: slide === 2 }"
          class="window "
          :image="images[2]"
        />
      </div>
      <div class="right-side">
        <PortfolioWindow
          :class="{ destroy: delaySlide !== 1, hide: slide !== 1, show: slide === 1 }"
          class="window"
          :image="images[0]"
        />
        <PortfolioWindow
          :class="{ destroy: delaySlide !== 2, hide: slide !== 2, show: slide === 2 }"
          class="window "
          :image="images[3]"
        />
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
      delaySlide: 1,
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
  watch: {
    slide(newVal) {
      if (newVal > 2) {
        this.slide = 1
      } else if (newVal < 1) {
        this.slide = 2
      }
      setTimeout(() => {
        this.delaySlide = newVal
      }, 350)
    }
  },
  methods: {
    changeSlide(n) {
      this.slide = n
    },

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
      }, 2000)
    )
  }
}
</script>

<style lang="scss" scoped>
#main {
  // height: 94vh;
  .section {
    // height: 100vh;
    width: 100vw;
    left: 0;
    position: relative;
    // background-color: rgb(92, 92, 6);
    height: 91vh;
    display: flex;

    .left-side {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 6%;

      .hide {
        animation: leftImageSwoop 0.5s ease-in 1 forwards;
      }

      .show {
        animation: topImageSwoop 0.5s ease-out 1 forwards;
      }

      .destroy {
        display: none;
      }
    }
    .right-side {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10%;

      .hide {
        animation: rightImageSwoop 0.5s ease-in 1 forwards;
      }

      .show {
        animation: bottomImageSwoop 0.5s ease-out 1 forwards;
        background-color: olive;
      }

      .destroy {
        display: none;
      }
    }
  }

  @keyframes rightImageSwoop {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100vw);
    }
  }

  @keyframes leftImageSwoop {
    from {
      transform: translateX(0vw);
    }
    to {
      transform: translateX(-100vw);
    }
  }

  @keyframes topImageSwoop {
    from {
      transform: translateY(-90vh);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes bottomImageSwoop {
    from {
      transform: translateY(90vh);
    }
    to {
      transform: translateY(0);
    }
  }

  .menu {
    position: fixed;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;

    .menu-point {
      cursor: pointer;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid black;
      background-color: #fff;
      display: block;
      margin: 1rem 0;
      opacity: 0.6;
      transition: 0.4s ease all;

      &.active {
        opacity: 1;
        transform: scale(1.3);
      }
    }
  }
}
</style>
