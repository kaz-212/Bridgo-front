<template>
  <div id="inventory">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'inventory'
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#inventory {
  margin-left: 15vw;
  width: 100%;
}
</style>
