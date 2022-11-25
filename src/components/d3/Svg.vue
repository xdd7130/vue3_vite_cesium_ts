<template>
    <!-- <svg width="1600" height="800" id="mainsvg" class="svgs"></svg> -->
    <!-- <svg  width="100" height="100" fill="red">
        <circle cx="50" cy="50" r="50"/>
    </svg> -->

    <svg width="200"
        height="200"
        viewBox="0 0 100 100"
        style="border:1px solid red">

        <rect x="0" y="0" width="100%" height="100%"/>
        <circle cx="20" cy="20" r="10" fill="white"/>
    </svg>
    <svg width="200" height="200" viewBox="0 0 300 300">
        <g stroke="green" fill="white" stroke-width="5">    
            <path d="M 100 100 L 300 100 L 200 300 z"
                fill="orange" stroke="black" stroke-width="3" />
        </g>
    </svg>
    <svg width="200"
        height="200"
        viewBox="0 0 100 100"
        style="border:1px solid red">

        <rect x="0" y="0" width="100%" height="100%"/>
        <circle cx="20" cy="20" r="10" fill="white"/>
    </svg>
    <h4>transform</h4> 
    <h5>属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改 CSS 视觉格式化模型的坐标空间来实现的。</h5>
    <h4>path</h4> 
    <h5>属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改 CSS 视觉格式化模型的坐标空间来实现的。</h5>
    <ul>
        <li>M: 起始点坐标，moveto 的意思。每个路径都必须以 M 开始。M 传入 x 和 y 坐标，用逗号或者空格隔开。</li>
        <li>L: 轮廓坐标，lineto 的意思。L 是跟在 M 后面的。它也是可以传入一个或多个坐标。大写的 L 是一个绝对位置。</li>
        <li>l: 这是小写 L，和 L 的作用差不多，但 l 是一个相对位置。</li>
        <li>H: 和上一个点的Y坐标相等，是 horizontal lineto 的意思。它是一个绝对位置。</li>
        <li>h: 和 H 差不多，但 h 使用的是相对定位。</li>
        <li>V: 和上一个点的X坐标相等，是vertical lineto 的意思。它是一个绝对位置。</li>
        <li>v: 这是一个小写的 v ，和大写 V 的差不多，但小写 v 是一个相对定位。</li>
        <li>Z: 关闭当前路径，closepath 的意思。它会绘制一条直线回到当前子路径的起点。</li>
    </ul>

    <!-- <svg width="300" height="300" style="border: 1px solid red;">
        <path
            d="M 10 10 L 50 40 L 100 10"
            stroke="blue"
            fill="none"
        >
        </path>
    </svg>
    <svg width="300" height="300" style="border: 1px solid red;">
        <path
            d="M 10 10 L 50 40 L 100 10 Z"
            stroke="blue"
            fill="none"
        >
        </path>
    </svg>
    <svg width="300" height="300" style="border: 1px solid red;">
        <path
            d="M 10 10 H 100"
            stroke="blue"
            fill="none"
        >
        </path>
    </svg>
    <svg width="300" height="300" style="border: 1px solid red;">
        <path
            d="M 10 10 h 100"
            stroke="blue"
            fill="none"
        >
        </path>
    </svg>
    <svg width="300" height="300" style="border: 1px solid red;">
        <path
            d="M 10 10 v 100"
            stroke="blue"
            fill="none"
        >
        </path>
    </svg> -->

    <div>圆弧</div>
    <svg width="400" height="400" style="border: 1px solid red;">
        <!-- 红 -->
        <path
            d="M 125 75 A 100 50 0 0 0 225 125"
            stroke="red"
            fill="none"
        />

        <!-- 黄 -->
        <path
            d="M 125 75 A 100 50 0 0 1 225 125"
            stroke="yellow"
            fill="none"
        />

        <!-- 蓝 -->
        <path
            d="M 125 75 A 100 50 0 1 0 225 125"
            stroke="blue"
            fill="none"
        />

        <!-- 绿 -->
        <path
            d="M 125 75 A 100 50 0 1 1 225 125"
            stroke="green"
            fill="none"
        />
    </svg>
    <svg>
        <circle cx="100" cy="100" r="100"/>
    </svg>
    <svg >
        <rect x="0" y="0"  width="400" height="300"/>
    </svg>
    <svg >
        <!-- 不设置样式属性 style 是看不出效果的 -->
        <line x1="50" x2="50" y1="400" y2="0" style="stroke: #000000;"/>
    </svg>
    <svg width="300" height="300">
        <!-- 不设置样式属性style是看不出效果的 并且polyline默认为填充需要把fill属性设置为none -->
        <polyline points="0 0, 20 40, 70 80, 100 90, 200 30, 250 50" fill="none" style="stroke: #000000;" />
    </svg>
    <svg width="300" height="300">
        <!-- 不设置样式属性style是看不出效果的 并且polygon默认为填充需要把fill属性设置为none -->
        <polygon points="0 0, 20 40, 70 80, 100 90, 200 30, 250 50" fill="blue" style="stroke: #000000;" />
    </svg>
    <svg width="300" height="300"  style="border: 1px solid red;">
        <!-- 从起始点（50， 20）画一条到（250， 20）的直线 -->
        <path d="M50 20 L250 20" style="stroke: #000000;"/>
        <!-- 从起始点（50， 50）画一条到（250， 50）的直线 和 从起始点（50， 100）画一条到（250， 100）的直线 -->
        <!-- M命令为多个时，后面的M命令为先线段的起始点 -->
        <path d="M50 50 L250 50 M50 100 L250 100" style="stroke: #ff0000;"/>
        <!-- 从起始点（50， 150）画一条到（250， 150）的直线 -->
        <!-- M命令后面连续跟着多个坐标点，除了第一个坐标点，后面的全部默认为隐式的L命令 -->
        <path d="M50 150 250 150" style="stroke: #00ff00;"/>
        <!-- 从起始点（50， 200）画一条到（250， 200）又到（250，250）的折线 -->
        <!-- 多个L命令连续可以省略后面的L命令 -->
        <path d="M50 200 L250 200 250 250 " fill="none" style="stroke: #0000ff;"/>
    </svg>
    <svg width="300" height="300">
        <!-- 从起始点（50， 20）画一条X轴为250的水平直线 -->
        <path d="M50 20 H250" style="stroke: #000000;"/>
    </svg>
    <svg width="300" height="300">
        <path d="M50 20 H200 210" style="stroke: #000000;"/>
        <path d="M50 20 V200 100" style="stroke: #ff0000;"/>
    </svg>
  
    <svg width="300" height="300">
        <path d="M50 20 H200 V200 Z" fill="none" style="stroke: #000000;"/>
    </svg>
    <svg width="300px" height="300px">
        <path d="M50 100 Q 175 200 300 100" fill="none" style="stroke: #ff0000;"/>
    </svg>
    <svg width="600px" height="300px">
        <path d="M50 100 Q 175 200 300 100 T 600 100 " fill="none" style="stroke: #ff0000;"/>
    </svg>
    <svg width="300" height="300">
        <path d="M50 50 C 100 100, 200 100, 250 50" fill="none" style="stroke: #000000;"/>
        <path d="M50 200 C 100 250, 200 150, 250 200" fill="none" style="stroke: #ff0000;"/>
    </svg>
    <svg width="300px" height="300px">
        <path d="M10 100 C 40 10, 65 10, 95 100" fill="none" style="stroke: #ff0000;"/>
    </svg>
    <svg width="300px" height="300px">
        <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" fill="none" style="stroke: #ff0000;"/>
    </svg>
    <svg width="300px" height="300px">
        <path d="M10 100 50 100  A 30 50 0 0 1 150 100 L 200 100" fill="none" style="stroke: #ff0000"/>
        <!-- 旋转45度的弧（第三个参数） -->
        <path d="M10 200 50 200  A 30 50 45 0 1 150 200 L 200 200" fill="none" style="stroke: #ff0000"/>
        <!-- 1表示大角度弧（第四个参数） -->
        <path d="M10 300 50 300  A 30 50 -45 1 1 150 300 L 200 300" fill="none" style="stroke: #ff0000"/>
        <!-- 0逆时针（第五个参数） -->
        <path d="M10 400 50 400  A 30 50 0 1 0 150 400 L 200 400" fill="none" style="stroke: #ff0000"/>

    </svg>
    <svg width="400" height="400">
        <circle cx="80" cy="50" r="50" />
        <circle cx="200" cy="50" r="50" fill="#ff0000"/>
    </svg>
    <svg width="400" height="400">
        <circle cx="80" cy="50" r="50" />
        <circle cx="200" cy="50" r="50" fill="#ff0000"/>

        <circle cx="80" cy="130" r="50" fill="#00ff00"/>
        <circle cx="200" cy="130" r="50" fill="#00ff00" fill-opacity="0.5"/>
    </svg>
    <svg width="240px" height="240px" xmlnx="http://www.w3.org/2000/svg" >
        <defs>
            <g id="house" style="stroke:black">
                <rect x="0" y="41" width="60" height="60"/>
                <polyline points="0 41,30 0,60 41"/>
                <polyline points="30 101,30 71,44 71,44 101"/>
            </g>
            <rect id="rect01" x="0" y="0" width="10" height="10" />
        </defs>
        <use xlink:href="#house" x="0" y="0" style="fill:#ccffcc;" />
        <use xlink:href="#house" x="120" y="0" style="fill:#99f;" />
        <use xlink:href="#house" x="65" y="105" style="fill:#c00;" />
        <use xlink:href="#rect01" x="0" y="130" />
    </svg>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
