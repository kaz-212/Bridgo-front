<template>
  <div id="edit-product" v-if="particular">
    <h1>Edit Product</h1>
    <form action="#">
      <h3>Product Details</h3>
      <TextInput id="name" label="Product Name: " v-model="particular.product.name" />
      <label for="type">Product Type: </label>
      <br />
      <select id="type" v-model="particular.product.type">
        <option value="print" :selected="particular.product.type === 'print'">Print</option>
        <option value="piece">Piece</option>
        <option value="other">Other</option>
      </select>
      <br />
      <label for="description">Product Description: </label>
      <textarea id="description" rows="3" v-model="particular.product.description"></textarea>

      <h3>Sizing and Pricing</h3>
      <label for="sizing-applicable">Do you want to add sizes? </label>
      <input type="checkbox" v-model="sizingApplicable" />

      <div v-if="sizingApplicable">
        <p>
          Please order sizes from smallest to largest (or the order you wish them to appear in the
          shop)
        </p>
        <div id="sizes" v-for="(size, index) in sizes" :key="index">
          <em>Size {{ index + 1 }} <i @click="deleteSize(index)" class="far fa-trash-alt"></i></em>
          <br />
          <TextInput
            id="size"
            label="Size"
            v-model="size.size.size"
            placeholder="e.g. 'small' or '20 x 30'"
          />
          <TextInput id="price" label="Price (£)" v-model="size.price" placeholder="e.g. '12.99'" />
          <TextInput id="qty" label="Quantity" v-model="size.qty" placeholder="e.g. '4'" />
        </div>
        <button @click.prevent="addSize">Add Size</button>
      </div>
      <div v-if="!sizingApplicable">
        <TextInput
          id="price"
          label="Price (£)"
          v-model="sizes[0].price"
          placeholder="e.g. '12.99'"
        />
        <TextInput id="qty" label="Quantity" v-model="sizes[0].qty" placeholder="e.g. '4'" />
      </div>
      <div id="images">
        <DeleteImage :images="particular.product.images" v-model="deleteFilenames" />
        <ImageUpload v-model="imgs" />
      </div>
      <button @click.prevent="editProduct">Submit Changes</button>
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'
import ImageUpload from '@/components/form/ImageUpload.vue'
import DeleteImage from '@/components/form/DeleteImage.vue'

export default {
  name: 'Edit Product',
  components: { TextInput, ImageUpload, DeleteImage },
  data() {
    return {
      imgs: '',
      deleteFilenames: []
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    product() {
      return this.$store.inventory.products
    },
    particular() {
      return this.$store.getters['inventory/getProductById'](this.id)
    },
    sizes() {
      return this.particular.size_price_qty
    },
    sizingApplicable() {
      return this.sizes.length > 1
    }
  },
  methods: {
    editProduct() {
      // delete images before sending to server
      const updatedImages = this.particular.product.images.filter(
        image => !this.deleteFilenames.includes(image.filename)
      )
      this.particular.product.images = updatedImages
      const fd = new FormData()
      /* eslint-disable*/
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('particular', JSON.stringify(this.particular))
      fd.append('sizes', JSON.stringify(this.sizes))
      fd.append('filenames', JSON.stringify(this.deleteFilenames))
      this.$store.dispatch('inventory/editProduct', {id: this.id, fd})
    }
  }
}
</script>

<style lang="scss" scoped></style>
