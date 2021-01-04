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
      <p>
        Please order sizes from smallest to largest by putting a number in the 'Size order' box.
        (e.g. smallest = 1, largest = 3)
      </p>
      <div id="sizes" v-for="(size, index) in product.sizes" :key="index">
        <em>Size {{ index + 1 }} <i @click="deleteSize(index)" class="far fa-trash-alt"></i></em>
        <br />
        <TextInput
          id="order-sizing"
          label="Size Order"
          v-model="size.index"
          :placeholder="`e.g. '${index + 1}'`"
        />

        <TextInput
          id="size"
          label="Size"
          v-model="size.size"
          placeholder="e.g. 'small' or '20 x 30'"
        />
        <TextInput id="price" label="Price (£)" v-model="size.price" placeholder="e.g. '12.99'" />
        <TextInput id="qtt" label="Quantity" v-model="size.qty" placeholder="e.g. '4'" />
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
      <TextInput id="qty" label="Quantity" v-model="product.sizes[0].qty" placeholder="e.g. '4'" />
    </div>
    <div>
      <ImageUpload v-model="imgs" />
    </div>
    {{ imgs }}
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'
import ImageUpload from '@/components/form/ImageUpload.vue'

export default {
  name: 'NewProduct',
  components: { TextInput, ImageUpload },
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
            qty: '',
            index: ''
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
