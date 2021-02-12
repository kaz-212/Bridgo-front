<template>
  <div class="main" :v-if="themes">
    <Tabs :tabs="tabs" @set-tab="setTab">
      <Tab
        v-for="theme in themes"
        :key="theme._id"
        :ref="setItemRef"
        :name="theme.name"
        :selected="selectedTab == theme.name"
        :class="{ selected: selectedTab == theme.name }"
      >
        <div class="scroll-view" v-if="scrollView">
          <PortfolioTab :projects="theme.projects" @toggle-scroll-view="scrollView = false" />
        </div>
        <div class="view-all" v-if="!scrollView">
          <PortfolioViewAll :projects="theme.projects" @toggle-scroll-view="scrollView = true" />
          <button @click="scrollView = true">Scroll View</button>
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Tabs from '@/components/Tab/Tabs.vue'
import PortfolioTab from '@/components/Portfolio/PortfolioTab.vue'
import PortfolioViewAll from '@/components/Portfolio/PortfolioViewAll.vue'

export default {
  name: 'AllPortfolio',
  components: {
    Tab,
    Tabs,
    PortfolioViewAll,
    PortfolioTab
  },
  data() {
    return {
      tabs: [],
      selectedTab: '',
      scrollView: true
    }
  },
  computed: {
    themes() {
      return this.$store.state.project.themes
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
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  top: 6vh;
}
</style>
