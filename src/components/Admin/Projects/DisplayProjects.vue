<template>
  <div>
    <draggable
      v-model="projects"
      item-key="name"
      class="list-group"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
          <router-link :to="{ name: 'EditProject', params: { id: element._id } }"
            ><img :src="element.images[0].thumbnail"
          /></router-link>
          <h4>{{ element.name }}</h4>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DisplayProjects',
  props: { propProjects: Array },
  components: { draggable },
  data() {
    return {
      projects: this.propProjects
    }
  },
  watch: {
    /* eslint-disable */
    projects: function() {
      this.projects.map((project, index) => {
        project.index = index
      })
      this.$store.dispatch('adminProject/updateOrder', this.projects)
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
