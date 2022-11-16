<template>
  <h5 style="color:red">注意：defineProps 、defineEmits 、 defineExpose 和 withDefaults 这四个宏函数只能在 script setup 中使用。他们不需要导入，会随着script setup的处理过程中一起被编译。</h5>
  <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
  <Vue3PassValueChild 
    ref='childRef'
    :msgDefinePropRef="msgDefinePropRef"
    :msgDefinePropReactive="msgDefinePropReactive"
    @changeMsg="changeMsg"
     />
  <div>{{msg}}</div>
  <el-divider />
  <el-button @click="getName">defineExpose获取子组件中的数据</el-button>
</template>

<script setup lang="ts">
import { reactive, computed, ref, onBeforeUnmount, onMounted,watch, onUpdated, onActivated, onDeactivated, watchEffect, defineProps } from 'vue'
import Vue3PassValueChild from './Vue3PassValueChild.vue'
const funList = ref(['defineProps','defineEmits', 'defineExpose','withDefaults'])

const msgDefinePropRef = ref('definePropRef')
const msgDefinePropReactive = reactive(['definePropReactive'])


// defineEmits
const msg = ref('这是父组件描述defineEmits')
const changeMsg = (data: string) => {
  msg.value = data
}


// defineExpose
const childRef = ref<InstanceType<typeof Vue3PassValueChild>>()
const getName = () => {
  // 获取子组件name
  debugger
  console.log(childRef.value!.name)
  // 执行子组件方法
  childRef.value?.changeName()
  // 获取修改后的name
  console.log(childRef.value!.name)
}

</script>
