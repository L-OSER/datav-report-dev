<template>
  <common-card title="今日交易用户数" :value="orderUser">
    <template>
      <v-chart :option="getOption()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{ returnRate }}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOption() {
      return {
        color: ['#3398DB'], // 柱状颜色
        tooltip: {
          trigger: 'axis'
        },
        series: [
          {
            name: '用户实时交易量',
            type: 'bar',
            data: this.orderUserTrend,
            barWidth: '60%' // 柱状的宽度
          }
        ],
        xAxis: {
          type: 'category',
          data: this.orderUserTrendAxis,
          show: false
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }
  }
}
</script>

<style>
</style>
