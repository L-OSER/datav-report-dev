<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
        </div>
      </template>
      <template>
        <div></div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data() {
    return {
      activeIndex: '1',
      options: {
        columns: ['日期', '访问用户', '下单用户'],
        rows: [
          { 日期: '2018-05-22', 访问用户: 32371, 下单用户: 19810 },
          { 日期: '2018-05-23', 访问用户: 12328, 下单用户: 4398 },
          { 日期: '2018-05-24', 访问用户: 92381, 下单用户: 52910 }
        ]
      }
    }
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
