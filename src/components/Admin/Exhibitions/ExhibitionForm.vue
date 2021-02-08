<template>
  <div class="form" action="#">
    <TextInput id="name" label="Name" v-model="exhibition.name" />
    <TextInput id="date" label="Date" v-model="exhibition.date" />
    <TextInput id="gallery" label="Gallery" v-model="exhibition.gallery" />

    <label class="form-item" for="location">Location</label>
    <textarea id="location" v-model="exhibition.location" rows="4" required />
    <label class="form-item" for="description">Description</label>
    <textarea id="description" v-model="exhibition.description" rows="5" required />

    <label class="form-item" for="links">Links</label>
    <div id="links" v-for="(link, index) in exhibition.links" :key="index">
      <em>Link {{ index + 1 }} <i @click="deleteLink(index)" class="far fa-trash-alt"></i></em>
      <input type="text" v-model="link.name" placeholder="name" />
      <input type="text" v-model="link.URL" placeholder="URL" />
    </div>
    <button v-if="exhibition.links.length === 0" @click.prevent="addLink">Add Link</button>
    <button v-if="exhibition.links.length > 0" @click.prevent="addLink">Add Another Link</button>

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
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'

export default {
  name: 'ExhibitionForm',
  components: { TextInput },
  props: {},
  data() {
    return {
      exhibition: {
        name: '',
        date: '',
        description: '',
        gallery: '',
        location: '',
        isUpcoming: true,
        onShow: true,
        links: []
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

    addLink() {
      this.exhibition.links.push({ URL: '', name: '' })
    },

    deleteLink(index) {
      this.exhibition.links.splice(index, 1)
    },

    deleteImage(index) {
      this.imgs.splice(index, 1)
    },

    async submitExhibition() {
      // TODO add image indexes to order images
      const fd = new FormData()
      /* eslint-disable */
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('exhibition', JSON.stringify(this.exhibition))
      this.$store.dispatch('exhibition/submitExhibition', fd)
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
