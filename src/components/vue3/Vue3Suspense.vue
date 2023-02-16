

<template>
  <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
  <div>Suspense 允许应用程序在等待异步组件时渲染一些其它内容,在 Vue2 中，必须使用条件判断(例如 v-if、 v-else等)来检查数据是否已加载并显示一些其它内容；但是，在 Vue3 新增了 Suspense 了，就不必跟踪何时加载数据并呈现相应的内容。
他是一个带插槽的组件，只是它的插槽指定了default 和 fallback 两种状态。
Suspense 使用：</div>
  <ul>
    <li> Suspense包裹所有异步组件相关代码</li>
    <li> v-slot:default 插槽包裹异步组件</li>
    <li> v-slot:fallback 插槽包裹渲染异步组件渲染之前的内容</li>
  </ul>
  <Suspense>
    <template #default>
      <!-- 异步组件-默认渲染的页面 -->
      <Vue3SuspenseChild></Vue3SuspenseChild>
    </template>
    <template #fallback>
      <!-- 页面还没加载出来展示的页面 -->
      <div>loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { ref, defineAsyncComponent} from 'vue'
enum Color {
  RED = "红色",
  PINK = "粉色",
  BLUE = "蓝色",
}
const red: Color = Color.RED;
console.log(red); // 0
const Vue3SuspenseChild = defineAsyncComponent(() => import('./Vue3SuspenseChild.vue'))

const funList = ref(['Suspense',' defineAsyncComponent', 'slot:default', 'v-slot:fallback'])

</script>

