<template>
  <div>
    <h1>Checkout</h1>
    <form action="#">
      <h2>Please enter your contact details</h2>
      <TextInput id="firstName" label="First Name" v-model="contactDetails.firstName" />
      <TextInput id="lastname" label="Last Name" v-model="contactDetails.lastName" />
      <TextInput id="email" label="Email" v-model="contactDetails.email" />

      <h2>Please enter your address for delivery</h2>
      <TextInput id="address" label="Address" v-model="shipAddress.address" />
      <TextInput id="city" label="City" v-model="shipAddress.city" />
      <TextInput id="post-code" label="Post Code" v-model="shipAddress.postCode" />
      <label for="amount">Amount to pay:</label>
      <h3>£ {{ amount }}</h3>
      <div class="stripe-container">
        <div class="stripe-input">
          <div class="stripe-component" ref="card"></div>
          <button @click.prevent="purchase">Pay Now</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import TextInput from '@/components/form/TextInput.vue'

// 4000058260000005

let stripe
let elements
let card

/* eslint-disable */
const stripePromise = async () => {
  stripe = await loadStripe(
    'pk_test_51I9q9BJX04kOz0bz68A6COMhppHJaV7wJ16J6PgdeR7lzwIj8sGiL8L3wXcp68XlFtILjLTrAOuBfpRfThITMcQW0085oKc7hS'
  )
  elements = stripe.elements()
}
stripePromise()

// style the card input
const cardStyle = {
  style: {
    base: {
      color: '#32325d'
    }
  }
}

// ======== CHANGE TO SHOW ERROR MESSAGE WHEN BASKET EMPTY ========
export default {
  name: 'Checkout',
  components: { TextInput },
  data() {
    return {
      shipAddress: {
        address: '',
        city: '',
        postCode: ''
      },
      contactDetails: {
        firstName: '',
        lastName: '',
        email: ''
      },
      amount: ''
    }
  },
  computed: {
    basketItems() {
      return this.$store.state.basket.basket
    }
  },
  methods: {
    async purchase() {
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
              name: `${this.contactDetails.firstName} ${this.contactDetails.lastName}`
            },
            receipt_email: this.contactDetails.email
          }
        )
        console.log(res)
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
        this.$cookie.setCookie('intent', res.data)
        this.amount = (res.data.amount / 100).toFixed(2)
      } catch (err) {
        // TODO handle error
        console.log(err)
      }
    }
  },
  mounted() {
    // if statement so it doesn't re-create card every time mounted
    if (typeof card == 'undefined') {
      card = elements.create('card', cardStyle)
    }
    this.fetchPaymentIntent()
    card.mount(this.$refs.card)
  }
}
</script>

<style lang="scss" scoped>
.stripe-container {
  height: 6rem;
  width: 35vw;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
  .stripe-input {
    background-color: white;
    border-radius: 6px;
    width: 30vw;
    height: 2rem;
    .stripe-component {
      padding: 8px;
    }
  }
}
</style>
