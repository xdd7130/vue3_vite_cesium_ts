<!--
 * @Author: 解丹丹 xiedandan@hikvision.com.cn
 * @Date: 2025-07-18 14:29:58
 * @LastEditors: 解丹丹 xiedandan@hikvision.com.cn
 * @LastEditTime: 2025-07-22 11:38:17
 * @FilePath: \vue3_vite_cesium_ts\src\components\three\one.vue
 * @Description: 
 * 
 * Copyright (c) 2025, All Rights Reserved. 
-->
<template>
  <div ref="containerRef" class="container"></div>
  <canvas class="webgl"></canvas>
</template>
<script  setup>
import { ref, onMounted } from 'vue'

// 导入threejs
import * as THREE from 'three'

// const containerRef = ref(null)
//  // 创建场景
//   const scene = new THREE.Scene()
//   // 创建相机
//   const camera = new THREE.PerspectiveCamera(
//     45, //视角
//     1 / 1, //宽高比
//     0.1, //近平面
//     1000 //远平面
//   )
//   // 创建渲染器
//   const renderer = new THREE.WebGLRenderer()
//   renderer.setSize(400, 400)

//   const geometry = new THREE.SphereGeometry(1, 32, 32)
//   // 创建材质
//   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
//   // 创建网络
//   const cube = new THREE.Mesh(geometry, material)
//   // 网络添加到场景
//   scene.add(cube)
//   // 设置相机位置
//   camera.position.z = 5
//   camera.lookAt(0, 0, 0) //原点

//   // 渲染函数
//   ;(function animate() {
//     requestAnimationFrame(animate)
//     // 旋转
//     cube.rotation.x += 0.01
//     cube.rotation.y += 0.01
//     renderer.render(scene, camera)
//   })()
onMounted(() => {
  //    containerRef.value.appendChild(renderer.domElement)
  // 场景 scene
  const scene = new THREE.Scene();

  // object
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 'blue' });
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  const sizes = {
    width: 800,
    height: 600,
  };

  // Camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.z = 5;
  scene.add(camera);

  const canvas = document.querySelector("canvas.webgl");

  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(sizes.width, sizes.height);

  renderer.render(scene, camera);

  function animate () {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();

})
</script>
<style scope>
.container {
  width: 400px;
  height: 400px;
}
</style>