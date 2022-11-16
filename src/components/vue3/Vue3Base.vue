<script setup lang="ts">
import { ref, reactive, computed, onBeforeUnmount, onMounted, watch, watchEffect, onUpdated, onActivated, onDeactivated } from 'vue'
const count = ref(0)
const funList = ref(['ref', 'reactive', 'computed', 'onBeforeUnmount', 'onMounted', 'watch', 'watchEffect', 'onUpdated', 'onActivated', 'onDeactivated'])
interface Count{
  count: number
}
const state: Count = reactive({ count: 0 })
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
function increment0() {
  count.value++
}
// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
function increment() {
  state.count++
}
onMounted(() =>{
  console.log('onMounted')
})
onUpdated(() => {
  // 文本内容应该与当前的 `count.value` 一致
  console.log('onUpdated')
})
onBeforeUnmount(() =>{
  console.log('onBeforeUnmount')
})
onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log('onActivated')
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('onDeactivated')
})


let infoRef = ref({
  name: '树哥',
  age: 18
})

//3s后改变值
setInterval(() => {
  infoRef.value.age += 1
}, 3000)


watch(infoRef, (newV, oldV) => {
  console.log(newV, oldV) 
})
let infoReactive = reactive({
  name: '树哥',
  age: 18
})

//3s后改变值
setInterval(() => {
  infoReactive.age += 1
}, 3000)


watch(()=>infoReactive.age, (newV, oldV) => {
  console.log(newV, oldV) 
})

let infoObj = reactive({
  name: '张麻子',
  age: 18,
  obj: {
    str: '彼时彼刻，恰如此时此刻'
  }
})

//3s后改变s值
setTimeout(() => {
  infoObj.obj.str = 'to be or not to be'
}, 3000)

// 监听reactive定义的 引用数据 需要自己开启 deep:true深度监听,不然不发触发 watch 的回调函数
watch(() => infoObj.obj, (newV, oldV) => {
  console.log(newV, oldV)
}, {
  deep: true
})


let num = ref(0)

//3s后改变值
setTimeout(() => {
  num.value++
}, 3000)

watchEffect((onInvalidate) => {
  console.log('watchEffect', num.value)
  onInvalidate(() => {
    console.log('执行onInvalidate');
  });
}, {
  flush: "sync", //此时这个函数会在组件更新之后去执行
  onTrigger(e) { //作为一个调试工具，可在开发中方便调试
    console.log('触发', e);
  },
})


</script>

<template>
  <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
  <button @click="increment">
    {{ state.count }}
  </button>
  <h3>{{publishedBooksMessage}}</h3>
  <button @click="increment0">{{ count }}</button>
  {{infoRef.age}}
  {{infoReactive.age}}

</template>
