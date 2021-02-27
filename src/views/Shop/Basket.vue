<template>
  <div class="page" v-if="basketItems">
    <h1>BASKET</h1>
    <section class="container">
      <form v-if="basketItems.length > 0" action="#">
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
                  <span class="unit-price">£ {{ (item.particular.price / 100).toFixed(2) }}</span>
                  <span class="size">
                    <em>{{ item.particular.size != 'N/A' ? item.particular.size : '' }}</em></span
                  >
                </div>
              </td>
              <td class="qty">
                <QtySelecta
                  v-model:qty="item.qty"
                  :index="index"
                  @dispatch-qty="changeQuantity(item)"
                />
              </td>
              <td>£ {{ ((item.particular.price * item.qty) / 100).toFixed(2) }}</td>
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
              ><StandardButton> Continue to Checkout </StandardButton></router-link
            >
          </div>
        </div>
      </form>
      <div v-else class="empty-basket"><h2>No items in your basket :(</h2></div>
    </section>
  </div>
</template>

<script>
import StandardButton from '@/components/Buttons/StandardButton.vue'
import QtySelecta from '@/components/form/QtySelecta.vue'

export default {
  name: 'Basket',
  components: {
    StandardButton,
    QtySelecta
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
    removeItem(item) {
      if (confirm('Are you sure you want to remove this from your basket?')) {
        this.$store.dispatch('basket/removeItem', item)
      }
    },
    changeQuantity(item) {
      this.$store.dispatch('basket/updateQuantity', { qty: parseInt(item.qty, 10), item })
    }
  }
}

// TODO basket h1 is fixed and moves on scroll
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  margin-top: $navheight;
  h1 {
    animation: letterShade 2s ease forwards;
    writing-mode: vertical-rl;
    display: inline-block;
    text-orientation: upright;
    font-size: 56px;
    margin: auto 0 auto 10%;
  }
  .container {
    width: 60%;
    margin: 5vh auto;
    background: -webkit-linear-gradient(to bottom, #79d3e157, #c187ca4f);
    background: linear-gradient(to bottom, #79d3e157, #c187ca4f);
    // background: white;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    animation: boxShade 2s ease forwards;
    .empty-basket {
      height: 30vh;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 30px;
      }
    }
    table {
      width: 95%;
      margin: 10px auto;
      td {
        text-align: center;
        &:not(.empty) {
          border-bottom: 1px solid #ffffff7a;
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
          .unit-price {
            color: $subInfo;
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

        // &.qty {
        //   select {
        //     padding: 2px;
        //     border-radius: 4px;
        //     background: rgba(255, 255, 255, 0.219);
        //     -moz-appearance: none;
        //     cursor: pointer;
        //   }
        // }

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
        width: 215px;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
}
i {
  cursor: pointer;
}
</style>
