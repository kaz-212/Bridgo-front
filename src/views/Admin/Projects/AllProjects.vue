<template>
  <div class="main">
    <h1>All projects</h1>
    <div class="grid">
      <div class="project" v-for="project in projects" :key="project._id">
        <router-link :to="`/admin/projects/${project._id}`"
          ><img :src="project.pieces[0].thumbnail"
        /></router-link>
        <h4>{{ project.name }}</h4>
      </div>
    </div>

    <router-link to="/admin/projects/new"><button>New Project</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'AdminProjects',
  components: {},
  data() {
    return {}
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },

  mounted() {
    //   axios.get('projects').then(res => {
    //     /* eslint-disable no-restricted-syntax */
    //     for (const proj of res.data) {
    //       this.projects.push(proj)
    //     }
    //     // console.log(res.data)
    //   })
    this.$store.dispatch('getProjects')
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;

  .grid {
    display: grid;
    grid-template-columns: 33% 33% 33%;

    .project {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        transition: transform 0.3s ease-out;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
        }
      }

      h4 {
        padding-top: 3px;
      }
    }
  }
}
</style>
