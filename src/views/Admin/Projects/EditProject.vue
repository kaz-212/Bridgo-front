<template>
  <div class="main" v-if="project">
    <BackButton @click="resetProjectData" whereTo="AdminProjects" />
    <form class="form" action="#">
      <div class="form-holder form" id="project">
        <label for="theme">Select theme</label>
        <select name="theme" id="theme" v-model="project.theme">
          <option
            v-for="theme in allThemes"
            :key="theme._id"
            :selected="project.theme === theme._id"
            :value="theme._id"
            >{{ theme.name }}</option
          >
        </select>
        <TextInput id="name" label="Project Name" v-model="project.name" />
        <label class="form-item" for="description">Description</label>
        <textarea id="description" v-model="project.description" rows="8" required />
        <TextInput id="materials" label="Materials" v-model="project.materials" />
        <TextInput id="year" label="Year" v-model="project.year" />
        <label for="yes">Show this project in portfoio?</label>
        <input class="check-box" v-model="project.onShow" id="yes" type="checkbox" checked />
        <DeleteImage v-model:images="project.images" v-model:deleteFilenames="deleteFilenames" />
        <div>
          <ImageUpload v-model="imgs" />
        </div>
        <button @click.prevent="submitChanges">Submit Changes</button>
      </div>
    </form>
  </div>
</template>
<script>
import TextInput from '@/components/form/TextInput.vue'
import ImageUpload from '@/components/form/ImageUpload.vue'
import DeleteImage from '@/components/form/DeleteImage.vue'
import BackButton from '@/components/Buttons/BackButton.vue'
import axios from 'axios'

export default {
  name: 'EditProject',
  components: {
    TextInput,
    ImageUpload,
    DeleteImage,
    BackButton
  },

  data() {
    return {
      deleteFilenames: [],
      imgs: [],
      originalTheme: ''
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    project() {
      return this.$store.getters['adminProject/getProjById'](this.id)
    },
    allThemes() {
      return this.$store.state.adminProject.themes
    }
  },
  methods: {
    resetProjectData() {
      // FIXME when back button pressed, it saves the changes even though resent get req
      this.$store.dispatch('adminProject/getThemes')
    },
    submitChanges() {
      /* eslint-disable */
      const fd = new FormData()
      // if theme changed, need to recalculate the index of edited project by adding 1 to value of last index of new theme
      if (this.project.theme != this.originalTheme) {
        const newTheme = this.allThemes.find(theme => (theme._id = this.project.theme))
        this.project.index = newTheme.projects[newTheme.projects.length - 1].index + 1
      }
      console.log(this.project.index)
      // delete pieces and change index ordering for images before sending off
      const updatedImages = this.project.images.filter(
        image => !this.deleteFilenames.includes(image.filename)
      )
      updatedImages.map((image, index) => {
        image.index = index
      })
      this.project.images = updatedImages
      for (const img of this.imgs) {
        fd.append('imgs', img)
      }
      fd.append('project', JSON.stringify(this.project))
      fd.append('filenames', JSON.stringify(this.deleteFilenames))
      this.$store.dispatch('adminProject/editProject', fd)
    }
  },
  async mounted() {
    if (this.project) {
      this.originalTheme = this.project.theme
    } else {
      // TODO not nice but this.project = null on mounted if edit page refreshed
      const { data } = await axios.get(`admin/projects/project/${this.id}`)
      this.originalTheme = data.theme
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;
  h2 {
    margin-top: 15px;
    margin-left: 5px;
  }
  .project-container {
    border: 1px solid black;
    width: 95%;
    align-self: center;
    margin-top: 10px;
    padding: 15px;
  }

  .main-piece {
    margin-left: 20px;
    li {
      list-style-type: none;
    }
  }

  .piece-container {
    display: grid;
    grid-template-columns: 65% 35%;
    border: 1px solid black;
    width: 95%;
    align-self: center;
    margin-top: 10px;
    padding: 15px;

    &.delete {
      border: 2px solid red;
    }

    input,
    textarea {
      width: 90%;
      margin-left: 5px;
      padding-left: 3px;
      margin-bottom: 5px;
      &.changed {
        border: 1px solid red;
      }
    }

    img {
      margin-top: auto;
    }

    button {
      &.delete {
        color: white;
        background-color: red;
      }
    }
  }
}
</style>
