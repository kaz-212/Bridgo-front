<template>
  <router-link :to="{ name: 'ShowItem', params: { id: product._id } }">
    <article class="card">
      <div class="image-container">
        <img :src="product.images[0].imgURL" :alt="product.name" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>£{{ (product.particulars[0].price / 100).toFixed(2) }}</p>
        </div>
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
  flex-direction: column;
  height: 285px;
  width: 285px;
  position: relative;

  .image-container {
    max-height: 260px;
    max-width: 260px;
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    // box-shadow: 0 0 10px 4px #1c1c2875;
    box-shadow: 5px 5px 8px 2px #1c1c2845;

    img {
      max-height: 260px;
      max-width: 100%;
      display: block;
    }
    .product-info {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      opacity: 0;
      transition: all 0.5s ease-out;

      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }

    h3 {
      color: steelblue;
      letter-spacing: 1px;
    }
  }
}
</style>
