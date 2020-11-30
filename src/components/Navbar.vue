<template>
  <nav id="nav">
    <div class="logo">
      <h4><router-link to="/">BRIJ</router-link></h4>
    </div>
    <ul class="nav-links">
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/exhibitions">Exhibitions</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;

  .logo {
    router-link {
      color: red;
      letter-spacing: 5px;
    }
  }

  .nav-links {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
}
</style>
