<template>
  <div v-if="basketItems.length > 0">
    <h1>Checkout</h1>
    <section class="container">
      <form action="#">
        <h3>Delivery details:</h3>
        <div class="customer-info">
          <div class="name">
            <StyledTextInput
              id="first-name"
              label="First Name"
              v-model="contactDetails.firstName"
            />
          </div>
          <div class="name">
            <StyledTextInput id="last-name" label="Last Name" v-model="contactDetails.lastName" />
          </div>
          <div class="email">
            <StyledTextInput id="email" label="Email" v-model="contactDetails.email" />
          </div>
          <div class="number">
            <StyledTextInput id="number" label="Mobile Number" v-model="contactDetails.phone" />
          </div>
          <div class="address">
            <StyledTextInput id="address" label="Address" v-model="shipAddress.address" />
          </div>
          <div class="city">
            <StyledTextInput id="city" label="City" v-model="shipAddress.city" />
          </div>
          <div class="post-code">
            <StyledTextInput id="post-code" label="Post Code" v-model="shipAddress.postCode" />
          </div>
        </div>
        <div class="payment-info">
          <h3>Payment Details:</h3>
          <div class="stripe-container">
            <div class="stripe-input">
              <div class="stripe-component" ref="card"></div>
            </div>
          </div>
        </div>
      </form>
      <div class="right-half">
        <div class="order-info">
          <label for="subtotal">Subtotal:</label>
          <h3 id="subtotal">£ {{ (subtotal / 100).toFixed(2) }}</h3>
          <label for="shipping-cost">Cost of Shipping:</label>
          <h3 id="shipping-cost">£ {{ (shippingCost / 100).toFixed(2) }}</h3>
          <label for="amount">Amount to pay:</label>
          <h3 id="amount">£ {{ amount }}</h3>
        </div>
        <PayNowButton @click.prevent="purchase" />
      </div>
    </section>
  </div>
  <div v-else>
    <h1>pls add some items to your basket</h1>
  </div>
</template>

<script>
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import StyledTextInput from '@/components/form/StyledTextInput.vue'
import PayNowButton from '@/components/Buttons/PayNowButton.vue'

// 4000058260000005

// TODO when basket empty, display 'pls put items in basket' page
let stripe
let card

/* eslint-disable */
const stripePromise = async () => {
  stripe = await loadStripe(
    'pk_test_51I9q9BJX04kOz0bz68A6COMhppHJaV7wJ16J6PgdeR7lzwIj8sGiL8L3wXcp68XlFtILjLTrAOuBfpRfThITMcQW0085oKc7hS'
  )
  return stripe.elements()
}

// style the card input
const cardStyle = {
  style: {
    base: {
      color: '#32325d'
    }
  }
}

export default {
  name: 'Checkout',
  components: { StyledTextInput, PayNowButton },
  data() {
    return {
      shipAddress: {
        address: '',
        city: '',
        postCode: '4000058260000005'
      },
      contactDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      subtotal: '',
      shippingCost: ''
    }
  },
  computed: {
    basketItems() {
      return this.$store.state.basket.basket
    },
    amount() {
      return ((this.subtotal + this.shippingCost) / 100).toFixed(2)
    }
  },
  methods: {
    async purchase() {
      try {
        const success = this.fetchPaymentIntent()
        if (!success) {
          // if we fetch the payment intent and now theres not enough stock, we need to stop the payment
          // fetching payment intent also checks stock available
          return
        }
        try {
          const res = await stripe.confirmCardPayment(
            this.$cookie.getCookie('intent').client_secret,
            {
              payment_method: {
                card
              },
              shipping: {
                address: {
                  city: this.shipAddress.city,
                  line1: this.shipAddress.address,
                  postal_code: this.shipAddress.postCode
                },
                name: `${this.contactDetails.firstName} ${this.contactDetails.lastName}`,
                phone: this.contactDetails.phone
              },
              receipt_email: this.contactDetails.email
            }
          )
          console.log(res)
          // clear cookie and delete basket

          if (res.paymentIntent) {
            await this.$store.dispatch('inventory/updateInventory', res.paymentIntent) // subtract from inventory using items stored in session
            this.$store.commit('basket/CLEAR_BASKET')
            this.$cookie.removeCookie('intent')
            this.$router.push({ name: 'OnShowExhibitions' })
          } else {
            throw res.error
          }
          // TODO thank you for your purchase
        } catch (err) {
          // TODO proper error handle
          console.log('WOOOOPS', err)
        }
      } catch (err) {
        // TODO proper error handle
        console.log(err)
      }
    },

    async fetchPaymentIntent() {
      try {
        const res = await axios.post(
          'payment-intent',
          { items: this.basketItems },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        )

        // set cookie with client_secret, id and amount to be paid
        const { issue } = res.data
        if (!issue) {
          this.$cookie.setCookie('intent', res.data)
          this.subtotal = res.data.amount.itemsCost
          this.shippingCost = res.data.amount.shippingCost
          return true
        }
        if (issue.size !== 'N/A') {
          alert(
            `I'm sorry, I only have ${issue.remaining} ${issue.name}'s left in stock in size: ${issue.size}. Please select a quantity lower than this for this item.`
          )
        } else {
          alert(
            `I'm sorry, I only have ${issue.remaining} ${issue.name}'s left in stock. Please select a quantity lower than this for this item.`
          )
        }
        this.$router.push({ name: 'Basket' })
        return false
      } catch (err) {
        // TODO handle error
        return console.log(err)
      }
    }
  },
  mounted() {
    // only do this if there are items in the basket
    if (this.basketItems.length > 0) {
      if (typeof card === 'undefined') {
        stripePromise().then(elements => {
          // stripe doesn't like you re-creating card element
          card = elements.create('card', cardStyle)
          this.fetchPaymentIntent()
          card.mount(this.$refs.card)
        })
      } else {
        this.fetchPaymentIntent()
        card.mount(this.$refs.card)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 100px;
  margin-left: 10vw;
}
h3 {
  margin-left: -20px;
}
.container {
  width: 60%;
  max-width: 900px;
  margin: 5vh auto;
  background: #74ebd5;
  background: -webkit-linear-gradient(to bottom, #74ebd5, #acb6e5);
  background: linear-gradient(to bottom, #74ebd5, #acb6e5);
  // background: white;
  border-radius: 10px;
  padding-top: 60px;
  padding-left: 80px;
  position: relative;
  box-shadow: 0 0.5em 0.8em -0.2em #878c78;
  display: flex;
  form {
    width: 60%;
    .customer-info {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 90px);
      grid-column-gap: 24px;
      grid-template-areas:
        'first second'
        'email number'
        'address address'
        'city post';
      .first {
        grid-area: first;
      }
      .second {
        grid-area: second;
      }
      .email {
        grid-area: email;
      }
      .number {
        grid-area: number;
      }
      .address {
        grid-area: address;
      }

      .city {
        grid-area: city;
      }
      .post-code {
        grid-area: post;
      }
    }
    .stripe-container {
      height: 6rem;
      width: 100%;
      // background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612955104/Bridgo/statics/6A91EEF0-A9E9-4198-9601-63D8350F2886_wefe5t.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      .stripe-input {
        // background-color: white;
        color: #595f6e;
        border-radius: 6px;
        // width: 30vw;
        width: 100%;
        height: 2rem;

        .stripe-component {
          padding: 8px;
        }
      }
    }
  }
  .right-half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    .order-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: auto;
      justify-content: center;
    }
  }
}
</style>
