<template>
  <div id="edit-product" v-if="particular">
    <h1>Edit Product</h1>
    <form action="#"></form>
  </div>
</template>

<script>
export default {
  name: 'Edit Product',
  components: {},
  data() {
    return {
      imgs: '',
      deleteFilenames: [],
      sizingApplicable: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    product() {
      return this.$store.inventory.products
    },
    particular() {
      return this.$store.getters['inventory/getProductById'](this.id)
    },
    sizes() {
      return this.particular.size_price_qty
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
