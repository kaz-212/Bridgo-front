<template>
  <div class="main">
    <h1>{{ project.name }} Edit</h1>
    <h2>Project</h2>
    <form class="form" action="#">
      <div class="project-container" id="project">
        <label class="form-item" for="name">Project Name</label>
        <input id="name" v-model="project.name" type="text" required />
        <label class="form-item" for="year">Year</label>
        <input id="year" v-model="project.year" type="text" required />
        <label class="form-item" for="description">Description</label>
        <textarea id="description" v-model="project.description" rows="8" required />
        <label for="yes">Show this project in portfoio? </label>
        <input v-model="project.onShow" id="yes" type="checkbox" :checked="project.onShow" />
      </div>
      <h2>Main Piece</h2>
      <ul class="main-piece">
        <li v-for="piece in project.pieces" :key="piece._id">
          <input
            type="radio"
            name="isMain"
            :id="piece._id"
            :checked="piece.isMain"
            @click="toggleTrue(piece._id)"
          />
          {{ piece.name }}
        </li>
      </ul>

      <h2>Pieces</h2>
      <div
        class="piece-container"
        :class="{ delete: deletePieces.includes(index) }"
        v-for="(piece, index) in project.pieces"
        :key="piece._id"
      >
        <div class="piece-form">
          <label class="form-item" for="pieceName">Piece Name</label>
          <input
            :class="{ changed: piece.changed }"
            id="pieceName"
            v-model="piece.name"
            type="text"
            required
          />
          <label class="form-item" for="pieceYear">Year</label>
          <input
            :class="{ changed: piece.changed }"
            id="pieceYear"
            v-model="piece.year"
            type="text"
            required
          />
          <label class="form-item" for="price">Price</label>
          <input
            :class="{ changed: piece.changed }"
            id="price"
            v-model="piece.price"
            type="text"
            required
          />
          <label class="form-item" for="size">Size</label>
          <input
            :class="{ changed: piece.changed }"
            id="size"
            v-model="piece.size"
            type="text"
            required
          />
          <label class="form-item" for="materials">Materials</label>
          <input
            :class="{ changed: piece.changed }"
            id="materials"
            v-model="piece.materials"
            type="text"
            required
          />
          <label class="form-item" for="PieceDescription">Description</label>
          <textarea
            :class="{ changed: piece.changed }"
            id="PieceDescription"
            v-model="piece.description"
            rows="5"
            required
          />
          <label for="show">Show this project in portfoio? </label>
          <input v-model="piece.showInProj" id="show" type="checkbox" :checked="piece.showInProj" />
        </div>

        <div class="piece-image">
          <img :src="piece.thumbnail" />
          <button
            v-if="!piece.isMain"
            :class="{ delete: deletePieces.includes(index) }"
            @click.prevent="deletePiece(index, piece.filename)"
          >
            Delete Piece
          </button>
        </div>
      </div>
      <button @click.prevent="submitChanges">Submit Changes</button>
    </form>
    <router-link :to="`/admin/projects/${project._id}`"
      ><button>Cancel Changes</button></router-link
    >
  </div>
</template>
// Need to change piece.name to piece.pieceName etc.
<script>
import axios from 'axios'

export default {
  name: 'EditProject',
  components: {},
  data() {
    return {
      deletePieces: [],
      deleteFilenames: []
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },

    project() {
      return this.$store.getters.getProjById(this.id)
    }
  },
  methods: {
    deletePiece(pieceIndex, filename) {
      const pieceI = this.deletePieces.indexOf(pieceIndex)
      const filenameI = this.deleteFilenames.indexOf(filename)
      /* eslint-disable */
      if (pieceI >= 0) {
        this.deletePieces.splice(pieceI, 1)
        this.deleteFilenames.splice(filenameI, 1)
      } else {
        this.deletePieces.push(pieceIndex)
        this.deleteFilenames.push(filename)
      }
    },

    toggleTrue(id) {
      for (let piece of this.project.pieces) {
        piece._id === id ? (piece.isMain = true) : (piece.isMain = false)
        // delete from deleted pieces if selected to be main image
        const index = this.deletePieces.indexOf(id)
        if (index >= 0) {
          this.deletePieces.splice(index, 1)
        }
      }
      // console.log(id, this.project.pieces)
    },

    async submitChanges() {
      for (let pieceIndex of this.deletePieces) {
        this.project.pieces.splice(pieceIndex, 1)
      }
      axios
        .put(
          `projects/${this.id}`,
          { project: this.project, filenames: this.deleteFilenames },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(res => {
          console.log(res)
          this.$router.push({ name: 'AdminProjects' })
        })
        .catch(e => {
          console.log('ERROR!', e)
        })
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
