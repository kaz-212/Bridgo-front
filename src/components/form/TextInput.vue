<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type ? type : 'text'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: {
    id: String,
    modelValue: String,
    label: String,
    type: String
  },
  emits: {
    'update:modelValue': String
  }
}
</script>

<style lang="scss" scoped>
label {
  display: block;
}
</style>
