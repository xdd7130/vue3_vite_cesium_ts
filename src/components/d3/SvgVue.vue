<template>
    <!-- <svg-icon v-if="props.icon" :name="props.icon" size="100px"/> -->
    <el-row>
        <el-col :span="12">
            <el-steps :space="200" :active="step" size="small">
                <el-step title="选择服务" :icon="Edit" >
                    <template #icon>
                        <svg-icon v-if="props.icon" :name="props.icon" size="25px" :color="step >= 1 ? '#6893DF' :'#a8abb2'" />
                    </template>
                </el-step>
                <el-step title="调整布局" :icon="UploadFilled" >
                    <template #icon>
                        <svg-icon v-if="props.icon" :name="props.icon" size="25px" :color="step >= 2 ? '#6893DF' :'#a8abb2'" />
                    </template>
                </el-step>
                <el-step title="选择依赖" :icon="Picture" >
                    <template #icon>
                        <svg-icon v-if="props.icon" :name="props.icon" size="25px" :color="step >= 3 ? '#6893DF' :'#a8abb2'" />
                    </template>
                </el-step>
                <el-step title="调整参数" :icon="Picture" >
                    <template #icon>
                        <svg-icon v-if="props.icon" :name="props.icon" size="25px" :color="step >= 4 ? '#6893DF' :'#a8abb2'" />
                    </template>
                </el-step>
            </el-steps>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { Document, MapLocation, Aim, Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
const props = defineProps({
    icon: {
        type: String,
        default: 'step'
    },
    title: {
        type: String,
        default: 'step'
    }
})

const step = ref(1)

</script>
<style scope>

</style>