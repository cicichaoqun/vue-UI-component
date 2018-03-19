<template>
<div>
    <group-item title="loading" right-desc="点击出弹窗" @click.native="triggerLoadingToast"></group-item>
    <group-item title="warning" right-desc="点击出弹窗" @click.native="triggerWarningToast"></group-item>
    <group-item title="success" right-desc="点击出弹窗" @click.native="triggerSuccessToast"></group-item>
  <toast
  :show="loadingToast.show"
  :text="loadingToast.text"></toast>
  <toast
  :show="warningToast.show"
  :text="warningToast.text"
  :type="warningToast.type"></toast>
  <toast
  :show="successToast.show"
  :text="successToast.text"
  :type="successToast.type"></toast>
</div>
</template>

<script>
import Toast from '../components/Toast/index.vue'
import group from '../components/group/index.vue'
import groupItem from '../components/group-item/index.vue'
export default {
  components: {
    Toast,
    group,
    groupItem
  },
  mounted(){
  },
  data () {
    return {
      loadingToast: {
        show: false
      },
      warningToast: {
        show: false,
        type: 'warning',
        text: '系统繁忙'
      },
      successToast: {
        show: false,
        type: 'success',
        text: '操作成功'
      }
    }
  },
  methods: {
    triggerLoadingToast:function() {
      this.loadingToast.show = !this.loadingToast.show
    },
    triggerWarningToast () {
      this.warningToast.show = !this.warningToast.show
    },
    triggerSuccessToast () {
      this.successToast.show = !this.successToast.show
    }
  }
}
</script>

<style>
</style>