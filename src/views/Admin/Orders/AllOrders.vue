<template>
  <div v-if="orders">
    <h1>All Orders</h1>
    <Tabs :tabs="tabs" @set-tab="setTab">
      <Tab ref="tab1" name="Orders" :selected="selectedTab == 'Orders'">
        <OrdersTable :orders="orders" />
      </Tab>
      <Tab ref="tab2" name="Past" :selected="selectedTab == 'Past'">
        <OrdersTable :orders="pastOrders" />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from '@/components/Tab/Tab.vue'
import Tabs from '@/components/Tab/Tabs.vue'
import OrdersTable from '@/components/Admin/Orders/OrdersTable.vue'

export default {
  name: 'AllOrders',
  components: { OrdersTable, Tab, Tabs },
  data() {
    return {
      tabs: [],
      selectedTab: 'Orders'
    }
  },
  // TODO on click take you to order details instead of all in table
  // TODO add item name to items in orders schema so i dont have to populate (maybe other info too)
  computed: {
    orders() {
      return this.$store.getters['orders/getOrders']
    },
    pastOrders() {
      return this.$store.getters['orders/getPastOrders']
    }
  },
  methods: {
    setTab(tab) {
      /* eslint-disable */
      this.selectedTab = tab.name
      this.tabs = [this.$refs.tab1, this.$refs.tab2]
    }
  },
  mounted() {
    this.tabs = [this.$refs.tab1, this.$refs.tab2]
  }
}
</script>

<style lang="scss" scoped></style>
