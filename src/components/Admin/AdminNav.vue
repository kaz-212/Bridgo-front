<template>
  <nav id="nav">
    <h1>Admin</h1>
    <div class="nav-links">
      <router-link class="nav-link" :class="{ 'first-link': !hideLinks }" to="/admin/projects"
        >Projects</router-link
      >
      <router-link class="nav-link" :class="{ 'first-link': !hideLinks }" to="/admin/inventory"
        >Inventory</router-link
      >
      <router-link class="nav-link" :class="{ 'first-link': !hideLinks }" to="/admin/portfolio"
        >Portfolio</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminNav',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#nav {
  float: left;
  height: 100vw;
  background-color: olive;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    }
  }
}
</style>
