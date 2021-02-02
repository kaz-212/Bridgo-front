<template>
  <div class="main">
    <h1>All projects</h1>
    <Tabs :tabs="tabs" @set-tab="setTab">
      <Tab
        v-for="theme in themes"
        :key="theme._id"
        :ref="setItemRef"
        :name="theme.name"
        :selected="selectedTab == theme.name"
      >
        Inside {{ theme.name }}
      </Tab>
    </Tabs>
    <router-link :to="{ name: 'NewTheme' }"><button>New Theme</button></router-link>
    <router-link :to="{ name: 'NewProject' }"><button>New Project</button></router-link>
  </div>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Tabs from '@/components/Tab/Tabs.vue'

export default {
  name: 'AdminProjects',
  components: { Tab, Tabs },
  data() {
    return {
      tabs: [],
      selectedTab: ''
    }
  },
  computed: {
    themes() {
      return this.$store.state.adminProject.themes
    }
  },
  methods: {
    setItemRef(el) {
      console.log('called')
      if (el) {
        if (!this.tabs.includes(el)) {
          this.tabs.push(el)
        }
      }
    },
    setTab(tab) {
      this.selectedTab = tab.name
    }
  },
  // updated() {
  //   console.log(this.refs)
  // },
  mounted() {
    this.selectedTab = this.themes[0].name
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;
}
</style>
