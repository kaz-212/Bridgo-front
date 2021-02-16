<template>
  <div id="main">
    <div class="menu" v-if="leftSide.length + rightSide.length > 2">
      <div
        class="menu-point"
        v-for="n in leftSide.length"
        :key="n"
        :class="{ active: slide === n - 1 }"
        @click="changeSlide(n - 1)"
      ></div>
    </div>
    <section class="section" @wheel.prevent="animateSlide">
      <div class="left-side">
        <PortfolioWindow
          v-for="(project, index) in leftSide"
          :key="project._id"
          class="window"
          :class="{
            destroy: delaySlide !== index,
            hide: slide !== index,
            show: slide === index
          }"
          :project="project"
        />
      </div>
      <div class="right-side">
        <PortfolioWindow
          v-for="(project, index) in rightSide"
          :key="project._id"
          class="window"
          :class="{
            destroy: delaySlide !== index,
            hide: slide !== index,
            show: slide === index
          }"
          :project="project"
        />
      </div>
      <StandardButton @click="toggleScrollView" text="View All" />
    </section>
  </div>
</template>

<script>
import PortfolioWindow from '@/components/Portfolio/PortfolioWindow.vue'
import StandardButton from '@/components/Buttons/StandardButton.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioWindow,
    StandardButton
  },
  props: { projects: Array },
  emits: ['toggle-scroll-view'],
  data() {
    return {
      slide: 0,
      delaySlide: 0,
      timeUp: true
    }
  },
  computed: {
    leftSide() {
      const leftSide = []
      for (let i = 0; i < this.projects.length; i += 2) {
        leftSide.push(this.projects[i])
      }
      return leftSide
    },
    rightSide() {
      const rightSide = []
      for (let i = 1; i < this.projects.length; i += 2) {
        rightSide.push(this.projects[i])
      }
      return rightSide
    }
  },
  watch: {
    // wait before old images have left screen before bringing in new ones
    slide(newVal) {
      if (newVal >= this.leftSide.length) {
        this.slide = 0
      } else if (newVal < 0) {
        this.slide = this.leftSide.length - 1
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

    animateSlide(evt) {
      if (!this.timeUp) return
      this.timeUp = false
      if (evt.deltaY < 0) {
        this.slide -= 1
      } else if (evt.deltaY > 0) {
        this.slide += 1
      }
      // throttle function call so doesnt get called for every mouse wheel
      setTimeout(() => {
        this.timeUp = true
      }, 2000)
    },

    toggleScrollView() {
      this.$emit('toggle-scroll-view')
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  overflow: hidden;
  position: relative;
  .section {
    max-width: 100vw;
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
      margin-right: 7%;

      .hide {
        animation: rightImageSwoop 0.5s ease-in 1 forwards;
      }

      .show {
        animation: bottomImageSwoop 0.5s ease-out 1 forwards;
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
    right: 4%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: 15px;

    .menu-point {
      cursor: pointer;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid black;
      background-color: #fff;
      display: block;
      margin: 1rem 0.1rem;
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
