<template>
<router-link :to="link" :tag="link?'a':'div'">
<div class="mui-group-item" :class="{'no-access': !access}">
  <div class="mui-group-item-hd">
    <slot name="hd">
      <p>{{title}}</p>
      <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </slot>
  </div>
  <div class="mui-group-item-bd mui-group-item-primary">
    <slot></slot>
  </div>
  <div class="mui-group-item-ft" :class="{'with-arrow': withArrow}">
    <slot name="ft">
      {{rightDesc}}
    </slot>
  </div>
</div>
</router-link>
</template>

<script>
import InlineDesc from '../inline-desc/index.vue'
export default {
  name:'groupItem',
  components: {
    InlineDesc
  },
  props: {
    title: String,
    inlineDesc: String,
    rightDesc: String,
    link:{
      type:String,
      default:''
    },
    withArrow: {
      type: Boolean,
      default: true
    },
    access: {
      type: Boolean,
      default: true
    }
  },
  created () {
  }
}
</script>

<style lang="less">
@import "style.less";
</style>