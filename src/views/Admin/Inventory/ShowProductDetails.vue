<template>
  <div id="show-product" v-if="product">
    <section class="product-details">
      <div class="show-details" v-if="!editingProduct">
        <h1>
          {{ product.name }}
          <button @click="editingProduct = true"><i class="fas fa-edit"></i></button>
        </h1>
        <h3>Product Details</h3>

        <p>Type: {{ product.type }}</p>

        <p>Description: {{ product.description }}</p>
        <p>On Show: {{ product.onShow }}</p>
        <p>Images:</p>
        <div id="images" v-for="image of product.images" :key="image._id">
          <img :src="image.thumbnail" />
        </div>
      </div>
      <div class="editDetails" v-if="editingProduct">
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

      <h2>
        Sizes
      </h2>
    </section>
    <section class="sizes">
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Units Remaining</th>
            <th>Units Sold</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="particular in product.particulars" :key="particular._id">
            <td>{{ particular.size.name }}</td>
            <td>£{{ particular.price }}</td>
            <td>{{ particular.unitsRemaining }}</td>
            <td>{{ particular.unitsSold }}</td>
            <td><i class="fas fa-edit"></i></td>
            <td><i class="far fa-trash-alt"></i></td>
          </tr>
        </tbody>
      </table>
    </section>
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
      editingProduct: false,
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
      this.$store
        .dispatch('inventory/editProduct', { id: this.product._id, fd })
        .then((this.editingProduct = false))
    }
  }
}
</script>

<style lang="scss" scoped></style>
