<template>
  <div class="main">
    <BackButton whereTo="AdminProjects" />
    <h1>New Theme</h1>
    <form action="#">
      <TextInput id="name" label="Name" v-model="theme.name" />
      <TextInput id="description" label="Description" v-model="theme.description" />
      <TextInput id="years" label="Years" v-model="theme.years" />
      <button @click.prevent="submitTheme">Add Theme</button>
    </form>
  </div>
</template>

<script>
import BackButton from '@/components/Buttons/BackButton.vue'
import TextInput from '@/components/form/TextInput.vue'

export default {
  name: 'NewTheme',
  components: { BackButton, TextInput },
  data() {
    return {
      theme: {
        name: '',
        description: '',
        years: ''
      }
    }
  },
  methods: {
    async submitTheme() {
      try {
        this.$store.dispatch('adminProject/submitTheme', this.theme)
      } catch (e) {
        console.log(e.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;
}
</style>
