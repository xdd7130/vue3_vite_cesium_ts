<template>
    <h4>svg 动画及其运用</h4>
    <h5>1、SMIL 驱动</h5>
    <h5>2、JavaScript 驱动</h5>
    <h5>3、CSS 驱动</h5>

    <el-card class="box-card">
        <template #header>
        <div class="card-header">
            <span>SMIL 驱动</span>
            <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
        </template>
        <el-tag>Tag 1</el-tag>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
    <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" viewBox="0 0 500 450">
        <defs>
            <radialGradient id="gradient" cx="35%" cy="30%">
                <stop stop-color="red" />
                <stop stop-color="#900" offset="100%" />
            </radialGradient>
            <radialGradient id="glow">
                <stop stop-color="white" stop-opacity=".8" offset="60%" />
                <stop stop-color="white" stop-opacity="0" offset="100%" />
            </radialGradient>
        </defs>

        <path d="m140,0 c-137.446907,-2.4711 -264.638405,212.481001 105.92601,435.341002c0.405975,-0.730988 1.968994,-0.730988 2.375,0c382.517975,-230.048996 234.665009,-451.640422 92.625977,-434.390902c-55.372986,6.724501 -81.503998,37.456499 -93.813995,63.888002c-12.30899,-26.431503 -38.440002,-57.163502 -93.812988,-63.888002c-4.438004,-0.539301 -8.866013,-0.870199 -13.300003,-0.949999l0,-0.000101z" id="path2361" fill="url(#gradient)"/>
        <circle r="10%" cx="25%" cy="25%" fill="url(#glow)" />

    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" viewBox="0 0 500 450" id="svg">
        <defs>
            <radialGradient id="gradient" cx="35%" cy="30%">
                <stop stop-color="red" />
                <stop stop-color="#900" offset="100%" />
            </radialGradient>
            <radialGradient id="glow">
                <stop stop-color="white" stop-opacity=".8" offset="60%" />
                <stop stop-color="white" stop-opacity="0" offset="100%" />
            </radialGradient>
        </defs>
        <g>
            <animateTransform attributeName="transform" id="i1" type="scale" from=".8" to="1" dur=".5s"  repeatCount="indefinite" begin="svg.mouseleave" end="svg.mouseenter"/>
            <path d="m140,0 c-137.446907,-2.4711 -264.638405,212.481001 105.92601,435.341002c0.405975,-0.730988 1.968994,-0.730988 2.375,0c382.517975,-230.048996 234.665009,-451.640422 92.625977,-434.390902c-55.372986,6.724501 -81.503998,37.456499 -93.813995,63.888002c-12.30899,-26.431503 -38.440002,-57.163502 -93.812988,-63.888002c-4.438004,-0.539301 -8.866013,-0.870199 -13.300003,-0.949999l0,-0.000101z" id="path2361" fill="url(#gradient)"/>
            <circle r="10%" cx="25%" cy="25%" fill="url(#glow)" />
        </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="20%" viewBox="0 0 500 450" id="svg">

        <set attributeName="class" to="pound" begin="svg.load" dur=".5s" repeatCount="indefinite" />

        <defs>
            <radialGradient id="gradient" cx="35%" cy="30%">
                <stop stop-color="red" />
                <stop stop-color="#900" offset="100%" />
            </radialGradient>
            <radialGradient id="glow">
                <stop stop-color="white" stop-opacity=".8" offset="60%" />
                <stop stop-color="white" stop-opacity="0" offset="100%" />
            </radialGradient>
        </defs>
        <g>
        <path d="m140,0 c-137.446907,-2.4711 -264.638405,212.481001 105.92601,435.341002c0.405975,-0.730988 1.968994,-0.730988 2.375,0c382.517975,-230.048996 234.665009,-451.640422 92.625977,-434.390902c-55.372986,6.724501 -81.503998,37.456499 -93.813995,63.888002c-12.30899,-26.431503 -38.440002,-57.163502 -93.812988,-63.888002c-4.438004,-0.539301 -8.866013,-0.870199 -13.300003,-0.949999l0,-0.000101z" id="path2361" fill="url(#gradient)"/>
        <circle r="10%" cx="25%" cy="25%" fill="url(#glow)" />
        </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg">
        <rect height="50" fill="red">
            <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite"/>
            <animate attributeName="width" from="0" to="200" dur="1s" repeatCount="indefinite"/>
        </rect>
    </svg>
    <button id="b1">点击开始动画</button>
<button id="b2">点击停止动画</button>
<h5><mark>鼠标悬停暂停</mark></h5>
<svg width="300" height="100" id="svg">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect x="0" y="0" width="20" height="20" fill="blue" stroke="black" stroke-width="1">
    <animateMotion id="ani"
       path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
       dur="3s" repeatCount="indefinite" rotate="auto" begin="indefinite" />
  </rect>
</svg>
<!-- <script> -->
  svg.onmouseout = e => svg.unpauseAnimations();
  svg.onmouseover = e => svg.pauseAnimations();
  b1.onclick = e => ani.beginElement();
  b2.onclick = e => ani.endElement();
<!-- </script> -->
<button id="b1">点击开始动画</button>
<button id="b2">点击停止动画</button>
<h5><mark>鼠标悬停暂停</mark></h5>
<svg width="300" height="100" id="svg">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect x="0" y="0" width="20" height="20" fill="blue" stroke="black" stroke-width="1">
    <animateMotion id="ani"
       path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
       dur="3s" repeatCount="indefinite" rotate="auto" begin="indefinite" />
  </rect>
</svg>
<!-- <script> -->
<!-- </script> -->
<button id="b1">点击开始动画</button>
<button id="b2">点击停止动画</button>
<h5><mark>鼠标悬停暂停</mark></h5>
<svg width="300" height="100" id="svg">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect x="0" y="0" width="20" height="20" fill="blue" stroke="black" stroke-width="1">
    <animateMotion id="ani"
       path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
       dur="3s" repeatCount="indefinite" rotate="auto" />
  </rect>
</svg>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
// const svg = document.getElementById('svg')
// svg.onmouseout = e => svg.unpauseAnimations();
// svg.onmouseover = e => svg.pauseAnimations();
// const ani =  document.getElementById('ani')
// b1.onclick = e => ani.beginElement();
// b2.onclick = e => ani.endElement();
onMounted(()=>{


})

</script>
<style scope>
  .pound {
    margin: 2em;
    animation: pound .5s infinite;
  }
  .pound:hover {
    animation-play-state: paused;
  }
  @keyframes pound {
    to {
      transform: scale(1.4);
    }
  }
</style>