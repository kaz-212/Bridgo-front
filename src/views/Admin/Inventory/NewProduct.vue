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
        <div id="sizes" v-for="(detail, index) in product.details" :key="index">
          <em>Size {{ index + 1 }} <i @click="deleteSize(index)" class="far fa-trash-alt"></i></em>
          <br />
          <TextInput
            :id="`size-${index}`"
            label="Size"
            v-model="detail.size"
            placeholder="e.g. 'small' or '20 x 30'"
          />
          <TextInput
            :id="`price-${index}`"
            label="Price (£)"
            v-model="detail.price"
            placeholder="e.g. '12.99'"
          />
          <TextInput
            :id="`shipping-cost-${index}`"
            label="Shipping Cost(£)"
            v-model="detail.shippingCost"
            placeholder="e.g. '10.50'"
          />

          <TextInput
            :id="`qty-${index}`"
            label="Quantity"
            v-model="detail.unitsRemaining"
            placeholder="e.g. '4'"
          />
        </div>
        <button @click.prevent="addSize">Add Size</button>
      </div>
      <div v-if="!product.sizingApplicable">
        <TextInput
          id="price"
          label="Price (£)"
          v-model="product.details[0].price"
          placeholder="e.g. '12.99'"
        />
        <TextInput
          id="shipping-cost"
          label="Shipping Cost (£)"
          v-model="product.details[0].shippingCost"
          placeholder="e.g. '10.50'"
        />
        <TextInput
          id="qty"
          label="Quantity"
          v-model="product.details[0].unitsRemaining"
          placeholder="e.g. '4'"
        />
      </div>
      <div>
        <ImageUpload v-model="imgs" />
      </div>
      <button @click.prevent="submitProduct">Add Product</button>
    </form>
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
        details: [
          {
            size: '',
            price: '12.99',
            unitsRemaining: '4',
            shippingCost: '10.50'
            // index: 0
          }
        ],
        sizingApplicable: false
      },
      imgs: ''
    }
  },
  methods: {
    addSize() {
      this.product.details.push({
        size: '',
        price: '',
        unitsRemaining: '',
        shippingCost: ''
        // index: this.product.details.length
      })
    },
    deleteSize(index) {
      this.product.details.splice(index, 1)
    },
    async submitProduct() {
      // if details not applicable, replace details array with below
      /* eslint-disable */
      if (!this.product.sizingApplicable) {
        const details = [
          {
            size: 'N/A',
            price: this.product.details[0].price,
            unitsRemaining: this.product.details[0].unitsRemaining,
            shippingCost: this.product.details[0].shippingCost
            // index: 0
          }
        ]
        this.product.details = details
      }
      const fd = new FormData()
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('product', JSON.stringify(this.product))
      try {
        await this.$store.dispatch('inventory/submitProduct', fd)
      } catch (e) {
        console.log(e.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
