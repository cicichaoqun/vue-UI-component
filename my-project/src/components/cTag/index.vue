<template>
  <span
  :class="['c-tag', {
    'c-tag-red': type === 'red',
    'c-tag-gray': type === 'gray'
  }]"><slot>{{ text }}</slot></span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'red'
    },
    line: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
@import "./style.less";
</style>