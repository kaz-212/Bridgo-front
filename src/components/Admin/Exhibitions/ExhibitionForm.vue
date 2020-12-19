<template>
  <div class="form" action="#">
    <label class="form-item" for="name">Name</label>
    <input id="Name" v-model="Exhibition.name" type="text" required />
    <label class="form-item" for="date">Date</label>
    <input id="date" v-model="Exhibition.date" type="text" required />
    <label class="form-item" for="location">Location</label>
    <input id="location" v-model="Exhibition.location" type="text" required />
    <label class="form-item" for="description">Description</label>
    <textarea id="description" v-model="Exhibition.description" rows="5" required />
    <label for="image">Image</label>
    <input type="file" id="image" ref="fileSelector" @change="onFileSelected" />
    <!-- proxy button to click -->
    <!-- <button @click.prevent="$refs.fileSelector.click()">Choose Image</button> -->
    <label for="Show">Show this Exhibition?</label>
    <input class="check-box" v-model="Exhibition.onShow" id="show" type="checkbox" checked />
    <label for="Show">Is this an upcoming Exhibition?</label>
    <input class="check-box" v-model="Exhibition.isUpcoming" id="show" type="checkbox" checked />
    <button @click.prevent="add">Add</button>
    <button @click.prevent="cancel">Back</button>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionForm',
  components: {},
  props: {},

  data() {
    return {
      Exhibition: {
        name: '',
        date: '',
        description: '',
        location: '',
        img: null,
        isUpcoming: true,
        onShow: true
      }
    }
  },
  computed: {},
  methods: {
    onFileSelected() {
      this.piece.img = this.$refs.fileSelector.files[0]
    },

    cancelPiece() {
      this.$emit('cancel-piece')
    },

    addPiece() {
      this.piece.isMain = this.main
      this.piece.index = this.index
      this.$emit('submit-piece', this.piece)
    }
  }
}
</script>

<style lang="scss" scoped></style>
