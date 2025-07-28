<!--
 * @Author: 解丹丹 xiedandan@hikvision.com.cn
 * @Date: 2025-07-18 14:29:58
 * @LastEditors: 解丹丹 xiedandan@hikvision.com.cn
 * @LastEditTime: 2025-07-28 19:55:11
 * @FilePath: \vue3_vite_cesium_ts\src\components\three\sceneCameraRender.vue
 * @Description: 
 * 
 * Copyright (c) 2025, All Rights Reserved. 
-->
<template>
  <el-button type="primary" id="addFOV" style="position: absolute;">视野角度 +5</el-button>
  <div class="container" id="container" ref="containerRef"></div>
</template>
<script  setup>
import { ref, onMounted, onUnmounted, onBeforeUnmount, onDeactivated  } from 'vue'

// 导入threejs
import * as THREE from 'three'
import * as dat from 'dat.gui';


const containerRef = ref(null)
const gui = ref(null);
onMounted(() => {
  const scene = new THREE.Scene();
    const canvasHeight = containerRef.value.offsetHeight;
    const canvasWidth = containerRef.value.offsetWidth;
    const camera = new THREE.PerspectiveCamera(60, canvasWidth / canvasHeight, 0.1, 100);
    camera.position.set(4, 1, 6);
    camera.lookAt(0, 1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById('container').appendChild(renderer.domElement);
    // 添加窗口大小变化的响应
    window.addEventListener('resize', () => {
        camera.aspect = containerRef.value.offsetWidth / containerRef.value.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.value.offsetWidth, containerRef.value.offsetHeight);
    });
    
    // 调整视野
    document.getElementById('addFOV').addEventListener('click', () => {
         camera.fov += 5;
        if (camera.fov > 120) {
            camera.fov = 45;
        }
        camera.updateProjectionMatrix();
    })

    // 设置背景色
    scene.background = new THREE.Color(0x000000); // 黑色背景

    // 添加雾效果
    // scene.fog = new THREE.Fog('red', 10, 100); // 颜色、近平面、远平面

    // // 设置场景环境
    // scene.environment = new THREE.CubeTextureLoader().load([
    //     'px.jpg', 'nx.jpg',
    //     'py.jpg', 'ny.jpg',
    //     'pz.jpg', 'nz.jpg'
    // ]);

    const sphereGeo = new THREE.BoxGeometry(2, 1, 1);
    const sphereMat = new THREE.MeshStandardMaterial({ color: 0x66ccff, metalness: 0.5, roughness: 0.4 });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.castShadow = true;
    sphere.position.y = 1;
    scene.add(sphere);

    const planeGeo = new THREE.PlaneGeometry(10, 10);
    const planeMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1)
    dirLight.position.set(-5, 5, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffaa00, 1, 15);
    pointLight.position.set(-3, 2, 2);
    pointLight.castShadow = true;
    scene.add(pointLight);

    // gui控制面板
    gui.value = new dat.GUI();

    const ambientFolder = gui.value.addFolder('Ambient Light');
    ambientFolder.add(ambientLight, 'visible').name('开启');
    ambientFolder.add(ambientLight, 'intensity', 0, 1, 0.01).name('强度');

    const dirFolder = gui.value.addFolder('Directional Light');
    dirFolder.add(dirLight, 'visible').name('开启');
    dirFolder.add(dirLight, 'intensity', 0, 2, 0.01).name('强度');
    dirFolder.add(dirLight.position, 'x', -10, 10).name('位置X');
    dirFolder.add(dirLight.position, 'y', -10, 10).name('位置Y');
    dirFolder.add(dirLight.position, 'z', -10, 10).name('位置Z');

    const pointFolder = gui.value.addFolder('Point Light');
    pointFolder.add(pointLight, 'visible').name('开启');
    pointFolder.add(pointLight, 'intensity', 0, 2, 0.01).name('强度');
    pointFolder.add(pointLight.position, 'x', -10, 10).name('位置X');
    pointFolder.add(pointLight.position, 'y', -10, 10).name('位置Y');
    pointFolder.add(pointLight.position, 'z', -10, 10).name('位置Z');

    ambientFolder.open();
    dirFolder.open();
    pointFolder.open();

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();


})
onDeactivated(() => {
})
onUnmounted(() => {
})
onBeforeUnmount(() => {
  if (gui.value) {
    gui.value.destroy();
    // 处理DOM残留
    const guiElements = document.querySelectorAll('.dg.ac');
    guiElements.forEach(el => el.remove());
    gui.value = null;
  }
});


</script>
<style scope>
.container {
  width: 100%;
  height: 100%;
}
</style>