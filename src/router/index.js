import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BMap from '../views/BMap.vue'

import LiquidFill from '../views/LiquidFill.vue'
import WordCloud from '../views/WordCloud.vue'
import map from '../views/map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/LiquidFill',
    name: 'LiquidFill',
    component: LiquidFill
  },
  {
    path: '/WordCloud',
    name: 'WordCloud',
    component: WordCloud
  }
]

const router = new VueRouter({
  routes
})

export default router
