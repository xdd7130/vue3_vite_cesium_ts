<template>
    <svg width="1600" height="800" id="mainsvg" class="svgs"></svg>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import * as d3 from 'd3'
onMounted(()=>{
    const svg = d3.select('#mainsvg');
    const width = svg.attr('width');
    const height = svg.attr('height');
    const margin = {top: 60, right: 30, bottom: 60, left: 150};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const mainGroup = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    const xValue = d => d.globalsale;
    const yValue = d => d.platform;
    const xScale = d3.scaleLinear();
    const yScale = d3.scaleBand();
    debugger
    /* 
    Loading data and preprocessing data. 
    Note that you can also preprocessing data in your own way using your prefered language, e.g., Python. 
    */
    d3.csv('../../../src/assets/data/platform_globalsale.csv').then(data => {
        // calculationg scales: 
        yScale.domain(data.map(yValue)).range([0, innerHeight]).padding(0.1);
        xScale.domain([0, d3.max(data, xValue)]).range([0, innerWidth]);   
        // data-join for rectangles: 
        mainGroup.selectAll('rect').data(data).join('rect')
        .attr('height', yScale.bandwidth()).attr('width', d => xScale(xValue(d)))
        .attr('x', 0).attr('y', d => yScale(yValue(d)));
        // adding axes: 
        const xAxisMethod = d3.axisBottom(xScale);
        const yAxisMethod = d3.axisLeft(yScale);
        const xAxisGroup = mainGroup.append('g').call(xAxisMethod);
        const yAxisGroup = mainGroup.append('g').call(yAxisMethod);
        xAxisGroup.attr('transform', `translate(${0}, ${innerHeight})`);
      })
})

</script>
<style scope>

</style>