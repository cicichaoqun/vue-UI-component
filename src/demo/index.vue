<template>
<div>
  <group title="栗子">
    <groupItem title="cButton" right-desc="按钮" link="/cButton"></groupItem>
    <groupItem title="cHeader" right-desc="头部" link="/cHeader"></groupItem>
    <groupItem title="tabBar" right-desc="tabBar" link="/tabBar"></groupItem>
    <groupItem title="cTag" right-desc="cTag" link="/cTag"></groupItem>
    <groupItem title="toast" right-desc="提示框" link="/toast"></groupItem>
  </group>
</div>
</template>

<script>
import group from '../components/group/index.vue'
import groupItem from '../components/group-item/index.vue'
export default {
  components: {
    group,
    groupItem
  },
  data () {
    return {
    }
  }
}
</script>