<template>
<div style="padding: 0 15px;">
  <cButton>提交</cButton>
  <cButton type="brand">确认</cButton>
  <cButton type="primary">添加</cButton>
  
  <cButton disabled>提交</cButton>
  <cButton type="brand" disabled>确认</cButton>
  <cButton type="primary" disabled>添加</cButton>

  <cButton mini>搜索</cButton>
  <cButton type="brand" mini>搜索</cButton>
  <cButton type="primary" mini>搜索</cButton>

  <cButton mini disabled>搜索</cButton>
  <cButton type="brand" mini disabled>搜索</cButton>
  <cButton type="primary" mini disabled>搜索</cButton>

  <cButton transparent>搜索</cButton>
  <cButton type="brand" transparent>搜索</cButton>
  <cButton type="primary" transparent>搜索</cButton>

  <cButton mini transparent>搜索</cButton>
  <cButton type="brand" mini transparent>搜索</cButton>
  <cButton type="primary" mini transparent>搜索</cButton>
  
</div>
</template>

<script>
import cButton from '../components/cButton/index.vue'
export default {
  ready () {
  },
  components: {
    cButton
  },
  data () {
    return {}
  }
}
</script>