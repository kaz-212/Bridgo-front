<template>
  <div class="card" @click="backToProject">
    <div class="content">
      <div class="header">
        <strong>{{ project.name }}</strong>
      </div>
      <div class="year">{{ project.year }}</div>
      <div class="description">{{ project.description }}</div>
    </div>
    <div class="overlay">
      <p>Click to Edit</p>
    </div>
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
  padding: 5px;
  cursor: pointer;
  background-color: rgba(178, 231, 233, 0.562);
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.753);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:hover {
      opacity: 1;
      color: white;
    }
  }

  .header {
  }

  .year {
    color: rgba(3, 3, 3, 0.404);
    border-bottom: solid black 1px;
  }
}
</style>
