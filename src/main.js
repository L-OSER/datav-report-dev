import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as echarts from 'echarts'
import './plugins/vcharts.js'
import ECharts from 'vue-echarts'
import './style/index.css'
// import VCharts from 'v-charts'
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

echarts.use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
])
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-chart', ECharts)
// Vue.use(VCharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
