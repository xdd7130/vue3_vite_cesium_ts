

<template>
  <el-row :gutter="8">
    <el-col :span="24">
      <el-alert 
        title="1. defineProps 来接收父组件传递的值， defineProps是无须引入的直接使用即可"
        description="withDefaults 定义默认值"
        type="success"
        show-icon
      />
      <p>msg：{{ msgDefinePropRef }}</p>
      <p>list：{{ msgDefinePropReactive[0] }}</p>
    </el-col>
  </el-row>
  <el-row :gutter="8">
    <el-col :span="24">
      <el-alert 
        title="2. defineEmits 子组件向父组件抛出事件,子组件派发事件"
        description="子组件绑定了一个click 事件 然后通过defineEmits 注册了一个自定义事件,点击按钮的时候，触发 emit 调用我们注册的事件，传递参数"
        type="warning"
        show-icon
      />
      <el-button @click="onChangeMsg" type="primary">触发子组件defineEmits改变msg</el-button>
    </el-col>
    <el-col :span="24">
    </el-col>
  </el-row>
  <el-row :gutter="8">
    <el-col :span="24">
      <el-alert 
        title="3. defineExpose 获取子组件的实例和内部属性"
        description="在 script-setup 模式下，所有数据只是默认 return 给 template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。
如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由 defineExpose 来完成。"
        type="info"
        show-icon
      />

    </el-col>
    <el-col :span="24">
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      {{ name }}
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
// defineProps<{
//   msgDefinePropRef: string,
//   msgDefinePropReactive: string[]
// }>()
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

type Props = {
  msgDefinePropRef?: string,
  msgDefinePropReactive?: string[]
}
withDefaults(defineProps<Props>(), {
  msgDefinePropRef:'张麻子',
  msgDefinePropReactive: () => ['default']
})

const emits = defineEmits(['changeMsg'])
const onChangeMsg = () => {
  emits('changeMsg','这是子组件描述defineEmits')
}

// defineExpose
// 将方法、变量暴露给父组件使用，父组件才可通过 ref API拿到子组件暴露的数据
const name = ref('defineExpose子组件')
const changeName = () => {
  name.value = '暴露执行值'
  debugger
}
defineExpose({
  name,
  changeName
})


</script>

