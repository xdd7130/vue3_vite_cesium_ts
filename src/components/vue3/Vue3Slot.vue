

<template>
  <el-row :gutter="12">
    <el-alert 
      title="在 Vue2 的中一般中具名插槽和作用域插槽分别使用slot和slot-scope来实现,Vue2.6+,Vue3 中将slot和slot-scope进行了合并统一使用, v-slot"
      description="withDefaults 定义默认值"
      type="success"
      show-icon
    />
  </el-row>
  <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
  
  <Vue3SlotChild>
    <template  v-slot:content="{ msg }">
      <div>{{ msg }}</div>
    </template>
  </Vue3SlotChild>
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
import { ref } from 'vue'
import Vue3SlotChild from './Vue3SlotChild.vue'


const funList = ref(['slot',' v-slot', 'v-slot:slotName (#slotName)'])

</script>

