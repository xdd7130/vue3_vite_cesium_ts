<script setup lang="ts">
import { reactive, computed, ref, onBeforeUnmount, onMounted, onUpdated, onActivated, onDeactivated } from 'vue'
const count = ref(0)
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
  debugger
})
onUpdated(() => {
  // 文本内容应该与当前的 `count.value` 一致
  console.log('1111111111111')
})
onBeforeUnmount(() =>{
  debugger
})
onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  debugger
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  debugger
})
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
  <h3>{{publishedBooksMessage}}</h3>
  <button @click="increment0">{{ count }}</button>

</template>
