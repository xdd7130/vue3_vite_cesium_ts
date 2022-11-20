<template>
    <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
  <h4>transition：动画支持链式调用</h4>
  <h4>ease：动画过渡</h4>
  <h4>inhert继承</h4>
  <svg width="960" height="200" id="mainsvg" 
    class="svgs" style='display: block; margin: 0 auto;'>
    <rect id="my_rect" 
    x="10" y="0" width="200" height="30" 
    stroke="black" fill="#69b3a2" stroke-width="1"
    ></rect>
  </svg>
  <svg width="900" height="500" id="mainsvg2" class="svgs" style='display: block; margin: 0 auto;'></svg>
  <svg width="1920" height="1080" id="mainsvg3" 
    class="svgs" style='display: block; margin: 0 auto;'>
      <rect id="my_rect3" 
      x="10" y="200" width="200" height="30" 
      stroke="black" fill="#69b3a2" stroke-width="1"
      />
  </svg>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const funList = ref(['transition', 'duration'])

onMounted(()=>{
  // 1
  d3.select("#my_rect")
      .transition().duration(2000)
      .attr("width", "400"); 

  // 2
  const data = [{name: 'Shao-Kui', value:6},
        {name:'Wen-Yang', value:6}, {name:'Yi Ke', value:16}, {name:'Liang Yuan', value: 10}, 
        {name:'Tam Hou', value:6}, {name:'Rui-Long', value:10}, {name:'Dong Xin', value:12}, 
        {name:'He Yu', value:20}, {name:'Xiang-Li', value:12}, {name:'Wei-Yu', value:15}, {name:'Chen Zheng', value:14}, 
        {name:'Tian-Xing', value:15}, {name:'Yang-Fu', value:15}, {name:'Qing-Wen', value:18}, {name:'Yi-Xiao', value:18}]; 

        const svg = d3.select('#mainsvg2');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const margin = {top: 0, right: 30, bottom: 60, left: 150};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, innerWidth]);

        const yScale = d3.scaleBand()
        .domain( data.map(d => d.name) )
        .range([0, innerHeight])
        .padding(0.1);

        const g = svg.append('g').attr('id', 'maingroup')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const xAxis = d3.axisBottom(xScale);
        g.append('g').call(xAxis).attr('transform', `translate(${0}, ${innerHeight})`);

        const yAxis = d3.axisLeft(yScale);
        g.append('g').call(yAxis);

        d3.selectAll('.tick text').attr('font-size', '2em');
        g.append('text').text('Members of CSCG').attr('font-size', '3em')
        .attr('transform', `translate(${innerWidth/2}, ${0})`)
        .attr('text-anchor', 'middle');

        const rects = g.selectAll('rect').data(data).join('rect')
        .attr('fill', 'green').attr('opacity', 0.8)
        .attr('y', d => yScale(d.name)).attr('height', yScale.bandwidth());

        const texts = g.selectAll('.datatext').data(data).join('text')
        .attr('class', 'datatext').text(d => d.value)
        .attr('y', d => yScale(d.name) + 5 + yScale.bandwidth() / 2)

        var formatPercent = d3.format(".2f");

        (async () => {
          while(true){
            data.forEach(d => {
                d.value = Math.random() * 20;
            });
            let transition = d3.transition().ease(d3.easeCubic)//.ease(d3.easeLinear) // we can optionally alter 'ease'; 
            .duration(1000);
            rects.transition(transition) 
            .attr('width', d => xScale(d.value))
            .attr('fill', () => d3.interpolateRainbow(Math.random()));
            texts.transition(transition)
            .attr('x', d => xScale(d.value))
            .tween("text", function(d) {
                var i = d3.interpolate(this.textContent, d.value);
                return function(t) {
                    this.textContent = formatPercent(i(t));
                };
            });
            await transition.end();
          }
        })()
  

  // 3
  d3.select("#my_rect3")
        .transition().duration(1000).ease(d3.easeQuad).attr("width", "400")
        .transition().attr("height", '100')
        .transition().attr("width", '100')
        .transition().attr("y", '500')
        .transition().attr("x", '310')
        .transition().attr("y", '200')
        .transition().attr("x", '10')
        .transition().attr("y", 540 + 200 * Math.sin(0)).attr("x", 960 + 200 * Math.cos(0))
        .transition().attrTween('x', function(d) {
            return function(t) {
                return 960 + 200 * Math.cos(t*Math.PI*2)
            };
        }).attrTween('y', function(d) {
            return function(t) {
                return 540 + 200 * Math.sin(t*Math.PI*2)
            };
        })
        .transition().on('start', function repeat(){
            d3.active(this).attr('fill', 'gray')
            .transition().attr('fill', '#69b3a2')
            .transition().attrTween('x', function(d) {
                return function(t) {
                    return 960 + 200 * Math.cos(t*Math.PI*2)
                };
            }).attrTween('y', function(d) {
                return function(t) {
                    return 540 + 200 * Math.sin(t*Math.PI*2)
                };
            })
            .transition().on('start', repeat)
        })
})

</script>
<style scope>

</style>