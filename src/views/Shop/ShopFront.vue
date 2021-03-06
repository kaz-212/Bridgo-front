<template>
  <div v-if="prints">
    <section class="header">
      <div class="shop-banner">
        <h1>SHOP</h1>
        <div class="tabs">
          <span
            v-for="tab in tabs"
            :key="tab.name"
            class="tab-name"
            @click="setTab(tab)"
            :class="{ selected: selectedTab === tab.name }"
            >{{ tab.name }}</span
          >
        </div>
      </div>
    </section>

    <section class="tab-body">
      <Tabs :tabs="tabs" :hide="true">
        <Tab ref="tab1" name="Prints" :selected="selectedTab == 'Prints'">
          <section class="shop-container">
            <ProductWindow v-for="product in prints" :key="product._id" :product="product" />
            <h2 v-if="!prints.length">Coming Soon.</h2>
          </section>
        </Tab>
        <Tab ref="tab2" name="Pieces" :selected="selectedTab == 'Pieces'">
          <section class="shop-container">
            <ProductWindow v-for="product in pieces" :key="product._id" :product="product" />
            <h2 v-if="!prints.length">Coming Soon.</h2>
          </section>
        </Tab>
        <Tab ref="tab3" name="Other" :selected="selectedTab == 'Other'">
          <section class="shop-container">
            <ProductWindow v-for="product in other" :key="product._id" :product="product" />
            <h2 v-if="!prints.length">Coming Soon.</h2>
          </section>
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
      selectedTab: 'Prints',
      scrolling: false
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
    }
  },
  mounted() {
    this.tabs = [this.$refs.tab1, this.$refs.tab2, this.$refs.tab3]
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 60px;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;

  .shop-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0 0 6px 1px #1c1c1c;
    width: 84%;
    height: 76%;
    margin: auto;
    background-image: url('https://res.cloudinary.com/bridget-simpson-art/image/upload/w_auto,q_auto/v1614699818/Bridgo/statics/shop_background.jpg');
    background-size: cover;
    background-position: center;

    h1 {
      margin: 0;
      color: rgba(255, 255, 255, 0);
      font-size: 63px;
      color: white;
      font-weight: 600;
      letter-spacing: 9px;
    }

    .tabs {
      position: absolute;
      bottom: 43px;

      .tab-name {
        margin: 0 40px;
        font-size: 17px;
        font-weight: 300;
        cursor: pointer;
        color: white;
        letter-spacing: 2px;
        padding: 2px;
      }
      .selected {
        border-bottom: 1px solid white;
      }
    }
  }
}

.shop-container {
  margin: 7vh auto;
  min-height: 90vh;
  width: 63vw;
  max-width: 1000px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, auto);
  h2 {
    font-weight: 300;
    font-size: 27px;
  }
}
</style>
