<template>
  <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
<h4>和 vue2 相比的话，基本上就是将 Vue2 中的beforeDestroy名称变更成beforeUnmount; destroyed 表更为 unmounted；然后用setup代替了两个钩子函数 beforeCreate 和 created；新增了两个开发环境用于调试的钩子
</h4>

<el-button @click="changNum">更新数据</el-button>

<div>数据： {{num}}</div>
</template>

<script setup lang="ts">
import { 
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted,
  onActivated, 
  onDeactivated, 
  onErrorCaptured, 
  onRenderTracked, 
  onRenderTriggered, ref } from 'vue';

  const funList = ref(['onBeforeMount', 
                        'onMounted', 
                        'onBeforeUpdate', 
                        'onUpdated', 
                        'onBeforeUnmount', 
                        'onUnmounted',
                        'onActivated', 
                        'onDeactivated', 
                        'onErrorCaptured', 
                        'onRenderTracked', 
                        'onRenderTriggered'])
  
  const num = ref(1)
  const changNum = () => {
    num.value += 1
  }
  onBeforeMount(() => {
    console.log('生命周期：onBeforeMount实例挂载前')
  })
  onMounted(() => {
    console.log('生命周期：onMounted实例挂载完成')
  })
  onBeforeUpdate(() => {
    console.log('生命周期：onBeforeUpdate组件内数据发生变化前执行')
  })
  onUpdated(() => {
    console.log('生命周期：onUpdated数据发生变化后执行')
  })
  onBeforeUnmount(() => {
    console.log('生命周期：onBeforeUnmount组件销毁前')
  })
  onUnmounted(() => {
    console.log('生命周期：onUnmounted组件销毁后执行')
  })
  onActivated(() => {
    console.log('生命周期：onActivated keep-alive组件激活时执行')
  })
  onDeactivated(() => {
    console.log('生命周期：onDeactivated keep-alive 组件销毁时执行')
  })
  onErrorCaptured(() => {
    console.log('生命周期：onErrorCaptured 捕获错误调用')
  })
  onRenderTracked(() => {
    console.log('生命周期：onRenderTracked （dev）组件跟踪所有变量和方法')
  })
  onRenderTriggered(() => {
    console.log('生命周期：onRenderTriggered（dev）触发渲染时调用，返回变化新旧值')
  })
</script>