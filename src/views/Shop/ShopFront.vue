<template>
  <div v-if="prints">
    <h1>Shop Front</h1>
    <section class="tab-body">
      <Tabs :tabs="tabs" @set-tab="setTab">
        <Tab ref="tab1" name="Prints" :selected="selectedTab == 'Prints'">
          <section class="shop-container">
            <ProductWindow
              v-for="particular in prints"
              :key="particular._id"
              :particular="particular"
            />
          </section>
        </Tab>
        <Tab ref="tab2" name="Pieces" :selected="selectedTab == 'Pieces'">
          <h2>Inside Tab 2</h2>
        </Tab>
        <Tab ref="tab3" name="Other" :selected="selectedTab == 'Other'">
          <h2>Inside Tab 3</h2>
        </Tab>
      </Tabs>
    </section>
  </div>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Tabs from '@/components/Tab/Tabs.vue'
import ProductWindow from '@/components/Shop/ProductWindow.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ShopFront',
  components: { Tab, Tabs, ProductWindow },
  data() {
    return {
      tabs: [],
      selectedTab: 'Prints'
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
      this.tabs = [this.$refs.tab1, this.$refs.tab2, this.$refs.tab3]
    }
  },
  mounted() {
    this.tabs = [this.$refs.tab1, this.$refs.tab2, this.$refs.tab3]
  }
}
</script>

<style lang="scss" scoped>
.shop-container {
  background: black;
  display: grid;
  grid-template-columns: repeat(3, auto);
}
</style>
