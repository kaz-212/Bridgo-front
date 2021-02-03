<template>
  <div id="delete-image">
    <div v-for="(image, index) in images" :key="image._id">
      <img :src="image.thumbnail" />
      <label :for="`image${index}`"> delete? </label>
      <input :id="`image${index}`" type="checkbox" @change="deleteImageArray(image.filename)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteImage',
  props: {
    images: Array
  },
  emits: {
    'update:modelValue': Array
  },
  data() {
    return {
      deleteFilenames: []
    }
  },
  methods: {
    deleteImageArray(filename) {
      const filenameI = this.deleteFilenames.indexOf(filename)
      /* eslint-disable */
      if (filenameI >= 0) {
        this.deleteFilenames.splice(filenameI, 1)
      } else {
        this.deleteFilenames.push(filename)
      }
      this.$emit('update:modelValue', this.deleteFilenames)
    }
  }
}
</script>

<style lang="scss" scoped></style>
