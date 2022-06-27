<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6"> <el-card shadow="hover"> 鼠标悬浮时显示 </el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover"> 鼠标悬浮时显示 </el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover"> 鼠标悬浮时显示 </el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover"> 鼠标悬浮时显示 </el-card></el-col>
    </el-row>
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>
<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
export default {
  name: 'HomeView',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
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
