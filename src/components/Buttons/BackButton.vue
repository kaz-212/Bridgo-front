<template>
  <div>
    <router-link :to="{ name: whereTo }"
      ><i class="left fas fa-arrow-left"></i>
      <h3>{{ text }}</h3></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: { whereTo: String, text: String }
}
</script>

<style lang="scss" scoped>
div {
  transition: all 0.2s;
  a {
    text-decoration: none;
    h3 {
      display: inline;
      transition: all 0.5s ease-out;
      color: #757575;
    }
    .left {
      margin-right: 7px;
      transition: all 0.5s ease-out;
      color: #757575;
    }
  }
  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #2f302c;
    transform: translateY(-0.15em);
  }
}
</style>
