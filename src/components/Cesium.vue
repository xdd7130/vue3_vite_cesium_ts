 <template>
  <div id="mainMap"></div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZjA2ZDQ2ZS02NTA4LTQ2NTItODE1My1kZjE3MjBkMjFkNzAiLCJpZCI6NDM5NCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MDcyNzI4Nn0.L7P8pJponZfYjdsGnEw2hIHd2AN0h-SuYl6XvzOwLeA'

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
    destination: Cesium.Cartesian3.fromDegrees(116.405419, 39.926666, 3000),
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
  height: 1000px;
  background: #aabbcc;
}
</style>
