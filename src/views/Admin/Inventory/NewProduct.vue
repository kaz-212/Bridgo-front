<template>
  <div id="new-product">
    <h1>New Product</h1>
    <TextInput id="name" label="Product Name: " v-model="product.name" />
    <label for="type">Product Type: </label>
    <br />
    <select id="type" v-model="product.type">
      <option value="print" selected>Print</option>
      <option value="piece">Piece</option>
      <option value="other">Other</option>
    </select>
    <br />
    <label for="description">Product Description: </label>
    <textarea id="description" rows="3"></textarea>
    <h3>Sizing and Pricing</h3>

    <label for="sizing-applicable">Do you want to add sizes? </label>
    <input type="checkbox" v-model="sizingApplicable" />

    <div v-if="sizingApplicable">
      <h4>Please put the smallest size first</h4>
      <div id="sizes" v-for="(size, index) in product.sizes" :key="index">
        <em>Size {{ index + 1 }} <i @click="deleteSize(index)" class="far fa-trash-alt"></i></em>
        <br />
        <TextInput id="size" label="Size" v-model="size.size" />
        <label for="size">Size</label>
        <input id="size" type="text" v-model="size.size" placeholder="e.g. 'small' or '20 x 30'" />
        <label for="price">Price (£)</label>
        <input id="price" type="text" v-model="size.price" placeholder="e.g. '12.99'" />
        <label for="qty">Quantity</label>
        <input id="qty" type="text" v-model="size.qty" placeholder="e.g. 4" />
      </div>
      <button @click.prevent="addSize">Add Size</button>
    </div>
    <div v-if="!sizingApplicable">
      <TextInput
        id="price"
        label="Price (£)"
        v-model="product.sizes[0].price"
        placeholder="e.g. '12.99'"
      />

      <label for="qty">Quantity</label>
      <input id="qty" type="text" v-model="product.sizes[0].qty" placeholder="e.g. 4" />
      {{ product }}
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'

export default {
  name: 'NewProduct',
  components: { TextInput },
  data() {
    return {
      product: {
        name: '',
        type: 'print',
        description: '',
        sizes: [
          {
            size: '',
            price: '',
            qty: ''
          }
        ]
      },
      imgs: '',
      sizingApplicable: false
    }
  },
  methods: {
    addSize() {
      this.product.sizes.push({ size: '', price: '', qty: '' })
    },
    deleteSize(index) {
      this.product.sizes.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
