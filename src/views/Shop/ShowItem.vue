<template>
  <div v-if="particular">
    <router-link :to="{ name: 'ShopFront' }"
      ><button><i class="fas fa-sm fa-chevron-left"></i> Back</button></router-link
    >
    <div class="grid-container">
      <section class="carousel">
        <ShopCarousel :product="particular.product" />
      </section>
      <section class="product-details">
        <h2>{{ particular.product.name }}</h2>
        <p>{{ particular.product.description }}</p>
        <label for="size-select">Choose Size</label>

        <select name="size-select" id="size-select" v-model="selectedSize">
          <option
            v-for="(size, index) in particular.size_price_qty"
            :key="size._id"
            :value="index"
            :selected="index == 0"
          >
            {{ size.size.size }}
          </option>
        </select>
        <br />
        <label for="qty">Quantity</label> <br />
        <input type="number" name="qty" id="qty" v-model="qtySelected" min="1" max="100" />
        <label for="price">Price</label>
        <h3>£{{ computedPrice }}</h3>
        <button @click="addToBasket">Add to Basket</button>
      </section>
    </div>
  </div>
</template>

<script>
import ShopCarousel from '@/components/Shop/ShopCarousel.vue'

export default {
  name: 'ShowItem',
  components: { ShopCarousel },
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
    particular() {
      return this.$store.getters['inventory/getProductById'](this.id)
    },
    computedPrice() {
      return (this.particular.size_price_qty[this.selectedSize].price * this.qtySelected).toFixed(2)
    }
  },
  methods: {
    addToBasket() {
      /* eslint-disable */
      if (this.particular.size_price_qty[this.selectedSize].qty >= this.qtySelected) {
        const item = {}
        item.particular = this.particular
        item.qty = this.qtySelected
        item.size = this.particular.size_price_qty[this.selectedSize]._id
        return console.log(item.particular)
      }
      return alert(
        `Sorry, we only have ${this.particular.size_price_qty[this.selectedSize].qty} left in stock`
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 50%);

  .product-details {
    h4 {
      display: inline;
      margin: 0 5px;
    }
  }
}
</style>
