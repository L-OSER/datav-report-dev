<template>
  <common-card title="累计用户数" :value="userToday">
    <template>
      <v-chart :option="getOption()"></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">{{ userGrowthLastDay }}</span>
        <div class="increase"></div>
        <span class="month">月同比 </span>
        <span class="emphasis">{{ userGrowthLastMonth }}</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOption() {
      return {
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            name: '上月平台用户数',
            type: 'bar',
            data: [this.userLastMonth],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            name: '今日平台用户数',
            type: 'bar',
            data: [this.userTodayNumber],
            itemStyle: {
              color: '#eee'
            },
            barWidth: 10,
            barGap: '-100%', // 移动第二个柱子的位置实现重叠
            z: '-1' // 改变这根柱子的层级使这根柱子在下面
          },
          {
            type: 'custom',
            data: [this.userLastMonth],
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              // 获取第一根柱子长度
              return {
                // 自定义icon
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M957.056 338.624C951.84 327.296 940.512 320 928 320L96 320c-12.512 0-23.84 7.296-29.088 18.624-5.216 11.36-3.328 24.704 4.768 34.208l416 485.344c6.08 7.104 14.944 11.2 24.288 11.2s18.208-4.096 24.288-11.2l416-485.344C960.448 363.328 962.272 349.984 957.056 338.624z',
                      x: -5,
                      y: -15,
                      width: 10,
                      height: 10
                    },
                    style: {
                      fill: '#45c946'
                    },
                    layout: 'cover' // 图标填充
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M952.32 715.2l-416-485.376c-12.16-14.176-36.448-14.176-48.608 0l-416 485.376c-8.128 9.472-9.984 22.848-4.768 34.176C72.16 760.704 83.488 768 96 768l832 0c12.512 0 23.84-7.296 29.056-18.624S960.448 724.672 952.32 715.2z',
                      x: -5,
                      y: 5,
                      width: 10,
                      height: 10
                    },
                    style: {
                      fill: '#45c946'
                    },
                    layout: 'cover'
                  }
                ]
              }
            }
          }
        ],
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
