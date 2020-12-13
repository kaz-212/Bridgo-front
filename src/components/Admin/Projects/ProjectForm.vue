<template>
  <form class="form" action="#">
    <div class="form-holder form" id="project" v-if="status == 1">
      <label class="form-item" for="name">Project Name</label>
      <input id="name" v-model="project.name" type="text" required />
      <label class="form-item" for="year">Year</label>
      <input id="year" v-model="project.year" type="text" required />
      <label class="form-item" for="description">Description</label>
      <textarea id="description" v-model="project.description" rows="8" required />
      <label for="yes">Show this project in portfoio?</label>
      <input class="check-box" v-model="project.onShow" id="yes" type="checkbox" checked />
      <button @click.prevent="piecesForm">Add Pieces</button>
      <button v-if="pieces.length > 0" @click.prevent="submitProject">Submit Project</button>
    </div>
    <div class="form-holder" id="pieces" v-if="status == 2">
      <!-- <ProjectCard :project="project" @project-status="projectForm" /> -->
      <PieceForm :pieces="pieces" @submit-piece="submitPiece" @cancel-piece="cancelPiece" />
    </div>
    <div class="form-holder" id="overview" v-if="status == 3">
      {{ project }}
      {{ pieces }}
      <button @click.prevent="projectForm">Edit Project</button>
      <button @click.prevent="piecesForm">Add New Piece</button>
      <button v-if="pieces.length > 0" @click.prevent="submitProject">Submit Project</button>
    </div>
  </form>
</template>

<script>
// import ProjectCard from '@/components/Admin/Projects/ProjectCard.vue'
import PieceForm from '@/components/Admin/Projects/PieceForm.vue'
import axios from 'axios'

// const url = 'http://localhost:5000/api/'

export default {
  name: 'ProjectForm',
  components: { PieceForm },
  data() {
    return {
      status: 1,
      project: {
        name: '',
        year: '',
        description: '',
        onShow: true
      },
      pieces: []
    }
  },
  methods: {
    piecesForm() {
      this.status = 2
    },
    projectForm() {
      this.status = 1
    },

    submitPiece(piece) {
      this.pieces.push(piece)
      this.status = 3
    },

    cancelPiece() {
      this.status = 3
    },

    submitProject() {
      const formData = new FormData()
      // append images
      for (let i = 0; i < this.pieces.length; i += 1) {
        const { img } = this.pieces[i]
        const { pieceName } = this.pieces[i]
        formData.append('imgs', img, pieceName) // give img the same name as the piece
      }
      formData.append('project', JSON.stringify(this.project)) // append project object
      formData.append('pieces', JSON.stringify(this.pieces)) // append pieces array
      axios
        .post('projects', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log('SUCCESSS!!!', res)
          this.$router.push({ name: 'AdminProjects' })
        })
        .catch(err => {
          console.log('ERRORR!!!', err)
        })
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
