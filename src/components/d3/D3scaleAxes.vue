<template>
    <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
  <h4>比例尺、坐标轴</h4>
    <!-- <svg width="1600" height="800" id="mainsvg" class="svgs"></svg> -->
    <svg width="500" height="400" id="mainsvg" class="svgs" style="display: block; margin: 0 auto;"></svg>

</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const funList = ref(['scale'])

onMounted(()=>{
    // const svg = d3.select('#mainsvg');
    // const width = svg.attr('width');
    // const height = svg.attr('height');
    // const margin = {top: 60, right: 30, bottom: 60, left: 150};
    // const innerWidth = width - margin.left - margin.right;
    // const innerHeight = height - margin.top - margin.bottom;
    // const mainGroup = svg.append('g')
    // .attr('transform', `translate(${margin.left}, ${margin.top})`)
    // const xValue = d => d.globalsale;
    // const yValue = d => d.platform;
    // const xScale = d3.scaleLinear();
    // const yScale = d3.scaleBand();
    // debugger
    // /* 
    // Loading data and preprocessing data. 
    // Note that you can also preprocessing data in your own way using your prefered language, e.g., Python. 
    // */
    // d3.csv('../../../src/assets/data/platform_globalsale.csv').then(data => {
    //     // calculationg scales: 
    //     yScale.domain(data.map(yValue)).range([0, innerHeight]).padding(0.1);
    //     xScale.domain([0, d3.max(data, xValue)]).range([0, innerWidth]);   
    //     // data-join for rectangles: 
    //     mainGroup.selectAll('rect').data(data).join('rect')
    //     .attr('height', yScale.bandwidth()).attr('width', d => xScale(xValue(d)))
    //     .attr('x', 0).attr('y', d => yScale(yValue(d)));
    //     // adding axes: 
    //     const xAxisMethod = d3.axisBottom(xScale);
    //     const yAxisMethod = d3.axisLeft(yScale);
    //     const xAxisGroup = mainGroup.append('g').call(xAxisMethod);
    //     const yAxisGroup = mainGroup.append('g').call(yAxisMethod);
    //     xAxisGroup.attr('transform', `translate(${0}, ${innerHeight})`);
    // })
    const data = [
        {name: 'Shao-Kui', value:6}, {name:'Wen-Yang', value:6}, {name:'Cai Yun', value:16},  
        {name:'Yuan-Chen', value:6}, {name:'Rui-Long', value:10}, {name:'Dong Xin', value:12}, 
        {name:'He Yu', value:20}, {name:'Xiang-Li', value:12}, {name:'Tian-Xing', value:20}, 
        {name:'Wei-Yu', value:15}, {name:'Chen Zheng', value:14}, {name:'Liang Yuan', value: 10},
        {name:'Yu Peng', value:15}, {name:'Li Jian', value:18}, {name:'Wang Chen', value:16}
      ]; 

        const svg = d3.select('#mainsvg');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        const margin = {top: 50, right: 50, bottom: 50, left: 50};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const g = svg.append('g').attr('id', 'maingroup')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, datum=>datum.value)])
        .range([0, innerWidth]); 

        const yScale = d3.scaleBand()
        .domain(data.map(datum => datum.name))
        .range([0, innerHeight])
        .padding(0.1);

        console.log(xScale(12));
        console.log(yScale('Wen-Yang'));

        // the following lines are improved version of the above four lines, 
        // which configurates more attributes and adds two axis labels; 
        const yAxis = d3.axisLeft(yScale)//.tickSize(-innerWidth);
        const xAxis = d3.axisBottom(xScale)//.tickSize(-innerHeight);

        const yAxisGroup = g.append('g').call(yAxis)
        .append('text') // ----------
        .text('Name')
        .attr('font-size', '1em')
        .attr('transform', 'rotate(-90)') // y-axis label needs an additional transform; 
        .attr('x', -innerHeight / 2)
        .attr('y', -120)
        .attr('text-anchor', 'middle')
        .attr('fill', 'black');
        const xAxisGroup = g.append('g').call(xAxis)
        .attr('transform', `translate(${0}, ${innerHeight})`)
        .append('text') // ----------
        .text('Value')
        .attr('font-size', '1em')
        .attr('x', innerWidth / 2)
        .attr('y', 50)
        .attr('text-anchor', 'middle')
        .attr('fill', 'black');

        d3.selectAll('.tick text').attr('font-size', '1em');

        g.append('text').text('Members of CSCG').attr('font-size', '1em')
        .attr('x', innerWidth / 2 - 200).attr('y', -10)
})

</script>
<style scope>

</style>