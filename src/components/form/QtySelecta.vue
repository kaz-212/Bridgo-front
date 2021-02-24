<template>
  <div class="custom-select">
    <select :name="`${index}-qty`" :id="`${index}-qty`" @change="changeQuantity($event)">
      <option :selected="qty === 1" value="1">1</option>
      <option :selected="qty === 2" value="2">2</option>
      <option :selected="qty === 3" value="3">3</option>
      <option :selected="qty === 4" value="4">4</option>
      <option :selected="qty === 5" value="5">5</option>
      <option :selected="qty === 6" value="6">6</option>
      <option :selected="qty === 7" value="7">7</option>
      <option :selected="qty === 8" value="8">8</option>
      <option :selected="qty === 9" value="9">9</option>
      <option :selected="qty === 10" value="10">10</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'QtySelecta',
  props: { qty: Number, index: Number },
  emits: { 'update:qty': Number, 'dispatch-qty': null },
  data() {
    return {
      // itemQty: this.qty
    }
  },
  methods: {
    changeQuantity(event) {
      this.$emit('update:qty', parseInt(event.target.value, 10))
      this.$emit('dispatch-qty')
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select {
  width: 200px;
}
</style>
