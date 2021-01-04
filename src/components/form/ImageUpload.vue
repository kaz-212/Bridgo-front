<template>
  <div id="image-upload">
    <!-- image upload -->
    <div class="image-upload">
      <label for="image">Image(s)</label>
      <input multiple type="file" id="image" ref="fileSelector" @change="onFileSelected" />
    </div>

    <div class="files">
      <div v-for="(img, index) in imgs" :key="index" class="file-display">
        {{ img.name }} <i @click="deleteImage(index)" class="far fa-trash-alt"></i>
      </div>
    </div>

    <!-- proxy button to click -->
    <button @click.prevent="$refs.fileSelector.click()">Choose Image(s)</button>
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',
  emits: {
    'update:modelValue': String
  },
  data() {
    return {
      imgs: ''
    }
  },
  methods: {
    onFileSelected() {
      const { files } = this.$refs.fileSelector
      this.imgs = [...this.imgs, ...files]
      this.$emit('update:modelValue', this.imgs)
    },
    deleteImage(index) {
      this.imgs.splice(index, 1)
      this.$emit('update:modelValue', this.imgs)
    }
  }
}
</script>

<style lang="scss" scoped>
#image {
  display: none;
}
</style>
