<template>
  <form class="form" action="#">
    <div class="form-holder form" id="project">
      <label for="theme">Select theme</label>
      <select name="theme" id="theme" v-model="project.theme">
        <option v-for="theme in themes" :key="theme._id" :value="theme._id">{{
          theme.name
        }}</option>
      </select>
      <TextInput id="name" label="Project Name" v-model="project.name" />
      <label class="form-item" for="description">Description</label>
      <textarea id="description" v-model="project.description" rows="8" required />
      <TextInput id="materials" label="Materials" v-model="project.materials" />
      <TextInput id="year" label="Year" v-model="project.year" />
      <label for="yes">Show this project in portfoio?</label>
      <input class="check-box" v-model="project.onShow" id="yes" type="checkbox" checked />
      <div>
        <ImageUpload v-model="imgs" />
      </div>
      <button @click.prevent="submitProject">Submit Project</button>
    </div>
  </form>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'
import ImageUpload from '@/components/form/ImageUpload.vue'

export default {
  name: 'ProjectForm',
  components: { TextInput, ImageUpload },
  data() {
    return {
      project: {
        name: '',
        year: '',
        description: '',
        materials: '',
        onShow: true,
        theme: ''
      },
      imgs: []
    }
  },
  computed: {
    themes() {
      return this.$store.state.adminProject.themes
    }
  },
  methods: {
    submitProject() {
      const fd = new FormData()
      /* eslint-disable */
      for (const img of this.imgs) {
        fd.append('imgs', img) // add images
      }
      fd.append('project', JSON.stringify(this.project)) // append project object
      this.$store.dispatch('adminProject/submitProject', fd)
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: flex-start;
  min-height: 70vh;
  margin-left: 3vw;
  margin-top: 3vh;
  width: 100%;
  .form-holder {
    width: 100%;
    height: 100%;

    textarea {
      padding: 10px;
    }

    input {
      padding: 5px;
    }

    .check-box {
      display: inline;
    }
    .form-item {
      padding-top: 3%;
      padding-bottom: 1%;
      display: inline-block;
    }

    button {
      width: 80px;
    }
  }
}
</style>
