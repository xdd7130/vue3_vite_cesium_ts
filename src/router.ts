import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";


const routes = [
  { path: "/", component: HelloWorld },
  { path: "/cesium", component: () => import("./components/Cesium.vue") }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;