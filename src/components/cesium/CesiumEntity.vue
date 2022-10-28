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
    animation: false, // 隐藏动画控件
    baseLayerPicker: false, // 隐藏图层选择控件
    fullscreenButton: false, // 隐藏全屏按钮
    vrButton: false, // 隐藏VR按钮，默认false
    geocoder: false, // 隐藏地名查找控件
    homeButton: false, // 隐藏Home按钮
    infoBox: false, // 隐藏点击要素之后显示的信息窗口
    sceneModePicker: false, // 隐藏场景模式选择控件
    selectionIndicator: true, // 显示实体对象选择框，默认true
    timeline: false, // 隐藏时间线控件
    navigationHelpButton: false, // 隐藏帮助按钮
    scene3DOnly: true, // 每个几何实例将只在3D中呈现，以节省GPU内存
    shouldAnimate: true, // 开启动画自动播放
    sceneMode: 3, // 初始场景模式 1：2D 2：2D循环 3：3D，默认3
    requestRenderMode: true, // 减少Cesium渲染新帧总时间并减少Cesium在应用程序中总体CPU使用率
    // 如场景中的元素没有随仿真时间变化，请考虑将设置maximumRenderTimeChange为较高的值，例如Infinity
    maximumRenderTimeChange: Infinity
  })
  var czml = [{
      "id" : "document",
      "name" : "box",
      "version" : "1.0"
  },{
      "id" : "shape2",
      "name" : "Red box with black outline",
      "position" : {
          "cartographicDegrees" : [-107.0, 40.0, 300000.0]
      },
      "box" : {
          "dimensions" : {
              "cartesian": [400000.0, 300000.0, 500000.0]
          },
          "material" : {
              "solidColor" : {
                  "color" : {
                      "rgba" : [255, 255, 0, 128]
                  }
              }
          },
          "outline" : true,
          "outlineColor" : {
              "rgba" : [0, 0, 0, 255]
          }
      }
  }];
  var dataSourcePromise = Cesium.CzmlDataSource.load(czml);
  viewer.dataSources.add(dataSourcePromise);
  viewer.zoomTo(dataSourcePromise);
  let viewerDom = viewer.cesiumWidget.creditContainer as HTMLElement
  viewerDom.style.display = 'none'
})
</script>
<style scoped>
#mainMap {
  width: 100%;
  height: calc(100vh - 60px);
  background: #aabbcc;
}
#eye {
    position: absolute;
    width: 20%;
    height:20%;
    bottom: 0;
    right: 0;
    z-index: 999;
    background: red;
    border: solid blue 1px;
}
</style>
