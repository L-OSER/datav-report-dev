<template>
  <v-chart :option="options" />
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'WordCloud',
  mixins: [commonDataMixin],
  watch: {
    wordCloud() {
      const data = []
      this.wordCloud.forEach((item) => {
        data.push({
          name: item.word,
          value: item.count
        })
      })
      this.options = {
        series: [
          {
            type: 'wordCloud',
            data,
            shape: 'circle',
            textStyle: {
              fontFamily: 'sans-serif',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
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
      }
    }
  },
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.options = {}
  }
}
</script>

<style lang="scss" scoped>
</style>
