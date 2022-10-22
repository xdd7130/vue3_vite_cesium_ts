import { createApp } from 'vue'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css';
// import * as Icons from '@element-plus/icons-vue';

import './style.css'
import App from './App.vue'
import Router from './router'
createApp(App)
.use(Router)
.use(ElementPlus)
// .use(Icons)
.mount('#app');
