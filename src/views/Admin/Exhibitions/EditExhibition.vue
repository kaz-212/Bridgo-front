<template>
  <div id="new-exhibition">
    <h1>Edit Exhibition</h1>
    <EditExhibitionForm :id="id" />
  </div>
</template>

<script>
import EditExhibitionForm from '@/components/Admin/Exhibitions/EditExhibitionForm.vue'

export default {
  name: 'EditExhibition',
  components: { EditExhibitionForm },
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
#new-exhibition {
  width: 100%;
}
</style>
