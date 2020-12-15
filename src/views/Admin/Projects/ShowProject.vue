<template>
  <div class="main">
    <h1>{{ project.name }}</h1>
    <img :src="project.pieces[0].imgURL" />
    <router-link :to="`/admin/projects/${project._id}/edit`"><button>Edit</button></router-link>
    <button @click="deleteProject">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ShowProjects',
  components: {},
  data() {
    return {}
  },
  computed: {
    id() {
      return this.$route.params.id
    },

    project() {
      return this.$store.getters.getProjById(this.id)
    }
  },
  methods: {
    deleteProject() {
      /* eslint-disable */
      if (confirm('You sure pal?')) {
        this.$store.dispatch('deleteProject', this.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;

  img {
    max-width: 50%;
  }
}
</style>
