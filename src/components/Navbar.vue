<template>
  <nav id="nav">
    <div class="logo">
      <h4><router-link to="/">BRIJ</router-link></h4>
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
      <router-link class="nav-link" :class="{ 'sixth-link': !hideLinks }" to="/shop"
        ><i class="fas fa-shopping-cart"></i
      ></router-link>
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
      hideLinks: true
    }
  },
  methods: {
    navSlide() {
      this.hideLinks = !this.hideLinks
    }
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
    min-height: 60px;
    height: 6vh;
    position: sticky;
    top: 0;
    z-index: 1000;
    // background-color: $navslider;

    a,
    i {
      text-decoration: none;
      color: $navcolour;
    }

    .logo {
      a {
        letter-spacing: 5px;

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
          &:hover {
            color: $navhover;
          }
        }
        &:hover {
          color: $navhover;
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
