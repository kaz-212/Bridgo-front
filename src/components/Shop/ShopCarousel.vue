<template>
  <div v-if="product" class="grid-box">
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
.grid-box {
  display: grid;
  grid-template-columns: 17% 1fr;
  grid-gap: 5px;
  width: 50vw;

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
      box-shadow: 0 0 2px 2px #910091;
    }
  }

  .main-img {
    width: auto;
    height: 30vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    img {
      max-width: 40vw;
      max-height: 100%;
    }
  }
}
</style>
