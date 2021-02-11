<template>
  <router-link :to="{ name: 'ShowItem', params: { id: product._id } }">
    <article class="card">
      <div class="image-container">
        <img :src="product.images[0].imgURL" :alt="product.name" />
      </div>
      <div class="product-info">
        <h3>{{ product.name }}</h3>
        <p>£{{ (product.particulars[0].price / 100).toFixed(2) }}</p>
      </div>
    </article>
  </router-link>
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
  position: relative;
  border-radius: 5px;

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
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: white;
    position: absolute;
    display: flex;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: all 0.5s ease-out;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }

    h3 {
      color: steelblue;
      letter-spacing: 1px;
    }
  }
}
</style>
