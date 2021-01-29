<template>
  <div v-if="orders">
    <h1>All Orders</h1>
    <Tabs :tabs="tabs" @set-tab="setTab">
      <Tab ref="tab1" name="Orders" :selected="selectedTab == 'Orders'">
        Inside orders
      </Tab>
      <Tab ref="tab2" name="Past" :selected="selectedTab == 'Past'">
        inside past
      </Tab>
    </Tabs>
    <OrdersTable />
    order: {{ orders }} past: {{ pastOrders }}
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
