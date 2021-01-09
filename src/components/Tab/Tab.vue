<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    name: { required: true },
    selected: { required: false }
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.selected
    }
  }
}
</script>

<style lang="scss" scoped></style>
