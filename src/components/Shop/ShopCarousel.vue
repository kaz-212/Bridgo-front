<template>
  <div v-if="product" class="grid-container">
    <div class="img-thumbs">
      <div
        class="side-img"
        :class="{ selected: selected == index }"
        v-for="(img, index) in product.images"
        :key="img._id"
      >
        <img @mouseover="changeSelected(index)" :src="img.thumbnail" alt="product-image" />
      </div>
    </div>
    <div class="main-img">
      <img :src="product.images[selected].imgURL" alt="main-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCarousel',
  props: { product: Object },
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    changeSelected(index) {
      this.selected = index
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 8% 40% 1fr;

  .img-thumbs {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

    .side-img {
      width: 80px;
      margin: 5px 5px;
      img {
        max-width: 100%;
        cursor: pointer;
        display: block;
      }
    }

    .selected {
      border: 5px solid red;
    }
  }

  .main-img {
    width: 40vw;
    height: 30vw;
    // background: olive;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
