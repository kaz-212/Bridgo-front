<template>
  <div id="new-exhibition" v-if="exhibition">
    <h1>Edit Exhibition</h1>
    <EditExhibitionForm :exhi="exhibition" />
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
    },
    exhibition() {
      return this.$store.getters['adminExhibition/getExhibitionById'](this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
#new-exhibition {
  width: 100%;
}
</style>
