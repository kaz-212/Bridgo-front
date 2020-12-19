<template>
  <div id="exhibitions">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'exhibitions',
  created() {}
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}

#exhibitions {
  margin-left: 15vw;
  width: 100%;
}
</style>
