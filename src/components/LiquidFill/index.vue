<template>
  <v-chart :option="options" />
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'
function getColor(value) {
  return value > 0 && value <= 0.5
    ? 'rgba(97,216,0,.7)'
    : value > 0.5 && value <= 0.8
    ? 'rgba(204,178,26,.7)'
    : value > 0.8
    ? 'rgba(241,47,28,.7)'
    : '#c7c7cb'
}
export default {
  name: 'LiquidFill',
  mixins: [commonDataMixin],
  watch: {
    userGrowthLastMonth() {
      this.options = {
        series: [
          {
            type: 'liquidFill',
            radius: '75%',
            data: [this.userGrowthLastMonth / 1000],
            color: [getColor(this.userGrowthLastMonth / 1000)],
            label: {
              formatter: (v) => {
                return `${(v.data * 100).toFixed(2)}%`
              },
              fontSize: 36,
              color: '#999',
              fontWeight: 'normal',
              insideColor: '#fff', // 文本被波浪重叠的时候字体颜色
              position: ['50%', '50%']
            },
            outline: {
              show: true, // 显示隐藏最外层边框
              borderDistance: 0, // 边框距离
              itemStyle: {
                borderWidth: 1,
                borderColor: '#aaa4a4',
                color: 'none',
                shadowBlur: '0',
                shadowColor: '#fff'
              }
            },
            backgroundStyle: {
              color: '#fff'
            },
            itemStyle: {
              shadowBlur: '0',
              shadowColor: '#fff'
            },
            amplitude: 8
          }
        ]
      }
    }
  },
  data() {
    return {
      options: {}
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
