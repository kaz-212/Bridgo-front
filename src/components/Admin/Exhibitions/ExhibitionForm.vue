<template>
  <div class="form" action="#">
    <label class="form-item" for="name">Name</label>
    <input id="Name" v-model="exhibition.name" type="text" required />
    <label class="form-item" for="date">Date</label>
    <input id="date" v-model="exhibition.date" type="text" required />
    <label class="form-item" for="location">Location</label>
    <input id="location" v-model="exhibition.location" type="text" required />
    <label class="form-item" for="description">Description</label>
    <textarea id="description" v-model="exhibition.description" rows="5" required />
    <div class="image-upload">
      <label for="image">Image(s)</label>
      <input multiple type="file" id="image" ref="fileSelector" @change="onFileSelected" />
    </div>

    <div class="files">
      <div v-for="(img, index) in imgs" :key="index" class="file-display">
        {{ img.name }} <i @click="deleteImage(index)" class="far fa-trash-alt"></i>
      </div>
    </div>

    <!-- proxy button to click -->
    <button @click.prevent="$refs.fileSelector.click()">Choose Image(s)</button>
    <label for="Show">Show this exhibition?</label>
    <input class="check-box" v-model="exhibition.onShow" id="show" type="checkbox" checked />
    <label for="Show">Is this an upcoming Exhibition?</label>
    <input class="check-box" v-model="exhibition.isUpcoming" id="show" type="checkbox" checked />
    <button @click.prevent="submitExhibition">Submit</button>
    <button @click.prevent="cancel">Back</button>
    <button @click.prevent="get">Get</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ExhibitionForm',
  components: {},
  props: {},
  data() {
    return {
      exhibition: {
        name: '',
        date: '',
        description: '',
        location: '',
        isUpcoming: true,
        onShow: true
      },
      imgs: ''
    }
  },
  computed: {},
  methods: {
    onFileSelected() {
      const { files } = this.$refs.fileSelector
      this.imgs = [...this.imgs, ...files]
      console.log(files)
    },

    deleteImage(index) {
      this.imgs.splice(index, 1)
    },

    async submitExhibition() {
      const fd = new FormData()
      this.imgs.forEach(img => fd.append('imgs', img))
      fd.append('exhibition', JSON.stringify(this.exhibition))
      try {
        const res = await axios.post('exhibitions', fd)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    async get() {
      try {
        const res = await axios.get('exhibitions')
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  #image {
    display: none;
  }

  i {
    cursor: pointer;
  }
}
</style>
