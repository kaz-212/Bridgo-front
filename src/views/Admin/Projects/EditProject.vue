<template>
  <div class="main">
    <h1>{{ project.name }} Edit</h1>
    <form class="form" action="#">
      <div class="form-holder form" id="project">
        <label class="form-item" for="name">Project Name</label>
        <input id="name" v-model="project.name" type="text" required />
        <label class="form-item" for="year">Year</label>
        <input id="year" v-model="project.year" type="text" required />
        <label class="form-item" for="description">Description</label>
        <textarea id="description" v-model="project.description" rows="8" required />
        <label for="yes">Show this project in portfoio?</label>
        <input class="check-box" v-model="project.onShow" id="yes" type="checkbox" checked />
      </div>
      <div class="piece" v-for="piece in project.pieces" :key="piece._id">
        <label class="form-item" for="pieceName">Piece Name</label>
        <input id="pieceName" v-model="piece.name" type="text" required />
        <label class="form-item" for="pieceYear">Year</label>
        <input id="pieceYear" v-model="piece.year" type="text" required />
        <label class="form-item" for="price">Price</label>
        <input id="price" v-model="piece.price" type="text" required />
        <label class="form-item" for="size">Size</label>
        <input id="size" v-model="piece.size" type="text" required />
        <label class="form-item" for="materials">Materials</label>
        <input id="materials" v-model="piece.materials" type="text" required />
        <label class="form-item" for="PieceDescription">Description</label>
        <textarea id="PieceDescription" v-model="piece.description" rows="5" required />
      </div>
      <div class="piece-image"></div>
      <button>Submit Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProject',
  components: {},
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },

    project() {
      return this.$store.getters.getProjById(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;

  img {
    max-width: 50%;
  }
}
</style>
