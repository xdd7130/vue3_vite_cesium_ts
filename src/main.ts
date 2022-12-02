import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'virtual:svg-icons-register';

import './style.css'
import App from './App.vue'
import Router from './router'
import SvgIcon from '@/components/SvgIcon.vue'


createApp(App)
.use(Router)
.use(ElementPlus)
.component('svg-icon', SvgIcon)
.mount('#app');
