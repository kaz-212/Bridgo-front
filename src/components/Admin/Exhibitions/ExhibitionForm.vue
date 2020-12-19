<template>
  <div class="form" action="#">
    <label class="form-item" for="name">Name</label>
    <input id="Name" v-model="exhibition.name" type="text" required />
    <label class="form-item" for="date">Date</label>
    <input id="date" v-model="exhibition.date" type="text" required />
    <label class="form-item" for="location">Location</label>
    <input id="location" v-model="exhibition.location" type="text" required />
    <label class="form-item" for="description">Description</label>
    <textarea id="description" v-model="exhibition.description" rows="5" required />
    <label for="image">Image</label>
    <input multiple type="file" id="image" ref="fileSelector" @change="onFileSelected" />
    <!-- proxy button to click -->
    <!-- <button @click.prevent="$refs.fileSelector.click()">Choose Image</button> -->
    <label for="Show">Show this exhibition?</label>
    <input class="check-box" v-model="exhibition.onShow" id="show" type="checkbox" checked />
    <label for="Show">Is this an upcoming Exhibition?</label>
    <input class="check-box" v-model="exhibition.isUpcoming" id="show" type="checkbox" checked />
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
      exhibition: {
        name: '',
        date: '',
        description: '',
        location: '',
        imgs: [],
        isUpcoming: true,
        onShow: true
      }
    }
  },
  computed: {},
  methods: {
    onFileSelected() {
      const { files } = this.$refs.fileSelector
      this.exhibition.imgs = [...this.exhibition.imgs, ...files]
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
