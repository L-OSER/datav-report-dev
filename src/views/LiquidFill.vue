<template>
  <div id="container">123</div>
</template>

<script>
import 'echarts-liquidfill'
export default {
  mounted() {
    const data = [0.68, 0.5, 0.4, 0.3]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [
        {
          type: 'liquidFill',
          data,
          color: ['red', 'blue', 'yellow'],
          itemStyle: {
            opacity: 0.6 // 默认的时候透明度
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9 // 鼠标选中的时候透明度
            }
          },
          waveAnimation: false, // 波浪静止
          amplitude: 0, // 波浪幅度
          backgroundStyle: {
            // 背景色调整
            color: 'purple',
            borderWidth: 4,
            borderColor: '#444'
          },
          outline: {
            show: true, // 显示隐藏最外层边框
            borderDistance: 2, // 边框距离
            itemStyle: {
              borderWidth: 2,
              borderColor: 'red',
              shadowBlur: 'none'
            }
          },
          shape: 'rect' // 水位球形状 rect 矩形 triangle 三角形
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
