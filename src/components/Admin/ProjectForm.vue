<template>
  <div class="form">
    <form action="#">
      <label class="form-item" for="name">Project Name</label>
      <input class="form-item" id="name" name="name" type="text" required />
      <label class="form-item" for="year">Year</label>
      <input class="form-item" id="year" name="year" type="text" required />
      <label class="form-item" for="description">Description</label>
      <textarea id="description" name="description" type="text" required />
    </form>
  </div>
</template>

<script>
// import PieceForm from '@/components/Admin/PieceForm.vue'

export default {
  name: 'ProjectForm',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.form {
  .form-item {
    margin-left: 18px;
  }
}
</style>
