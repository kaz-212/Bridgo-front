<template>
  <div class="form" action="#">
    <h4 v-if="pieces.length < 1">Add Main Piece</h4>
    <h4 v-if="pieces.length >= 1">Add Piece</h4>
    <label class="form-item" for="pieceName">Piece Name</label>
    <input id="pieceName" v-model="piece.name" type="text" required />
    <label class="form-item" for="pieceYear">Year</label>
    <input id="pieceYear" v-model="piece.pieceYear" type="text" required />
    <label class="form-item" for="price">Price</label>
    <input id="price" v-model="piece.price" type="text" required />
    <label class="form-item" for="size">Size</label>
    <input id="size" v-model="piece.size" type="text" required />
    <label class="form-item" for="materials">Materials</label>
    <input id="materials" v-model="piece.materials" type="text" required />
    <label class="form-item" for="PieceDescription">Description</label>
    <textarea id="PieceDescription" v-model="piece.pieceDescription" rows="5" required />
    <label for="image">Image</label>
    <input type="file" id="image" ref="fileSelector" @change="onFileSelected" />
    <!-- proxy button to click -->
    <!-- <button @click.prevent="$refs.fileSelector.click()">Choose Image</button> -->
    <label v-if="pieces.length >= 1" for="yes">Show this piece in project?</label>
    <input
      v-if="pieces.length >= 1"
      class="check-box"
      v-model="piece.showInProj"
      id="yes"
      type="checkbox"
      checked
    />
    <button @click.prevent="addPiece">Add Piece</button>
  </div>
</template>

<script>
export default {
  name: 'ProjectForm',
  components: {},
  props: {
    pieces: Array
  },

  data() {
    return {
      piece: {
        name: '',
        isMain: '',
        pieceYear: '',
        pieceDescription: '',
        price: '',
        size: '',
        materials: '',
        showInProj: true,
        img: null
      }
    }
  },
  computed: {
    main() {
      if (this.pieces.length < 1) {
        return true
      }
      return false
    }
  },
  methods: {
    onFileSelected() {
      this.piece.img = this.$refs.fileSelector.files[0]
    },

    addPiece() {
      this.piece.isMain = this.main
      this.$emit('submit-piece', this.piece)

      // this.piece.name = ''
      // this.piece.isMain = false
      // this.piece.pieceYear = ''
      // this.piece.pieceDescription = ''
      // this.piece.price = ''
      // this.piece.size = ''
      // this.piece.materials = ''
      // this.piece.showInProj = true
      // this.piece.img = null
    }
  }
}
</script>

<style lang="scss" scoped></style>
