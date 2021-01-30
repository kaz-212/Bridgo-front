<template>
  <div>
    <router-link :to="{ name: whereTo }"
      ><button><i class="fas fa-sm fa-chevron-left"></i> Back</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: { whereTo: String }
}
</script>

<style lang="scss" scoped></style>
