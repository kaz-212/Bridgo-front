<template>
  <div>
    <Draggable v-model="projects" item-key="name" class="list-group">
      <template #item="{ element }">
        <div class="list-group-item grid">
          <div class="project">
            <router-link :to="{ name: 'EditProject', params: { id: element._id } }"
              ><img :src="element.images[0].thumbnail"
            /></router-link>
            <h4>{{ element.name }}</h4>
          </div>
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

<style lang="scss" scoped></style>
