import Vue from 'vue'
import VELine from 'v-charts/lib/line.common'
import VEBMap from 'v-charts/lib/bmap.common'
import VEMap from 'v-charts/lib/map.common'
// import VELiquidFill from 'v-charts/lib/liquidfill.common'
import 'v-charts/lib/style.css'

Vue.component('ve-line', VELine)
Vue.component('ve-map', VEMap)
Vue.component('ve-bmap', VEBMap)
// Vue.component('ve-liquidfill', VELiquidFill)

// 按需引入折线图组件
// |- lib/
//    |- line.common.js  -------------- 折线图
//    |- bar.common.js  --------------- 条形图
//    |- histogram.common.js  --------- 柱状图
//    |- pie.common.js  --------------- 饼图
//    |- ring.common.js  -------------- 环图
//    |- funnel.common.js  ------------ 漏斗图
//    |- waterfall.common.js  --------- 瀑布图
//    |- radar.common.js  ------------- 雷达图
//    |- map.common.js  --------------- 地图
//    |- sankey.common.js  ------------ 桑基图
//    |- heatmap.common.js  ----------- 热力图
//    |- scatter.common.js  ----------- 散点图
//    |- candle.common.js  ------------ k线图
//    |- gauge.common.js  ------------- 仪表盘
//    |- tree.common.js  -------------- 树图
//    |- bmap.common.js  -------------- 百度地图
//    |- amap.common.js  -------------- 高德地图
