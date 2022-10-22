<template>
  <div id="mainMap"></div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNTFlNWVmMC1jOWRhLTQyMDktOTY4Ny02YTU5YWFlMGYwY2IiLCJpZCI6OTQzNDQsImlhdCI6MTY1Mjg4ODEyNn0.g2vq1qq_rdfZeRTy73nBkEDzhMIM4upkYcbIdFYnCiQ'

  const viewer = new Cesium.Viewer('mainMap', {
    infoBox: false,
    homeButton: false,
    timeline: false,
    navigationHelpButton: false,
    geocoder: false,
    sceneModePicker: false,
    animation: false,
    fullscreenButton: false
  })
  const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings())
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(116.405419, 39.926666, 1000000),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-25.0)
    }
  })
  // viewer.cesiumWidget.creditContainer.style.display = 'none'
})
</script>
<style scoped>
#mainMap {
  width: 100%;
  height: calc(100vh - 60px);
  background: #aabbcc;
}
</style>
