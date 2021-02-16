<template>
  <div v-if="basketItems">
    <h1>Your Items</h1>
    <section class="container">
      <form action="#">
        <table cellspacing="0">
          <tbody>
            <tr v-for="(item, index) in basketItems" :key="item.particular._id">
              <td class="image">
                <div class="img-container">
                  <img :src="item.product.images[0].thumbnail" :alt="item.product.name" />
                </div>
              </td>
              <td class="details">
                <div class="name">
                  <span
                    ><router-link :to="{ name: 'ShowItem', params: { id: item.product._id } }">{{
                      item.product.name
                    }}</router-link></span
                  >
                  <span class="size">
                    <em>{{ item.particular.size != 'N/A' ? item.particular.size : '' }}</em></span
                  >
                </div>
              </td>
              <td class="qty">
                <select
                  :name="`${index}-qty`"
                  :id="`${index}-qty`"
                  v-model="item.qty"
                  @change="changeQuantity(item, $event)"
                >
                  <option :selected="item.qty === 1" value="1">1</option>
                  <option :selected="item.qty === 2" value="2">2</option>
                  <option :selected="item.qty === 3" value="3">3</option>
                  <option :selected="item.qty === 4" value="4">4</option>
                  <option :selected="item.qty === 5" value="5">5</option>
                  <option :selected="item.qty === 6" value="6">6</option>
                  <option :selected="item.qty === 7" value="7">7</option>
                  <option :selected="item.qty === 8" value="8">8</option>
                  <option :selected="item.qty === 9" value="9">9</option>
                  <option :selected="item.qty === 10" value="10">10</option>
                </select>
              </td>
              <td>£ {{ (item.particular.price / 100).toFixed(2) }}</td>
              <td><i @click="removeItem(item)" class="far fa-trash-alt"></i></td>
            </tr>
            <tr class="final-row">
              <td class="empty"></td>
              <td class="empty"></td>
              <td><strong>Total</strong></td>
              <td class="total-price">
                <strong>£ {{ (totalPrice / 100).toFixed(2) }}</strong>
              </td>
              <td>+ shipping</td>
            </tr>
          </tbody>
        </table>
        <div class="checkout-container">
          <div class="checkout">
            <router-link :to="{ name: 'Checkout' }"
              ><StandardButton text="Continue to Checkout"
            /></router-link>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import StandardButton from '@/components/Buttons/StandardButton.vue'

export default {
  name: 'Basket',
  components: {
    StandardButton
  },
  data() {
    return {
      shipping: ''
    }
  },
  computed: {
    basketItems() {
      return this.$store.state.basket.basket
    },
    totalPrice() {
      let sum = 0
      /* eslint-disable */
      for (const item of this.basketItems) {
        sum += item.particular.price * item.qty
      }
      return sum
    }
  },
  methods: {
    changeQuantity(item, event) {
      this.$store.dispatch('basket/updateQuantity', { qty: parseInt(event.target.value, 10), item })
    },
    removeItem(item) {
      if (confirm('Are you sure you want to remove this from your basket?')) {
        this.$store.dispatch('basket/removeItem', item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 5em;
  margin-left: 10vw;
}
.container {
  width: 60%;
  margin: 5vh auto;
  background: white;
  border-radius: 10px;
  padding: 10px;
  position: relative;

  table {
    width: 95%;
    margin: 10px auto;
    td {
      text-align: center;
      &:not(.empty) {
        border-bottom: 1px solid #ddd;
      }
      &.details {
        .name {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .size {
            color: $subInfo;
          }
          a {
            // text-decoration: none;
            cursor: pointer;
            color: #66669c;
          }
        }
      }

      &.image {
        display: flex;
        align-items: center;
        justify-content: center;
        // border-right: 1px solid grey;
        .img-container {
          height: 130px;
          width: 130px;
          margin: 10px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }

      &.qty {
        select {
          padding: 2px;
          border-radius: 4px;
          background: white;
        }
      }

      &.total-price {
        min-width: 80px;
      }
    }
    .final-row {
      height: 40px;
    }
  }
  .checkout-container {
    width: 100%;
    .checkout {
      margin: 15px 2.5%;
      width: 220px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}

i {
  cursor: pointer;
}
</style>
