

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="250px" class="aside">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="1"
            text-color="#fff"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Position /></el-icon>
                <span>VU3基础</span>
              </template>
              <router-link to="/">
                <el-menu-item index="1-1">item one</el-menu-item>
              </router-link>
            </el-sub-menu>
            <router-link to="/cesium">
              <el-menu-item  index="2"> 
                  <el-icon><MapLocation /></el-icon>
                  <span>Cesium</span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
  import RandExp from "randexp";
  const randexp = new RandExp(/.+/);
   console.log(randexp.gen());
  import { Position, MapLocation } from '@element-plus/icons-vue'
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
    background: #545c64;
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
