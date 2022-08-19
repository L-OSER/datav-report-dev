<template>
  <div class="home">
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
import { wordCloud, screenData, mapScatter } from '../api'
export default {
  name: 'HomeView',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.mapData
    }
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  mounted() {
    wordCloud().then((data) => {
      this.wordCloud = data
    })
    screenData().then((data) => {
      this.reportData = data
    })
    mapScatter().then((data) => {
      this.mapData = data
    })
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
