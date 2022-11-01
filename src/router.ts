import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";


const routes = [
  { path: "/", component: HelloWorld },
  { path: "/CesiumOverview", component: () => import("./components/cesium/CesiumOverview.vue") },
  { path: "/CesiumEntity", component: () => import("./components/cesium/CesiumEntity.vue") },
  { path: "/Cesium3DTiles", component: () => import("./components/cesium/Cesium3DTiles.vue") },
  { path: "/CesiumRotate", component: () => import("./components/cesium/CesiumRotate.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;