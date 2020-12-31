<template>
  <div v-if="exhibition" id="show-exhibition">
    <h1>{{ exhibition.name }}</h1>
    <div>
      <ul>
        <li>name: {{ exhibition.name }}</li>
        <li>location: {{ exhibition.location }}</li>
        <li>description: {{ exhibition.description }}</li>
        <li>date: {{ exhibition.date }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowExhibition',
  computed: {
    id() {
      return this.$route.params.id
    },
    exhibition() {
      return this.$store.getters['exhibition/getExhibitionById'](this.id)
    }
  },
  created() {
    this.$store.dispatch('exhibition/getExhibitions')
  }
}
</script>
