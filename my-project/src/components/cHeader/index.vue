<template>
    <div class="headerWrap">
        <header class="header">
          <i @click="$router.go(-1);" class="goback"></i>
          <i @click="$router.push({path: '/pages/man/home/home'});" class="gohome"></i>
        </header>
    </div>
</template>
<script>
export default({
    name: 'cHeader',
})
</script>

<style lang="less">
  @import "./style.less";
</style>