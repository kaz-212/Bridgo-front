<template>
  <div id="delete-image">
    <!-- <div v-for="(image, index) in images" :key="image._id">
      <img :src="image.thumbnail" />
      <label :for="`image${index}`"> delete? </label>
      <input :id="`image${index}`" type="checkbox" @change="deleteImageArray(image.filename)" />
    </div> -->
    <Draggable v-model="imageArray" item-key="filename" class="list-group">
      <template #item="{ element }">
        <div class="list-group-item">
          <img :src="element.thumbnail" />
          <label :for="`image${element.index}`"> delete? </label>
          <input
            :id="`image${element.index}`"
            type="checkbox"
            @change="deleteImageArray(element.filename)"
          />
        </div>
      </template>
    </Draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  name: 'DeleteImage',
  components: { Draggable },

  props: {
    images: Array,
    deleteFilenames: Array
  },
  emits: {
    'update:deleteFilenames': Array,
    'update:images': Array
  },
  data() {
    return {
      filenames: this.deleteFilenames,
      imageArray: this.images
    }
  },
  watch: {
    /* eslint-disable */
    imageArray: function() {
      // assigns the index property the value of the position in the array
      this.imageArray.map((image, index) => {
        image.index = index
      })
      this.$emit('update:images', this.imageArray)
    }
  },
  methods: {
    deleteImageArray(filename) {
      const filenameI = this.filenames.indexOf(filename)
      /* eslint-disable */
      if (filenameI >= 0) {
        this.filenames.splice(filenameI, 1)
      } else {
        this.filenames.push(filename)
      }
      this.$emit('update:filenames', this.filenames)
    }
  }
}
</script>

<style lang="scss" scoped></style>
