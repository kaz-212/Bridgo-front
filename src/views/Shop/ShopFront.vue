<template>
  <div v-if="prints">
    <div class="shop-banner">
      <h1>Shop</h1>
    </div>
    <section class="tab-body">
      <Tabs :tabs="tabs" @set-tab="setTab">
        <Tab ref="tab1" name="Prints" :selected="selectedTab == 'Prints'">
          <section class="shop-container">
            <ProductWindow v-for="product in prints" :key="product._id" :product="product" />
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
.shop-banner {
  width: 100%;
  margin: 0 auto;
  height: 25vh;
  // background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612955104/Bridgo/statics/6A91EEF0-A9E9-4198-9601-63D8350F2886_wefe5t.jpg');
  background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612954940/Bridgo/statics/FDD1FA05-A350-4B8B-9483-60A282CF2E05_oh629l.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
}

.shop-container {
  background: black;
  display: grid;
  grid-template-columns: repeat(3, auto);
}
</style>
