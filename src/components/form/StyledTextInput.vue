<template>
  <div class="input-box">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      required
    />
    <label class="label-name" :for="id"
      ><span class="content-name">{{ label }}</span></label
    >
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
    type: { type: String, default: 'text' }
  },
  emits: {
    'update:modelValue': String
  }
}
</script>

<style lang="scss" scoped>
// $activeColour: #5fa8d3;
// $activeColour: #299999;
$activeColour: #397171;

.input-box {
  position: relative;
  height: 50px;
  overflow: hidden;

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;
    background: rgba(0, 0, 0, 0);
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-bottom: 1px solid $activeColour;
      left: 0;
      bottom: -1px;
      transform: translateX(-100%);
      transition: transform 0.3s;
      background: rgba(0, 0, 0, 0);
    }
    .content-name {
      position: absolute;
      bottom: 5px;
      font-size: 14px;
      left: 0;
      transition: all 0.3s ease;
    }
  }
  input {
    height: 100%;
    width: 100%;
    // color: #595f6e;
    color: black;
    padding-top: 20px;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0);
    font-size: 16px;
    &:focus + .label-name,
    &:valid + .label-name {
      .content-name {
        transform: translateY(-150%);
        font-size: 12px;
        color: $activeColour;
      }
      &::after {
        transform: translateX(0%);
      }
    }
  }
}
</style>
