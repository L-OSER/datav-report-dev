import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as echarts from 'echarts'
import './plugins/vcharts.js'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import './style/index.css'

// import ECharts modules manually to reduce bundle size
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
])
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-chart', ECharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
