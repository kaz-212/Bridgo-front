<template>
  <div>
    <h4 class="button">
      <slot></slot>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'StandardButton'
}
</script>

<style lang="scss" scoped>
.button {
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  padding: 5px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    // border-bottom: rgb(197, 197, 197);
    // border-left: rgb(197, 197, 197);
    // border-top: 1px solid black;
    // border-right: 1px solid black;

    box-shadow: 0 0.5em 0.5em -0.4em #2f302c;
    transform: translateY(-0.15em);
    cursor: pointer;
  }
}
</style>
