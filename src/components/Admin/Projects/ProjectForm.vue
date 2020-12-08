<template>
  <form class="form" action="#">
    <div class="form-holder" id="project" v-if="status == 1">
      <label class="form-item" for="name">Project Name</label>
      <input id="name" v-model="project.name" type="text" required />
      <label class="form-item" for="year">Year</label>
      <input id="year" v-model="project.year" type="text" required />
      <label class="form-item" for="description">Description</label>
      <textarea id="description" v-model="project.description" rows="8" required />
      <label for="yes">Show this project in portfoio?</label>
      <input class="check-box" v-model="project.onShow" id="yes" type="checkbox" />
      <button @click.prevent="piecesForm">Add Pieces</button>
    </div>
    <div class="form-holder" id="pieces" v-if="status == 2">
      <ProjectCard :project="project" @project-status="projectForm" />
      <h3>Pieces</h3>
      <h4>Main Piece</h4>
      <label class="form-item" for="pieceName">Piece Name</label>
      <input id="pieceName" v-model="pieces[0].name" type="text" required />
      <label class="form-item" for="pieceYear">Year</label>
      <input id="pieceYear" v-model="pieces[0].pieceYear" type="text" required />
      <label class="form-item" for="price">Price</label>
      <input id="price" v-model="pieces[0].price" type="text" required />
      <label class="form-item" for="size">Size</label>
      <input id="size" v-model="pieces[0].size" type="text" required />
      <label class="form-item" for="materials">Materials</label>
      <input id="materials" v-model="pieces[0].materials" type="text" required />
      <label class="form-item" for="PieceDescription">Description</label>
      <textarea id="PieceDescription" v-model="pieces[0].pieceDescription" rows="5" required />
      <label for="image">Image</label>
      <input type="file" id="image" ref="fileSelector" @change="onFileSelected" />
      <!-- proxy button to click -->
      <!-- <button @click.prevent="$refs.fileSelector.click()">Choose Image</button> -->
      <label for="yes">Show this piece in project?</label>
      <input class="check-box" v-model="pieces[0].showInProj" id="yes" type="checkbox" />
      <button @click.prevent="submitProject">Submit Project</button>
      {{ img }}
    </div>
  </form>
</template>

<script>
import ProjectCard from '@/components/Admin/Projects/ProjectCard.vue'
// import axios from 'axios'

// const url = 'http://localhost:5000/api/'

export default {
  name: 'ProjectForm',
  components: { ProjectCard },
  data() {
    return {
      status: 1,
      project: {
        name: '',
        year: '',
        description: '',
        onShow: false
      },
      pieces: [
        {
          name: '',
          isMain: true,
          pieceYear: '',
          pieceDescription: '',
          price: '',
          size: '',
          materials: '',
          img: null,
          showInProj: false
        }
      ]
    }
  },
  methods: {
    piecesForm() {
      this.status = 2
    },
    projectForm() {
      this.status = 1
    },
    onFileSelected(event) {
      console.log(event)
      this.pieces[0].img = event.target.files[0]
    }

    // submitProject() {
    // const formData = new FormData()
    // for (const key of Object.keys(this.project)) {
    // formData.append(key, this.project[key])
    // console.log(key, this.project[key])
    // }
    // console.log(formData)
    // for (let key of this.pieces) {
    //   formData.append(key, this.pieces[key])
    // }
    // console.log(Array.from(formData))
    // axios
    //   .post(`${url}projects`, {
    //     formData
    //   })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(e => {
    //     console.log('ERROr', e)
    //   })
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
}
</style>
