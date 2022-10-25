
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
                <span>Vue3 基础</span>
              </template>
              <router-link to="/">
                <el-menu-item index="1-1">item one</el-menu-item>
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
              <router-link to="/">
                <el-menu-item index="2-2">item one</el-menu-item>
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
                <el-menu-item index="3-2">item one</el-menu-item>
              </router-link>
            </el-sub-menu>
            <!-- <router-link to="/CesiumOverview">
              <el-menu-item  index="2"> 
                  <el-icon><MapLocation /></el-icon>
                  <span>Cesium</span>
              </el-menu-item>
            </router-link> -->
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
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
    line-height: 60px;
    background: #272822;
    color: #fff;
    font-size: 20px;
  }
  .aside{
    height: calc(100vh - 60px);
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
