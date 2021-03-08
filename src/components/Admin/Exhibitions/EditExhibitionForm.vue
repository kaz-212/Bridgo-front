<template>
  <div v-if="exhibition" action="#">
    <BackButton
      @click="getExhibitionById"
      whereTo="AllExhibitions"
      text="All Exhibitions"
      class="back"
    />
    <form action="#" class="form">
      <TextInput id="name" label="Exhibition Name" v-model="exhibition.name" />
      <TextInput id="date" label="date" v-model="exhibition.date" />
      <label class="form-item" for="location">Location</label>
      <textarea id="location" v-model="exhibition.location" rows="5" required />
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
    </form>
  </div>
</template>

<script>
import DeleteImage from '@/components/form/DeleteImage.vue'
import ImageUpload from '@/components/form/ImageUpload.vue'
import TextInput from '@/components/form/TextInput.vue'
import BackButton from '@/components/Buttons/BackButton.vue'

// FIXME figure out why when something is edited and then cancelled - edited version displayed

export default {
  name: 'EditExhibitionForm',
  components: {
    DeleteImage,
    ImageUpload,
    TextInput,
    BackButton
  },
  props: { exhi: Object },
  data() {
    return {
      imgs: '',
      deleteFilenames: [],
      exhibition: this.exhi
    }
  },

  methods: {
    addLink() {
      this.exhibition.links.push({ URL: '', name: '' })
    },

    deleteLink(index) {
      this.exhibition.links.splice(index, 1)
    },

    async getExhibitionById() {
      /* eslint-disable */
      try {
        await this.$store.dispatch('adminExhibition/getExhibitionById', this.exhibition._id)
      } catch (e) {
        console.log(e.response.data)
      }
    },

    async deleteExhibition() {
      if (confirm('You sure brij? I liked this one!')) {
        try {
          await this.$store.dispatch('adminExhibition/deleteExhibition', this.exhibition._id)
        } catch (e) {
          console.log(e.response.data)
        }
      }
    },

    // ======== NEEDS EDITING TO PATCH ROUTE AND OHTER ========
    async editExhibition() {
      const updatedImages = this.exhibition.images.filter(
        image => !this.deleteFilenames.includes(image.filename)
      )
      updatedImages.map((image, index) => {
        image.index = index
      })
      this.exhibition.images = updatedImages
      const fd = new FormData()
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('exhibition', JSON.stringify(this.exhibition))
      fd.append('filenames', JSON.stringify(this.deleteFilenames))
      try {
        await this.$store.dispatch('adminExhibition/editExhibition', {
          id: this.exhibition._id,
          fd
        })
      } catch (e) {
        console.log(e.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  position: absolute;
  width: 200px;
  right: 0;
}

.form {
  width: 90%;
  margin: 3% auto;

  i {
    cursor: pointer;
  }

  label {
    margin-top: 10px;
  }

  button {
    max-width: 200px;
  }
}
</style>
