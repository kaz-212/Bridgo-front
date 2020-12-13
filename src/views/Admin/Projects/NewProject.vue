<template>
  <div id="new-proj">
    <h2>Add Project</h2>
    <ProjectForm />
    <router-link :to="{ name: 'AdminProjects' }"><button>Cancel</button></router-link>
  </div>
</template>

<script>
import ProjectForm from '@/components/Admin/Projects/ProjectForm.vue'

export default {
  name: 'AdminNav',
  components: { ProjectForm },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#new-proj {
  height: 94vh;
  margin-left: 18vw;
}
</style>
