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
          <label for="on-show">Show Product In Shop?</label>
          <input
            type="checkbox"
            name="on-show"
            id="on-show"
            :checked="product.onShow"
            v-model="product.onShow"
          />
          <div id="images">
            <DeleteImage :images="product.images" v-model="deleteFilenames" />
            <ImageUpload v-model="imgs" />
          </div>
          <br />
          <button @click.prevent="editProduct">Submit Changes</button>
          <button @click.prevent="cancelProductChanges">Cancel Changes</button>
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
          <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
          <tr v-for="particular in product.particulars" :key="particular._id">
            <td v-if="editSize != particular._id">{{ particular.size.name }}</td>
            <td v-else><input type="text" v-model="particular.size.name" /></td>
            <td v-if="editSize != particular._id">£{{ particular.price.toFixed(2) }}</td>
            <td v-else><input type="text" v-model="particular.price" /></td>
            <td v-if="editSize != particular._id">{{ particular.unitsRemaining }}</td>
            <td v-else><input type="text" v-model="particular.unitsRemaining" /></td>
            <td v-if="editSize != particular._id">{{ particular.unitsSold }}</td>
            <td v-else><input type="text" v-model="particular.unitsSold" /></td>
            <td v-if="editSize != particular._id">
              <i @click="editSize = particular._id" class="fas fa-edit"></i>
            </td>
            <td v-if="editSize != particular._id">
              <i @click="delParticular(particular._id)" class="far fa-trash-alt"></i>
            </td>
            <td v-else><button @click="editParticular(particular)">Submit Changes</button></td>
          </tr>
          <tr class="new-particular">
            <td v-if="!addSize"></td>
            <td v-else><input type="text" v-model="newSize.size" /></td>
            <td v-if="!addSize"></td>
            <td v-else><input type="text" v-model="newSize.price" /></td>
            <td v-if="!addSize"></td>
            <td v-else><input type="text" v-model="newSize.unitsRemaining" /></td>
            <td v-if="!addSize"></td>
            <td v-else><input type="text" v-model="newSize.unitsSold" /></td>
            <td v-if="!addSize"><button @click="addSize = true">Add Size</button></td>
            <td v-else>
              <button @click="addParticular">Submit</button
              ><button @click="cancelParticular">Cancel</button>
            </td>
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

// TODO text input should be number input

export default {
  name: 'ViewProductDetails',
  components: { TextInput, ImageUpload, DeleteImage },
  data() {
    return {
      editingProduct: false,
      editSize: '',
      imgs: '',
      deleteFilenames: [],
      sizingApplicable: false,
      addSize: false,
      newSize: {
        size: '',
        price: '',
        unitsRemaining: '',
        unitsSold: ''
      }
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
    },
    cancelProductChanges() {
      this.$store.dispatch('inventory/getProducts')
      this.editingProduct = false
    },
    editParticular(particular) {
      this.$store.dispatch('inventory/editParticular', particular)
      this.editSize = ''
    },
    delParticular(id) {
      this.$store.dispatch('inventory/deleteParticular', id)
    },
    addParticular() {
      this.$store.dispatch('inventory/addParticular', {
        particular: this.newSize,
        productId: this.id
      })
      this.newSize.size = ''
      this.newSize.price = ''
      this.newSize.unitsRemaining = ''
      this.newSize.unitsSold = ''
      this.addSize = false
    },
    cancelParticular() {
      this.newSize.size = ''
      this.newSize.price = ''
      this.newSize.unitsRemaining = ''
      this.newSize.unitsSold = ''
      this.addSize = false
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}
</style>
