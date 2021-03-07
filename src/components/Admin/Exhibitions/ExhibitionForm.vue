<template>
  <div action="#">
    <BackButton whereTo="AllExhibitions" text="All Exhibitions" class="back" />
    <form action="#" class="form">
      <TextInput id="name" label="Name" v-model="exhibition.name" />
      <TextInput id="date" label="Date" v-model="exhibition.date" />

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
      <ImageUpload v-model="imgs" />
      <label for="Show">Show this exhibition?</label>
      <input class="check-box" v-model="exhibition.onShow" id="show" type="checkbox" checked />
      <label for="Show">Is this an upcoming Exhibition?</label>
      <input class="check-box" v-model="exhibition.isUpcoming" id="show" type="checkbox" checked />
      <button @click.prevent="submitExhibition">Submit</button>
      <button @click.prevent="cancel">Back</button>
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'
import ImageUpload from '@/components/form/ImageUpload.vue'
import BackButton from '@/components/Buttons/BackButton.vue'

export default {
  name: 'ExhibitionForm',
  components: { TextInput, ImageUpload, BackButton },
  props: {},
  data() {
    return {
      exhibition: {
        name: '',
        date: '',
        description: '',
        location: '',
        isUpcoming: true,
        onShow: true,
        index: null,
        links: []
      },
      imgs: ''
    }
  },
  computed: {
    computedIndex() {
      return this.$store.getters['adminExhibition/getNewIndex']
    }
  },
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
      this.exhibition.index = this.computedIndex
      const fd = new FormData()
      /* eslint-disable */
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('exhibition', JSON.stringify(this.exhibition))
      try {
        await this.$store.dispatch('adminExhibition/submitExhibition', fd)
      } catch (e) {
        console.log('ERROR', e.response.data)
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
