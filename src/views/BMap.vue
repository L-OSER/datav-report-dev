<template>
  <v-chart :option="options"></v-chart>
</template>
<script>
import 'echarts/extension/bmap/bmap'
const testPoint = [
  {
    name: '海门',
    value: [121.15, 31.89, 80]
  },
  {
    name: '南京',
    value: [118.78, 32.04, 100]
  }
]
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      options: {}
    }
  },
  created() {
    this.options = {
      title: {
        text: '销售数据大盘',
        subtext: '销售趋势统计',
        left: 'center'
      },
      bmap: {
        key: '4pIueGCMEXkAclIhpev6mKGiZDnkGSnA',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false,
        mapStyle: {
          styleJson: [
            {
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'land',
              elementType: 'all',
              stylers: {
                color: '#f3f3f3'
              }
            },
            {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                color: '#fdfdfd'
              }
            },
            {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'green',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'subway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'local',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'building',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'label',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#999999'
              }
            }
          ]
        }
      },
      tooltip: {},
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: testPoint,
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: function (val) {
            return val[2] / 10 // 控制点的大小
          },
          label: {
            show: false,
            position: 'right',
            formatter: function (v) {
              return `${v.data.name} - ${v.data.value[2]}`
            }
            // 控制数据显示
          },
          emphasis: {
            // 鼠标移动显示右侧数据
            label: {
              show: true
            }
          }
        },
        {
          name: 'Top 2',
          type: 'effectScatter', // 波纹图
          coordinateSystem: 'bmap',
          data: testPoint,
          symbolSize: function (val) {
            return val[2] / 5
          },
          encode: {
            value: 2
          },
          label: {
            formatter: function (v) {
              return `${v.data.name} - ${v.data.value[2]}`
            },
            show: true,
            position: 'right'
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: 'stroke' // 波纹效果更改
          },
          itemStyle: {
            color: 'purple'
          }
        }
      ]
    }
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
