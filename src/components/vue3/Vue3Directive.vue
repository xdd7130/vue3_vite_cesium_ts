<template>
  自定义指令的生命周期
<ul>
  <li>created 元素初始化的时候</li>
  <li>beforeMount 指令绑定到元素后调用 只调用一次</li>
  <li>mounted 元素插入父级dom调用</li>
  <li>beforeUpdate 元素被更新之前调用</li>
  <li>update 这个周期方法被移除 改用updated</li>
  <li>beforeUnmount 在元素被移除前调用</li>
  <li>unmounted 指令被移除后调用 只调用一次</li>
</ul>
  <div v-move class="box">
    <div class="header-div"></div>
    <div>
      内容
    </div>
  </div>
</template>
 
<script setup lang='ts'>
import { Directive } from "vue";
const vMove: Directive = {
  mounted(el: HTMLElement) {
    let moveEl = el.firstElementChild as HTMLElement;
    const mouseDown = (e: MouseEvent) => {
      //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
      console.log(e.clientX, e.clientY, "起始位置", el.offsetLeft);
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + "px";
        el.style.top = e.clientY - Y + "px";
        console.log(e.clientX, e.clientY, "位置改变");
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    };
    moveEl.addEventListener("mousedown", mouseDown);
  },
};
</script>
 
<style scope>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}

.header-div {
  height: 20px;
  background: black;
  cursor: move;
}
</style>