<template>
  <div v-if="prints">
    <section class="header">
      <div class="shop-banner">
        <h1>SHOP</h1>
        <h2>SHOP</h2>
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
          </section>
        </Tab>
        <Tab ref="tab2" name="Pieces" :selected="selectedTab == 'Pieces'">
          <section class="shop-container">
            <ProductWindow v-for="product in pieces" :key="product._id" :product="product" />
          </section>
        </Tab>
        <Tab ref="tab3" name="Other" :selected="selectedTab == 'Other'">
          <section class="shop-container">
            <ProductWindow v-for="product in other" :key="product._id" :product="product" />
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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .shop-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    // box-shadow: 0 0 6px 3px #b9bd45; // YELLOW
    box-shadow: 0 0 6px 3px #652788;
    width: 84%;
    height: 70%;
    margin: auto;
    background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1614024082/Bridgo/statics/Exhibition_Header.jpg');
    background-size: cover;
    background-position: center;

    h1 {
      margin: 0;
      color: rgba(255, 255, 255, 0);
      font-size: 63px;
      color: white;
      // text-shadow: 0 4px 4px #a2a037; // YELLOW
      // text-shadow: 0 4px 6px #7f268c;
      font-weight: 600;
      letter-spacing: 9px;
    }
    h2 {
      position: absolute;
      font-size: 64px;
      letter-spacing: 11px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0);
      // text-shadow: 0 65px 1px #808080;
      // text-shadow: 0 65px 2px #80808087;
      text-shadow: 0 65px 2px #8080805e;
      z-index: 1;
    }
    .tabs {
      position: absolute;
      bottom: 32px;

      .tab-name {
        margin: 0 30px;
        font-size: 17px;
        font-weight: 300;
        cursor: pointer;
        color: white;
        letter-spacing: 2px;
        padding: 10px;
        border-radius: 20px;
      }
      .selected {
        background-color: #1c1c282b;
      }
    }
  }
}

.shop-container {
  margin: 7vh auto;
  width: 63vw;
  max-width: 1000px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, auto);
}
</style>
