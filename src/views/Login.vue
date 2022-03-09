<template>
  <div id="login">
    <h1>Login Son</h1>
    <form action="#">
      <TextInput id="username" label="Username" v-model="user.username" />
      <TextInput type="password" id="password" label="Password" v-model="user.password" />
      <button @click.prevent="adminLogin">Login</button>
    </form>
    <button @click="checkLoggedIn">CHeck</button>
  </div>
</template>

<script>
import TextInput from '@/components/form/TextInput.vue'

export default {
  name: 'Login',
  components: { TextInput },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async adminLogin() {
      try {
        await this.$store.dispatch('user/login', this.user)
        console.log(this.$store.state.user.loggedIn)
      } catch (e) {
        console.log(e.response.data)
      }
    },
    async checkLoggedIn() {
      try {
        await this.$store.dispatch('user/loggedIn', this.user)
        console.log('success')
      } catch (e) {
        console.log(e.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  margin-top: 60px;
  h1 {
    margin-top: 10%;
    margin-left: 5%;
  }
}
</style>
