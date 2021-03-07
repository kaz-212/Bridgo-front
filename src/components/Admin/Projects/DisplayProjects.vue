<template>
  <div class="container">
    <Draggable v-model="projects" item-key="name" class="list-group grid">
      <template #item="{ element }">
        <div class="list-group-item grid-container">
          <router-link :to="{ name: 'EditProject', params: { id: element._id } }"
            ><img :src="element.images[0].thumbnail"
          /></router-link>
          <h4>{{ element.name }}</h4>
        </div>
      </template>
    </Draggable>
  </div>
</template>

<script>
// TODO vue draggable side by side in a grid

import Draggable from 'vuedraggable'

export default {
  name: 'DisplayProjects',
  props: { propProjects: Array },
  components: { Draggable },
  data() {
    return {
      projects: this.propProjects
    }
  },
  watch: {
    /* eslint-disable */
    // TODO check if this still works
    async projects() {
      this.projects.map((project, index) => {
        project.index = index
      })
      try {
        await this.$store.dispatch('adminProject/updateOrder', this.projects)
      } catch (e) {
        console.log(e.response.data)
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 7% auto 0 auto;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    .grid-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
