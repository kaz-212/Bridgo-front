<template>
  <nav id="new-proj">
    <h2>Add Project</h2>
    <ProjectForm />
  </nav>
</template>

<script>
import ProjectForm from '@/components/Admin/ProjectForm.vue'

export default {
  name: 'AdminNav',
  components: { ProjectForm },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
