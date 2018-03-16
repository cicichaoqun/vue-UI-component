<template>
  <div class="tabBar">
    <a class="tab-item activity">
      <img class="tab-icon icon-activity" src="http://rsm.modernavenue.com/common/res/img/wx-vue/tabBar/lfs-home-activity.png">
      <div class="item-txt">首页</div>
    </a>
    <a class="tab-item">
      <img class="tab-icon" src="http://rsm.modernavenue.com/common/res/img/wx-vue/tabBar/lfs-product.png">
      <div class="item-txt">分类</div>
    </a>
    <a class="tab-item">
      <img class="tab-icon" src="http://rsm.modernavenue.com/common/res/img/wx-vue/tabBar/lfs-brand.png">
      <div class="item-txt">品牌</div>
    </a>
    <a class="tab-item">
      <img class="tab-icon" src="http://rsm.modernavenue.com/common/res/img/wx-vue/tabBar/lfs-cart.png">
      <div class="item-txt">购物车</div>
    </a>
    <a class="tab-item">
      <img class="tab-icon" src="http://rsm.modernavenue.com/common/res/img/wx-vue/tabBar/lfs-my.png">
      <div class="item-txt">我的</div>
    </a>
  </div>
</template>
<script>
  export default{
        name: 'tabBar'
    }
</script>
<style lang="less">
  @import "./style.less";
</style>