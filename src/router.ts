import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";


const routes = [
  { path: "/", 
    component: HelloWorld ,
    name:HelloWorld,
    meta: {
      deepth: 1,
      keepAlive: true, //需要被缓存
    }
  },
  { path: "/CesiumOverview", 
    meta: {
      deepth: 1,
      keepAlive: true, //需要被缓存
    },
    component: () => import("./components/cesium/CesiumOverview.vue") },
  { path: "/CesiumEntity", component: () => import("./components/cesium/CesiumEntity.vue") },
  { path: "/Cesium3DTiles", component: () => import("./components/cesium/Cesium3DTiles.vue") },
  { path: "/CesiumRotate", component: () => import("./components/cesium/CesiumRotate.vue") },
  { path: "/CesiumMeasure", component: () => import("./components/cesium/CesiumMeasure.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;