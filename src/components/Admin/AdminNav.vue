<template>
  <nav id="nav">
    <h1>Admin</h1>
    <div class="nav-links">
      <router-link class="nav-link" :class="{ active: projectRoute }" to="/admin/projects"
        >Projects</router-link
      >
      <router-link class="nav-link" :class="{ active: inventoryRoute }" to="/admin/inventory"
        >Inventory</router-link
      >
      <router-link class="nav-link" :class="{ active: portfolioRoute }" to="/admin/portfolio"
        >Portfolio</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminNav',
  data() {
    return {
      projectRoute: false,
      inventoryRoute: false,
      portfolioRoute: false
    }
  },
  created() {
    if (this.$route.matched[1].name === 'AdminProject') {
      this.projectRoute = true
      this.inventoryRoute = false
      this.portfolioRoute = false
    } else if (this.$route.matched[1].name === 'AdminInventory') {
      this.projectRoute = false
      this.inventoryRoute = true
      this.portfolioRoute = false
    } else if (this.$route.matched[1].name === 'AdminPortfolio') {
      this.projectRoute = false
      this.inventoryRoute = false
      this.portfolioRoute = true
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  // float: left;
  height: 100%;
  background-color: olive;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;

  h1 {
    margin-top: 0;
    margin-left: 0;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;

    .nav-link {
      color: white;
      text-decoration: none;
      cursor: pointer;

      &.active {
        transform: scale(1.1);
        color: rgb(63, 52, 52);
      }
    }
  }
}
</style>
