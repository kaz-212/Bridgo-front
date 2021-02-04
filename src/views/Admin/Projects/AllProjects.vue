<template>
  <div class="main" :v-if="themes">
    <h1>All projects</h1>
    <Tabs :tabs="tabs" @set-tab="setTab">
      <Tab
        v-for="theme in themes"
        :key="theme._id"
        :ref="setItemRef"
        :name="theme.name"
        :selected="selectedTab == theme.name"
      >
        <DisplayProjects :prop-projects="theme.projects" />
      </Tab>
    </Tabs>
    <router-link :to="{ name: 'NewTheme' }"><button>New Theme</button></router-link>
    <router-link :to="{ name: 'NewProject' }"><button>New Project</button></router-link>
  </div>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Tabs from '@/components/Tab/Tabs.vue'
import DisplayProjects from '@/components/Admin/Projects/DisplayProjects.vue'

export default {
  name: 'AdminProjects',
  components: { Tab, DisplayProjects, Tabs },
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
  watch: {
    themes(newValue) {
      this.selectedTab = newValue[0].name
    }
  },
  methods: {
    setItemRef(el) {
      // TODO something about this getting called when tab switches
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
  mounted() {}
}
</script>

<style lang="scss" scoped>
.main {
  margin-left: 15vw;
}
</style>
