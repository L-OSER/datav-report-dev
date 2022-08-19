<template>
  <div id="container">123</div>
</template>

<script>
import 'echarts-wordcloud'
export default {
  mounted() {
    const data = [
      {
        name: '大数据',
        value: 100
      },
      {
        name: '数据可视化',
        value: 50
      },
      {
        name: '空间',
        value: 20
      }
    ]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [
        {
          type: 'wordCloud',
          data,
          shape: 'circle',
          textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // 随机 color
              return (
                'rgb(' +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') +
                ')'
              )
            }
          },
          emphasis: {
            focus: 'self',

            textStyle: {
              textShadowBlur: 10,
              textShadowColor: '#333'
            }
          }
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
