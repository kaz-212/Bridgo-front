<template>
  <div class="card" @click="backToProject">
    <div class="header">
      <strong>{{ project.name }}</strong>
    </div>
    <div class="year">{{ project.year }}</div>
    <div class="description">{{ project.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectForm',
  components: {},
  props: {
    project: Object
  },
  data() {
    return {}
  },
  methods: {
    backToProject() {
      this.$emit('project-status')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 60%;
  border: solid black 1px;
  border-radius: 5px;
  cursor: pointer;

  .header {
  }

  .year {
    color: rgba(3, 3, 3, 0.404);
    border-bottom: solid black 1px;
  }
}
</style>
