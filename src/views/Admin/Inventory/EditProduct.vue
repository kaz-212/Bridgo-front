<template>
  <div id="edit-product" v-if="product">
    <h1>Edit Product</h1>
    <form action="#">
      <h3>Product Details</h3>
      <TextInput id="name" label="Product Name: " v-model="product.name" />
      <label for="type">Product Type: </label>
      <br />
      <select id="type" v-model="product.type">
        <option value="print" :selected="product.type === 'print'">Print</option>
        <option value="piece">Piece</option>
        <option value="other">Other</option>
      </select>
      <br />
      <label for="description">Product Description: </label>
      <textarea id="description" rows="3" v-model="product.description"></textarea>

      <div id="images">
        <DeleteImage :images="product.images" v-model="deleteFilenames" />
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
  name: 'ViewProductDetails',
  components: { TextInput, ImageUpload, DeleteImage },
  data() {
    return {
      imgs: '',
      deleteFilenames: [],
      sizingApplicable: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    product() {
      return this.$store.getters['inventory/getProductById'](this.id)
    }
  },
  methods: {
    editProduct() {
      // delete images before sending to server
      const updatedImages = this.product.images.filter(
        image => !this.deleteFilenames.includes(image.filename)
      )
      this.product.images = updatedImages
      const fd = new FormData()
      /* eslint-disable*/
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('product', JSON.stringify(this.product))
      fd.append('filenames', JSON.stringify(this.deleteFilenames))
      this.$store.dispatch('inventory/editProduct', { id: this.product._id, fd })
    }
  }
}
</script>

<style lang="scss" scoped></style>
