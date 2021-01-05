<template>
  <div id="new-product">
    <form action="#">
      <h1>New Product</h1>
      <h3>Product Details</h3>
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
      <textarea id="description" rows="3" v-model="product.description"></textarea>

      <h3>Sizing and Pricing</h3>
      <label for="sizing-applicable">Do you want to add sizes? </label>
      <input type="checkbox" v-model="product.sizingApplicable" />

      <div v-if="product.sizingApplicable">
        <p>
          Please order sizes from smallest to largest by putting a number in the 'Size order' box.
          (e.g. smallest = 1, largest = 3)
        </p>
        <div id="sizes" v-for="(size, index) in product.sizes" :key="index">
          <em>Size {{ index + 1 }} <i @click="deleteSize(index)" class="far fa-trash-alt"></i></em>
          <br />
          <TextInput
            id="size"
            label="Size"
            v-model="size.size"
            placeholder="e.g. 'small' or '20 x 30'"
          />
          <TextInput id="price" label="Price (£)" v-model="size.price" placeholder="e.g. '12.99'" />
          <TextInput id="qty" label="Quantity" v-model="size.qty" placeholder="e.g. '4'" />
        </div>
        <button @click.prevent="addSize">Add Size</button>
      </div>
      <div v-if="!product.sizingApplicable">
        <TextInput
          id="price"
          label="Price (£)"
          v-model="product.sizes[0].price"
          placeholder="e.g. '12.99'"
        />
        <TextInput
          id="qty"
          label="Quantity"
          v-model="product.sizes[0].qty"
          placeholder="e.g. '4'"
        />
      </div>
      <div>
        <ImageUpload v-model="imgs" />
      </div>
      <button @click.prevent="submitProduct">Add Product</button>
    </form>
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
        name: 'Tasty Print',
        type: 'print',
        description: 'Good Good Print',
        sizes: [
          {
            size: '',
            price: '12.99',
            qty: '4',
            index: 0
          }
        ],
        sizingApplicable: false
      },
      imgs: ''
    }
  },
  methods: {
    addSize() {
      this.product.sizes.push({
        size: '',
        price: '',
        qty: '',
        index: this.product.sizes.length
      })
    },
    deleteSize(index) {
      this.product.sizes.splice(index, 1)
    },
    submitProduct() {
      // if sizes not applicable, replace sizes array with below
      /* eslint-disable */
      if (!this.product.sizingApplicable) {
        const size = [
          {
            size: 'unisize',
            price: this.product.sizes[0].price,
            qty: this.product.sizes[0].qty,
            index: 0
          }
        ]
        this.product.sizes = size
      } else {
        // make sure all size index's are unique
        const valuesSoFar = []
        for (const size of this.product.sizes) {
          if (!valuesSoFar.includes(size.index)) {
            valuesSoFar.push(size.index)
          } else {
            return alert("Please make sure the numbers in 'Size Order' are all unique")
          }
        }
      }
      const fd = new FormData()
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('product', JSON.stringify(this.product))
      return this.$store.dispatch('inventory/submitProduct', fd)
    }
  }
}
</script>

<style lang="scss" scoped></style>
