<template>
  <div id="all-admin-products">
    <h1>All Products</h1>

    <Tabs :tabs="tabs" @set-tab="setTab">
      <Tab ref="tab1" name="Pieces" :selected="selectedTab == 'Pieces'">
        <h2>Inside Tab 1</h2>
      </Tab>
      <Tab ref="tab2" name="Prints" :selected="selectedTab == 'Prints'">
        <h2>Inside Tab 2</h2>
      </Tab>
      <Tab ref="tab3" name="Other" :selected="selectedTab == 'Other'">
        <h2>Inside Tab 3</h2>
      </Tab>
    </Tabs>

    <router-link :to="{ name: 'NewProduct' }"><button>New Product</button></router-link>
  </div>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Tabs from '@/components/Tab/Tabs.vue'

export default {
  name: 'AllProducts',
  components: { Tab, Tabs },
  data() {
    return {
      tabs: [],
      selectedTab: 'Pieces'
    }
  },
  computed: {
    products() {
      return this.$store.state.inventory.products
    }
  },
  methods: {
    setTab(tab) {
      /* eslint-disable */
      this.selectedTab = tab.name
      // console.log('ello', selectedTab.name)
      this.tabs = [this.$refs.tab1, this.$refs.tab2, this.$refs.tab3]
      // console.log(this.$refs.tab1, this.$refs.tab2, this.$refs.tab3)
    }
  },
  mounted() {
    this.tabs = [this.$refs.tab1, this.$refs.tab2, this.$refs.tab3]
  }
}
</script>

<style lang="scss" scoped></style>
