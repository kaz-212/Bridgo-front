<template>
  <article class="card">
    <router-link :to="{ name: 'ShowItem', params: { id: product._id } }">
      <div class="image-container">
        <img :src="product.images[0].imgURL" :alt="product.name" />
      </div>
    </router-link>
    <!-- <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>£{{ (product.particulars[0].price / 100).toFixed(2) }}</p>
    </div> -->
  </article>
</template>

<script>
export default {
  name: 'ProductWindow',
  props: { product: Object }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  flex-direction: column;
  width: 285px;

  .image-container {
    // height: 190px;
    height: 260px;
    width: 260px;
    // width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    // background-color: black;

    img {
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
    h3 {
      color: steelblue;
      letter-spacing: 1px;
    }
  }
}
</style>
