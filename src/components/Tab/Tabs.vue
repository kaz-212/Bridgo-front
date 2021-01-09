<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="tab in tabs" :key="tab.name">
          <div class="nav-item" :class="{ 'is-active': tab.isActive }" @click="setTab(tab)">
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot> </slot>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Tabs',
  props: { tabs: Array },
  emits: ['set-tab'],
  data() {
    return {}
  },
  methods: {
    setTab(tab) {
      this.$emit('set-tab', tab)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  border-bottom: 1px solid black;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 40px;

      .nav-item {
        cursor: pointer;

        &.is-active {
          text-decoration: underline;
        }
      }
    }
  }
}

.tabs-details {
  padding: 10px;
}
</style>
