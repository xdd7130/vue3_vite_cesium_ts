<template>
  <div id="mainMap"></div>
  <button @click ="rotatex()">rotatex</button>
	<button @click ="rotatey()">rotatey</button>
	<button @click ="rotatez()">rotatez</button>
	<div id="loadingOverlay"><h1>Loading...</h1></div>
  <div id="toolbar"></div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import * as Cesium from 'cesium'


  let tileset = ref(null)
  let m = ref(null)
  const step = ref(10);
  const anglex = ref(1)
  const angley = ref(1)
  const anglez = ref(1)
  onMounted(() => {
    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNTFlNWVmMC1jOWRhLTQyMDktOTY4Ny02YTU5YWFlMGYwY2IiLCJpZCI6OTQzNDQsImlhdCI6MTY1Mjg4ODEyNn0.g2vq1qq_rdfZeRTy73nBkEDzhMIM4upkYcbIdFYnCiQ'

    var viewer = new Cesium.Viewer('mainMap', {
			imageryProvider: new Cesium.SingleTileImageryProvider({
					url: '../../../src/assets/img/worldimage.jpg'
			}),
			homeButton: false,
			//sceneModePicker: false,
			baseLayerPicker: false,
			navigationHelpButton: false,
			animation: false,
			timeline: false,
			fullscreenButton: false,
			vrButton: false
    });

    viewer.scene.globe.depthTestAgainstTerrain = false;

    tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
			url : '../../../src/assets/Tileset/tileset.json',
			modelMatrix:Cesium.Matrix4.IDENTITY 
		}));

    tileset.readyPromise.then(function() {
			var boundingSphere = tileset.boundingSphere;
			viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0.0, -0.5, boundingSphere.radius * 2));
			viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
		}).catch(function(error) {
				throw(error);
		});
		m = tileset.modelMatrix;
    
    let viewerDom = viewer.cesiumWidget.creditContainer as HTMLElement
    viewerDom.style.display = 'none'
  })

	function rotatex(){
		anglex.value += 1;
		let m1 = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(anglex.value));   
		tileset.modelMatrix = Cesium.Matrix4.multiplyByMatrix3(m, m1,new Cesium.Matrix4());
	}

	function rotatey(){
		angley.value += 1;
		let m1 = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(angley.value));   
		tileset.modelMatrix = Cesium.Matrix4.multiplyByMatrix3(m, m1,new Cesium.Matrix4());
	}

	function rotatez(){
		anglez.value += 1;
		let m1 = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(anglez.value));   
		tileset.modelMatrix = Cesium.Matrix4.multiplyByMatrix3(m, m1,new Cesium.Matrix4());
	}
</script>
<style scoped>
#mainMap {
  width: 100%;
  height: calc(100vh - 60px);
  background: #aabbcc;
}
</style>
