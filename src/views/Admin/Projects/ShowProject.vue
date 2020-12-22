<template>
  <div class="main">
    <h1>{{ project.name }}</h1>
    <img :src="project.pieces[0].imgURL" />
    <h2>Pieces:</h2>
    <ul>
      <li v-for="piece in project.pieces" :key="piece._id">{{ piece.name }}</li>
    </ul>
    <router-link :to="`/admin/projects/${project._id}/edit`"><button>Edit</button></router-link>
    <router-link :to="`/admin/projects/${project._id}/add-piece`"
      ><button>Add Piece</button></router-link
    >
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
      return this.$store.getters['project/getProjById'](this.id)
    }
  },
  methods: {
    deleteProject() {
      /* eslint-disable */
      if (confirm('You sure pal?')) {
        this.$store.dispatch('project/deleteProject', this.id)
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
