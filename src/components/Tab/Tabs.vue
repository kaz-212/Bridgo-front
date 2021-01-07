<template>
  <article>
    <header class="tabs">
      <ul>
        <li></li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot> </slot>
    </section>
  </article>
</template>
<script>
export default {
  name: 'Tabs'
}
</script>

<style lang="scss" scoped></style>
