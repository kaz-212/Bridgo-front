<template>
  <nav id="nav">
    <h1>Admin</h1>
    <div class="nav-links">
      <router-link class="nav-link" :class="{ active: ordersRoute }" :to="{ name: 'AllOrders' }"
        >Orders <span class="notification">{{ notifs }}</span></router-link
      >

      <router-link class="nav-link" :class="{ active: projectRoute }" to="/admin/projects"
        >Projects</router-link
      >
      <router-link class="nav-link" :class="{ active: inventoryRoute }" to="/admin/inventory"
        >Inventory</router-link
      >
      <router-link class="nav-link" :class="{ active: exhibitionRoute }" to="/admin/exhibitions"
        >Exhibition</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminNav',
  computed: {
    projectRoute() {
      return this.$route.matched[1] ? this.$route.matched[1].name === 'Projects' : false
    },
    inventoryRoute() {
      return this.$route.matched[1] ? this.$route.matched[1].name === 'Inventory' : false
    },
    exhibitionRoute() {
      return this.$route.matched[1] ? this.$route.matched[1] === 'AdminExhibitions' : false
    },
    ordersRoute() {
      return this.$route.matched[1] ? this.$route.matched[1].name === 'Orders' : false
    },
    notifs() {
      return this.$store.getters['orders/getNumberOfNotifs']
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
  top: 0;

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

      .notification {
        background-color: red;
        width: 15px;
        border-radius: 2px;
        color: white;
      }
    }
  }
}
</style>
