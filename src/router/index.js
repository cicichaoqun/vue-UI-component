import Vue from 'vue'
import Router from 'vue-router'
import index from '@/demo/index'
import cButton from '@/demo/cButton'
import cHeader from '@/demo/cHeader'
import cTag from '@/demo/cTag'
import tabBar from '@/demo/tabBar'
import toast from '@/demo/toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cButton',
      name: 'cButton',
      component: cButton
    },
    {
      path: '/cHeader',
      name: 'cHeader',
      component: cHeader
    },
    {
      path: '/cTag',
      name: 'cTag',
      component: cTag
    },
    {
      path: '/tabBar',
      name: 'tabBar',
      component: tabBar
    },
    {
      path: '/toast',
      name: 'toast',
      component: toast
    }
  ]
})
