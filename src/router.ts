import { createRouter, createWebHistory } from "vue-router";
import Vue3Base from "@/components/vue3/Vue3Base.vue";
import Vue3PassValue from '@/components/vue3/Vue3PassValue.vue'
import Vue3Slot from '@/components/vue3/Vue3Slot.vue'
import Vue3Suspense from '@/components/vue3/Vue3Suspense.vue'
import Vue3Hooks from '@/components/vue3/Vue3Hooks.vue'
import Vue3Directive from '@/components/vue3/Vue3Directive.vue'
import Vue3LifeCycle from '@/components/vue3/Vue3LifeCycle.vue'

import D3scaleAxes from '@/components/d3/D3scaleAxes.vue'
import D3transition from '@/components/d3/D3transition.vue'
import D3scatter from '@/components/d3/D3scatter.vue'

const routes = [
  { path: "/", 
    component: Vue3Base ,
    name: Vue3Base,
    meta: {
      deepth: 1,
      keepAlive: true, //需要被缓存
    }
  },
  { path: "/vue3-pass-value", 
    component: Vue3PassValue ,
    name: Vue3PassValue
  },
  { path: "/vue3-slot", 
    component: Vue3Slot ,
    name: Vue3Slot
  },
  { path: "/vue3-suspense", 
    component: Vue3Suspense ,
    name: Vue3Suspense
  },
  { path: "/vue3-hooks", 
    component: Vue3Hooks ,
    name: Vue3Hooks
  },
  { path: "/vue3-directive", 
    component: Vue3Directive ,
    name: Vue3Directive
  },
  { path: "/vue3-lifecycle", 
    component: Vue3LifeCycle ,
    name: Vue3LifeCycle
  },
  { path: "/d3-scaleAxes", 
    component: D3scaleAxes ,
    name: D3scaleAxes
  },
  { path: "/d3-transition", 
    component: D3transition ,
    name: D3transition
  },
  { path: "/d3-scatter", 
    component: D3scatter ,
    name: D3scatter
  },
  { path: "/CesiumOverview", component: () => import("./components/cesium/CesiumOverview.vue") },
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