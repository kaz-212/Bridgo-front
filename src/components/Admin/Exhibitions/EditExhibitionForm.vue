<template>
  <div v-if="exhibition" class="form" action="#">
    <label class="form-item" for="name">Name</label>
    <input id="Name" v-model="exhibition.name" type="text" required />
    <label class="form-item" for="date">Date</label>
    <input id="date" v-model="exhibition.date" type="text" required />
    <label class="form-item" for="location">Location</label>
    <input id="location" v-model="exhibition.location" type="text" required />
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
      <DeleteImage v-model:images="exhibition.images" v-model:deleteFilenames="deleteFilenames" />
      <ImageUpload v-model="imgs" />
    </div>
    <label for="Show">Show this exhibition?</label>
    <input
      class="check-box"
      v-model="exhibition.onShow"
      id="show"
      type="checkbox"
      :checked="exhibition.onShow"
    />

    <label for="Show">Is this an upcoming Exhibition?</label>
    <input
      class="check-box"
      v-model="exhibition.isUpcoming"
      id="show"
      type="checkbox"
      :checked="exhibition.isUpcoming"
    />
    <button @click.prevent="editExhibition">Update</button>
    <button @click.prevent="deleteExhibition">Delete</button>
    <button @click.prevent="cancel">Back</button>
  </div>
</template>

<script>
import DeleteImage from '@/components/form/DeleteImage.vue'
import ImageUpload from '@/components/form/ImageUpload.vue'

export default {
  name: 'EditExhibitionForm',
  components: { DeleteImage, ImageUpload },
  props: { id: String },
  data() {
    return {
      imgs: '',
      deleteFilenames: []
    }
  },
  computed: {
    exhibition() {
      return this.$store.getters['exhibition/getExhibitionById'](this.id)
    }
  },
  methods: {
    addLink() {
      this.exhibition.links.push({ URL: '', name: '' })
    },

    deleteLink(index) {
      this.exhibition.links.splice(index, 1)
    },

    cancel() {
      this.$router.push({ name: 'AllExhibitions' })
    },

    deleteExhibition() {
      /* eslint-disable */
      if (confirm('You sure brij? I liked this one!')) {
        this.$store.dispatch('exhibition/deleteExhibition', this.id)
      }
    },

    // ======== NEEDS EDITING TO PATCH ROUTE AND OHTER ========
    editExhibition() {
      const updatedImages = this.exhibition.images.filter(
        image => !this.deleteFilenames.includes(image.filename)
      )
      this.exhibition.images = updatedImages
      const fd = new FormData()
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('exhibition', JSON.stringify(this.exhibition))
      fd.append('filenames', JSON.stringify(this.deleteFilenames))
      this.$store.dispatch('exhibition/editExhibition', { id: this.id, fd })
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
