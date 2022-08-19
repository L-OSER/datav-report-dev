<template>
  <common-card title="累计订单量" :value="orderToday">
    <template>
      <v-chart :option="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">{{ orderLastDay }}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'TotalOrder',
  mixins: [commonCardMixin, commonDataMixin],
  data() {
    return {
      options: {}
    }
  },
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false // 左右边距取消间隔,百分百拉伸
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: this.orderTrend,
            areaStyle: {
              color: 'purple' // 区域填充
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    }
  }
}
</script>

<style>
</style>
