<template>
  <!--地图组件-->
  <div>
  <map-component
    ref="map"
    :id="id"
    :type="type"
    :config="config"
    :init-position="initPosition"
    :load-end="loadEndFun"
    style="
      z-index: 100;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    "
  ></map-component>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'map-com',
  props: {},
  data() {
    return {
      id: 'map',
      type: 'vue',
      config: window.baiduConfig,
      // 地图初始定位
      initPosition: {
        level: 12, // 级别
        centerPoint: [24.49822425842285, 118.1246566772461] // 中心点
      },
      // 地图加载完成回调方法
      loadEndFun: 'vueloadEnd'
    }
  },
  components: {
    // 后端
    'map-component': httpVueLoader(
      './vue-map-component/leaflet/map-component.vue',
      'frontEnd'
    )
  },
  methods: {
    
    vueloadEnd() {
      console.log('vue地图初始化完成,地图对象:', this.$refs.map.map)
      
    }
  }
}
</script>

<style>
</style>
