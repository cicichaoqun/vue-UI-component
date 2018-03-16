<template>
  <a href="javascript:" class="c-btn"
  :class="{'c-btn-disabled': disabled,
    'c-btn-mini': mini,
    'c-btn-transparent': transparent,
    'c-btn-default': type === 'default',
    'c-btn-brand': type === 'brand',
    'c-btn-primary': type === 'primary',
  }"><slot>{{ text }}</slot></a>
</template>

<script>
export default {
  name:'cButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  }
}
</script>
<style lang="less">
  @import "./style.less";
</style>