<template>
  <div v-if="prints">
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
  // margin-top: 7vh;
  // border: 2px solid black;
  // height: 25vh;
  height: 33vh;
  background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612955104/Bridgo/statics/6A91EEF0-A9E9-4198-9601-63D8350F2886_wefe5t.jpg');
  // background-image: url('https://res.cloudinary.com/dqyymjqpg/image/upload/v1612954940/Bridgo/statics/FDD1FA05-A350-4B8B-9483-60A282CF2E05_oh629l.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    margin: 0;
    color: rgba(255, 255, 255, 0);
    font-size: 60px;
    text-shadow: 0 0 2px #c3bf43;
    font-weight: 300;
  }
  .tabs {
    position: absolute;
    bottom: 10px;

    .tab-name {
      margin: 0 30px;
      font-size: 17px;
      font-weight: 300;
      cursor: pointer;
      color: black;
    }
    .selected {
      color: #ffff14d6;
      // text-decoration: underline;
    }
  }
}

.shop-container {
  padding-top: 4vh;
  margin: 0 auto;
  width: 60vw;
  // background: black;
  // background: linear-gradient(#9198e5, #e66465);
  display: grid;
  grid-template-columns: repeat(3, auto);
  min-height: 75vh;
}
</style>
