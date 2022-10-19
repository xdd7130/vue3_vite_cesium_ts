<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
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
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
  <h3>{{publishedBooksMessage}}</h3>
  <button @click="increment0">{{ count }}</button>
</template>
