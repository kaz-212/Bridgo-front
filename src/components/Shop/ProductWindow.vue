<template>
  <article class="card">
    <router-link :to="{ name: 'ShowItem', params: { id: particular._id } }">
      <div class="image-container">
        <img :src="particular.product.images[0].thumbnail" :alt="particular.product.name" />
      </div>
    </router-link>
    <div class="product-info">
      <h3>{{ particular.product.name }}</h3>
      <p>£{{ particular.size_price_qty[0].price }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductWindow',
  props: { particular: Object }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 5px;
  .image-container {
    height: 190px;
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      // border: 1px solid springgreen;
      max-height: 100%;
      max-width: 100%;
    }
  }
  .product-info {
    display: flex;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3,
    p {
      color: steelblue;
    }
  }
}
</style>