onMounted(()=>{
//     const svg = d3.select('svg');
//     const width = svg.attr('width');
//     const height = svg.attr('height');
//     const margin = {top: 60, right: 30, bottom: 60, left: 150};
//     const innerWidth = width - margin.left - margin.right;
//     const innerHeight = height - margin.top - margin.bottom;
//     const mainGroup = svg.append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`)
//     const xValue = d => d.globalsale;
//       const yValue = d => d.platform;
//       const xScale = d3.scaleLinear();
//       const yScale = d3.scaleBand();
// debugger
//       /* 
//         Loading data and preprocessing data. 
//         Note that you can also preprocessing data in your own way using your prefered language, e.g., Python. 
//       */
//       d3.csv('../../../src/assets/data/platform_globalsale.csv').then(data => {
//           // calculationg scales: 
//           yScale.domain(data.map(yValue)).range([0, innerHeight]).padding(0.1);
//           xScale.domain([0, d3.max(data, xValue)]).range([0, innerWidth]);   
//           // data-join for rectangles: 
//           mainGroup.selectAll('rect').data(data).join('rect')
//           .attr('height', yScale.bandwidth()).attr('width', d => xScale(xValue(d)))
//           .attr('x', 0).attr('y', d => yScale(yValue(d)));
//           // adding axes: 
//           const xAxisMethod = d3.axisBottom(xScale);
//           const yAxisMethod = d3.axisLeft(yScale);
//           const xAxisGroup = mainGroup.append('g').call(xAxisMethod);
//           const yAxisGroup = mainGroup.append('g').call(yAxisMethod);
//           xAxisGroup.attr('transform', `translate(${0}, ${innerHeight})`);
//       })
})

</script>
<style scope>

</style>