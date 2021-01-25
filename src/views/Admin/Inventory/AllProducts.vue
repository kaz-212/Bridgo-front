<template>
  <div id="all-admin-products">
    <h1>All Products</h1>

    <Tabs :tabs="tabs" @set-tab="setTab">
      <Tab ref="tab1" name="Pieces" :selected="selectedTab == 'Pieces'">
        <ProductTable :products="pieces" />
      </Tab>
      <Tab ref="tab2" name="Prints" :selected="selectedTab == 'Prints'">
        <ProductTable :products="prints" />
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
import ProductTable from '@/components/Admin/Inventory/ProductTable.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'AllProducts',
  components: { Tab, Tabs, ProductTable },
  data() {
    return {
      tabs: [],
      selectedTab: 'Pieces'
    }
  },
  computed: {
    ...mapGetters({
      pieces: 'inventory/getPieces',
      prints: 'inventory/getPrints',
      other: 'inventory/getOther'
    })
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
    console.log(this.prints)
  }
}
</script>

<style lang="scss" scoped></style>
