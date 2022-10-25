import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";


const routes = [
  { path: "/", component: HelloWorld },
  { path: "/CesiumOverview", component: () => import("./components/cesium/CesiumOverview.vue") }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;