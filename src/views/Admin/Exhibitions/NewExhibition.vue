<template>
  <div id="new-exhibition">
    <h1>New Exhibition</h1>
    <ExhibitionForm />
  </div>
</template>

<script>
import ExhibitionForm from '@/components/Admin/Exhibitions/ExhibitionForm.vue'

export default {
  name: 'NewExhibition',
  components: { ExhibitionForm },
  data() {
    return {}
  },
  computed: {},
  created() {}
}
</script>

<style lang="scss" scoped>
#new-exhibition {
  width: 100%;
}
</style>
