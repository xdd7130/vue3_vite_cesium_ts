
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="250px" class="aside">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#272822"
            class="el-menu-vertical-demo"
            default-active="1"
            text-color="#fff"
          >
            <el-sub-menu index="1">
              <template #title>
                
                <el-icon><Document /></el-icon>
                <span>Vue3相关</span>
              </template>
              <router-link to="/">
                <el-menu-item index="1-1">基础</el-menu-item>
              </router-link>
              <router-link to="/vue3-pass-value">
                <el-menu-item index="1-2">传值</el-menu-item>
              </router-link>
              <router-link to="/vue3-slot">
                <el-menu-item index="1-3">插值</el-menu-item>
              </router-link>
              <router-link to="/vue3-suspense">
                <el-menu-item index="1-4">异步组件</el-menu-item>
              </router-link>
              <router-link to="/vue3-hooks">
                <el-menu-item index="1-5">Hooks</el-menu-item>
              </router-link>
              <router-link to="/vue3-directive">
                <el-menu-item index="1-6">自定义指令</el-menu-item>
              </router-link>
              <router-link to="/vue3-lifecycle">
                <el-menu-item index="1-7">生命周期</el-menu-item>
              </router-link>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><MapLocation /></el-icon>
                <span>  Cesium</span>
              </template>
              <router-link to="/CesiumOverview">
                <el-menu-item index="2-1"> 鹰眼图</el-menu-item>
              </router-link>
              <router-link to="/CesiumEntity">
                <el-menu-item index="2-2">Entity添加形状</el-menu-item>
              </router-link>
              <router-link to="/Cesium3DTiles">
                <el-menu-item index="2-3">加载3DTiles</el-menu-item>
              </router-link>
              <router-link to="/CesiumRotate">
                <el-menu-item index="2-4">旋转</el-menu-item>
              </router-link>
              <router-link to="/CesiumMeasure">
                <el-menu-item index="2-5">测量</el-menu-item>
              </router-link>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <!-- <el-icon><MapLocation /></el-icon> -->
                <el-icon><Aim /></el-icon>
                <span>OpenLayers</span>
              </template>
              <router-link to="/CesiumOverview">
                <el-menu-item index="3-1"> 鹰眼图</el-menu-item>
              </router-link>
              <router-link to="/">
                <el-menu-item index="3-2">aaa</el-menu-item>
              </router-link>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><Aim /></el-icon>
                <span>D3</span>
              </template>
              <router-link to="/d3-scaleAxes">
                <el-menu-item index="4-1"> 坐标轴</el-menu-item>
              </router-link>
              <router-link to="/d3-transition">
                <el-menu-item index="4-2"> 动画</el-menu-item>
              </router-link>
              <router-link to="/d3-scatter">
                <el-menu-item index="4-3"> 点图</el-menu-item>
              </router-link>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main class="main"  style="padding:10px;">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" :key="$route.fullPath"/>
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
  import RandExp from "randexp";
  import { Position, MapLocation, Aim, Document } from '@element-plus/icons-vue'
  
  const randexp = new RandExp(/.+/);
   console.log(randexp.gen());
  
</script>
<style scoped lang="less">
.common-layout{
  .header{
    line-height: 45px;
    background: #272822;
    color: #fff;
    font-size: 20px;
  }
  .aside{
    height: calc(100vh - 45px);
    background: #272822;
    .el-menu-vertical-demo{
      border-right: none;
    }
  }
  .main{
    padding:0;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
