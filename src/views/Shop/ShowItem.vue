<template>
  <div v-if="product" class="main">
    <BackButton whereTo="ShopFront" class="back" />
    <div class="page-container">
      <section class="carousel">
        <ShopCarousel :product="product" />
      </section>
      <section class="product-details">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <label v-if="product.particulars[0].size.name != 'N/A'" for="size-select"
          >Choose Size</label
        >

        <select
          v-if="product.particulars[0].size.name != 'N/A'"
          name="size-select"
          id="size-select"
          v-model="selectedSize"
        >
          <option
            v-for="(particular, index) in product.particulars"
            :key="particular._id"
            :value="index"
            :selected="index == 0"
          >
            {{ particular.size.name }}
          </option>
        </select>
        <br />
        <label for="qty">Quantity</label> <br />
        <QtySelecta v-model:qty="qtySelected" :index="0" />
        <label for="price">Price</label>
        <h3>£{{ computedPrice }}</h3>
        <button @click="addToBasket">Add to Basket</button>
      </section>
    </div>
  </div>
</template>

<script>
import ShopCarousel from '@/components/Shop/ShopCarousel.vue'
import BackButton from '@/components/Buttons/BackButton.vue'
import QtySelecta from '@/components/form/QtySelecta.vue'

export default {
  name: 'ShowItem',
  components: { ShopCarousel, BackButton, QtySelecta },
  data() {
    return {
      selectedSize: 0,
      qtySelected: 1
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    product() {
      return this.$store.getters['inventory/getProductById'](this.id)
    },
    computedPrice() {
      return ((this.product.particulars[this.selectedSize].price / 100) * this.qtySelected).toFixed(
        2
      )
    },
    basket() {
      return this.$store.state.basket.basket
    }
  },
  methods: {
    addToBasket() {
      /* eslint-disable */
      const item = {}
      item.product = {
        _id: this.product._id,
        name: this.product.name,
        images: this.product.images
      }
      item.qty = this.qtySelected
      item.particular = {
        _id: this.product.particulars[this.selectedSize]._id,
        size: this.product.particulars[this.selectedSize].size.name,
        price: this.product.particulars[this.selectedSize].price
      }
      return this.$store.dispatch('basket/addToBasket', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .back {
    position: absolute;
    top: 14%;
    left: 8%;
  }
  .page-container {
    .carousel {
      position: absolute;
      left: 5%;
      top: 30%;
    }
    .product-details {
      position: absolute;
      right: 28%;
      top: 40%;

      h4 {
        display: inline;
        margin: 0 5px;
      }
    }
  }
}
</style>
