<template>
  <nav id="nav" :class="{ scrolling: scrolling }">
    <div class="logo">
      <h4><router-link to="/">Bridget Simpson Art</router-link></h4>
    </div>
    <div class="nav-links" :class="{ 'nav-active': !hideLinks }">
      <router-link class="nav-link" :class="{ 'first-link': !hideLinks }" to="/about"
        >About</router-link
      >
      <router-link class="nav-link" :class="{ 'second-link': !hideLinks }" to="/portfolio"
        >Portfolio</router-link
      >
      <router-link class="nav-link" :class="{ 'third-link': !hideLinks }" to="/shop"
        >Shop</router-link
      >
      <router-link class="nav-link" :class="{ 'fourth-link': !hideLinks }" to="/exhibitions"
        >Exhibitions</router-link
      >
      <router-link class="nav-link" :class="{ 'fifth-link': !hideLinks }" to="/admin"
        >Admin</router-link
      >
      <router-link class="nav-link" :class="{ 'sixth-link': !hideLinks }" :to="{ name: 'Basket' }"
        ><i class="fas fa-shopping-cart"
          ><span v-if="basketItems > 0" class="basket-items">{{ basketItems }}</span></i
        >
      </router-link>
    </div>

    <div class="burger" :class="{ toggle: !hideLinks }" @click="navSlide">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrolling: false,
      hideLinks: true
    }
  },
  computed: {
    basketItems() {
      return this.$store.getters['basket/numberOfItems']
    }
  },
  methods: {
    navSlide() {
      this.hideLinks = !this.hideLinks
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  height: 100vh;
  overflow-x: hidden; // stops us being able to scroll to see translate-x(100%) nav bar

  #nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: $navheight;
    position: fixed;
    top: 0;
    z-index: 10000;
    transition: background 0.5s ease-out, height 0.5s ease-out;
    background: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1614101165/Bridgo/statics/6FD606E8-0E12-4D56-8834-48A13B0F7FB5_jt0zlm.jpg');
    background-size: cover;
    background-position: center;
    // box-shadow: 0 0 6px 3px #8c3a3a;

    &.scrolling {
      background: white;
      height: 5vh;
      a,
      i {
        color: $navcolour;
        text-shadow: none;
      }
    }
    // &:hover {
    //   background: rgba(255, 255, 255, 0.548);
    // }

    a {
      text-decoration: none;
      color: #d2d2d2;
      text-shadow: 0 1px 3px black;
      letter-spacing: 1px;
    }

    i {
      text-decoration: none;
      text-shadow: none;
      color: black;
    }

    .logo {
      a {
        letter-spacing: 5px;
        font-weight: 600;

        &:hover {
          color: $navhover;
        }
      }

      margin-left: 30px;

      @include media('<=tablet') {
        margin-left: 30px;
      }

      @include media('<=tabletPortrait') {
        margin-left: 6%;
      }
    }

    .nav-links {
      display: flex;
      justify-content: space-around;
      width: 30%;
      margin-left: auto;

      .nav-link {
        i {
          position: relative;
          margin-right: 20px;
          font-size: 18px;
          .basket-items {
            display: inline-block;
            text-shadow: none;
            color: black;
            background-color: #dfdfdf;
            border-radius: 8px;
            width: 16px;
            height: 16px;
            font-size: 12px;
            font-family: 'Times New Roman', Times, serif;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: -8px;
            top: -8px;
          }
          &:hover {
            color: $navhover;
          }
        }
        &:hover {
          color: $navhover;
          text-shadow: none;
        }

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background-color: $navhover;
          transition: width 0.3s ease;
        }

        &:hover::after {
          width: 100%;
        }

        @include media('<=tabletPortrait') {
          color: white;
        }
      }

      .first-link {
        animation: navLinkFade 0.5s ease forwards 0.3s;
      }

      .second-link {
        animation: navLinkFade 0.5s ease forwards 0.4s;
      }

      .third-link {
        animation: navLinkFade 0.5s ease forwards 0.5s;
      }

      .fourth-link {
        animation: navLinkFade 0.5s ease forwards 0.6s;
      }

      .fifth-link {
        animation: navLinkFade 0.5s ease forwards 0.7s;
      }

      @include media('<=desktop') {
        width: 40%;
      }

      @include media('<=tablet') {
        width: 50%;
        margin-left: auto;
        margin-right: 20px;
      }

      @include media('<=tabletPortrait') {
        position: absolute;
        height: 100vh;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-right: 0;
        transform: translateX(100%); //moves it off the screen
        transition: transform 0.4s ease-out;
        background-color: $navslider;
      }

      a {
        @include media('<=tabletPortrait') {
          opacity: 0;
        }
      }
    }

    .nav-active {
      transform: translateX(0%);
    }

    .burger {
      display: none;

      @include media('<=tabletPortrait') {
        display: block;
        cursor: pointer;
        margin-left: auto;
        margin-right: 8%;
      }

      div {
        width: 20px;
        height: 2px;
        background-color: $navcolour;
        margin: 5px;
        transition: all 0.5s ease-in-out;
      }

      &.toggle {
        .line1 {
          background-color: white;
          transform: rotate(-135deg) rotateZ(360deg) translate(-3px, -7px);
        }
        .line2 {
          opacity: 0;
        }
        .line3 {
          background-color: white;
          transform: rotate(135deg) rotateZ(360deg) translate(-3px, 7px);
        }
      }
    }
  }
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
