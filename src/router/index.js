import Vue from 'vue'
import Router from 'vue-router'
import cButton from '@/demo/cButton'
import cHeader from '@/demo/cHeader'
import cTag from '@/demo/cTag'
import tabBar from '@/demo/tabBar'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
