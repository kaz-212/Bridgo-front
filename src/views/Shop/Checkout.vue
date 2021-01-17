<template>
  <div>
    <h1>Checkout</h1>
    <h2>Please enter your address for delivery</h2>
    <form action="#">
      <TextInput id="address" label="Address" v-model="shipAddress.address" />
      <TextInput id="city" label="City" v-model="shipAddress.city" />
      <TextInput id="post-code" label="Post Code" v-model="shipAddress.postCode" />
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
import { loadStripe } from '@stripe/stripe-js'
import TextInput from '@/components/form/TextInput.vue'
// import axios from 'axios'

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
      }
    }
  },
  methods: {
    async purchase() {
      try {
        const res = await stripe.createToken(card)
        console.log(res)
      } catch (err) {
        console.log(err)
        this.$forceUpdate()
      }
    }
  },
  mounted() {
    // if statement so it doesn't re-create card every time mounted
    if (typeof card == 'undefined') {
      card = elements.create('card', cardStyle)
    }
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
