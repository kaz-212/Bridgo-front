<template>
  <div v-if="particular">
    <h1>{{ particular.product.name }}</h1>
    <ShopCarousel :product="particular.product" />
  </div>
</template>

<script>
import ShopCarousel from '@/components/Shop/ShopCarousel.vue'

export default {
  name: 'ShowItem',
  components: { ShopCarousel },
  computed: {
    id() {
      return this.$route.params.id
    },
    particular() {
      return this.$store.getters['inventory/getProductById'](this.id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
