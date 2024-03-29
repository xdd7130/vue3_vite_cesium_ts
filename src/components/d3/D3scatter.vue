<template>
    <el-row :gutter="12">
    <el-col :span="4" v-for="list in funList" :key="list">
      <el-card shadow="always"> {{list}} </el-card>
    </el-col>
  </el-row>
  <svg width="950" height="800" id="mainsvg" class="svgs" style="background-color: #ffffff;display: block; margin: 0 auto;"></svg>

</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

const funList = ref(['transition', 'duration'])

onMounted(()=>{
    // get main SVG and its attributes & setting hyper-parameters; 
    const svg = d3.select('#mainsvg');
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const margin = {top: 20, right: 120, bottom: 100, left: 120};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const xValue = d => Math.log(d['确诊人数'] + 1); 
    const yValue = d => Math.log(d['新增确诊'] + 1);
    const rValue = d => Math.sqrt(d['感染率'] * 600) * 0.8;
    const keyValue = d => d['地区'];
    let xScale, yScale;
    let maxX, maxY;
    let aduration = 1000;

    const xAxisLabel = '累计确诊人数（对数）';
    const yAxisLabel = '新增人数（对数）';

    const color = {
        "武汉":"#ff1c12",
        "黄石": "#de5991",
        "十堰": "#759AA0",
        "荆州": "#E69D87",
        "宜昌": "#be3259",
        "襄阳": "#EA7E53",
        "鄂州": "#EEDD78",
        "荆门": "#9359b1",
        "孝感": "#47c0d4",
        "黄冈": "#F49F42",
        "咸宁": "#AA312C",
        "恩施州": "#B35E45",
        "随州": "#4B8E6F",
        "仙桃": "#ff8603",
        "天门": "#ffde1d",
        "潜江": "#1e9d95",
        "神农架": "#7289AB"
    }

    const renderinit = function(data, seq){
        xScale = d3.scaleLinear()
        .domain(d3.extent(data, xValue)) // "extent" is equivalent to [d3.min(data, xValue), d3.max(data, xValue)]; 
        .range([0, innerWidth])
        .nice();

        yScale = d3.scaleLinear()
        .domain(d3.extent(data, yValue).reverse()) // remember to use reverse() to make y-axis start from the bottom; 
        .range([0, innerHeight])
        .nice();

        maxX = xScale(d3.max(data, xValue));
        maxY = yScale(d3.max(data, yValue));

        // The reason of using group is that nothing is rendered outside svg, so margin of svg is always blank while margin of group is rendered inside svg; 
        const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .attr('id', 'maingroup');

        // Adding axes; 
        const yAxis = d3.axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickPadding(10); // .tickPadding is used to prevend intersection of ticks; 
        const xAxis = d3.axisBottom(xScale)
        .tickSize(-innerHeight)
        .tickPadding(10);

        let yAxisGroup = g.append('g').call(yAxis)
        .attr('id', 'yaxis');
        yAxisGroup.append('text')
        .attr('font-size', '2em')
        .attr('transform', `rotate(-10)`)
        .attr('x', -innerHeight / 2)
        .attr('y', -10)
        .attr('fill', '#333333')
        .text(yAxisLabel)
        .attr('text-anchor', 'middle') // Make label at the middle of axis. 
    
        let xAxisGroup = g.append('g').call(xAxis)
        .attr('transform', `translate(${0}, ${innerHeight})`)
        .attr('id', 'xaxis');
        xAxisGroup.append('text')
        .attr('font-size', '2em')
        .attr('y', 60)
        .attr('x', innerWidth / 2)
        .attr('fill', '#333333')
        .text(xAxisLabel);
            
        let legend_color = Object.values(color);
        let legend_text = Object.keys(color);
        // draw legend
        var legend = d3.select('#maingroup').selectAll(".legend")
        .data(legend_text).join('g')
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(" + (innerWidth + 10) + "," + (i * 25 + 100) + ")"; });
        
        // draw legend colored rectangles
        legend.append("rect")
        .data(legend_color) 
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 30)
        .attr("height", 20)
        .style("fill", d => d);
        
        // draw legend text
        legend.append("text")
        .attr("x", 40)
        .attr("y", 9)
        .attr("dy", ".5em")
        .attr("text-anchor", "start")
        .text(d => d); 

        // date
        g.append("text")
        .attr('id', 'date_text')
        .attr("x", innerWidth / 4 + 30)
        .attr("y", innerHeight / 10 - 20)
        .attr("dy", ".5em")
        .style("text-anchor", "end")
        .attr("fill", "#504f4f")
        .attr('font-size', '2em')
        .attr('font-weight', 'bold')
        .text(' ');
    };
    
    const renderupdate = async function(seq){
        const g = d3.select('#maingroup');
        
        d3.select('#date_text').text(seq[0]['日期']);

        let transition = d3.transition().duration(aduration).ease(d3.easeLinear); 

        let circleupdates = g.selectAll('circle').data(seq).join('circle')
        .attr('fill', d => color[keyValue(d)] )
        .attr('opacity', .8)
        .transition(transition)
        .attr('cy', d => yScale(yValue(d)))
        .attr('cx', d => xScale(xValue(d))) 
        .attr('r', c => rValue(c));

        let textupdates = g.selectAll('.province_text').data(seq).join('text')
        .attr("class", "province_text")
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .attr("fill", "#333333")
        .text( d => keyValue(d))
        .transition(transition)
        .attr('x', d => xScale(xValue(d)))
        .attr('y', d => yScale(yValue(d)));

        await transition.end();
    };

    d3.csv('../../../src/assets/data/hubei_day14.csv').then(async function(data){
        data = data.filter(d => {return keyValue(d) !== '总计'});
        data.forEach(datum => {
            // pre-process the data; 
            datum['确诊人数'] = +(datum['确诊人数']);
            datum['治愈人数'] = +(datum['治愈人数']);
            datum['死亡人数'] = +(datum['死亡人数']);
            datum['新增确诊'] = +(datum['新增确诊']);
            if(datum['新增确诊'] < 0){
                datum['新增确诊'] = 0;
            }
            datum['感染率'] = datum['确诊人数'] / 1000;
        });

        // remove duplicated items; 
        let alldates = Array.from(new Set(data.map( datum => datum['日期'])));

        // make sure dates are listed according to real time order; 
        alldates = alldates.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });

        // re-arrange the data sequentially; 
        let sequential = []; 
        alldates.forEach(datum => {
            sequential.push([]);
        });
        data.forEach(datum => {
            sequential[alldates.indexOf(datum['日期'])].push(datum);
        });

        renderinit(data, sequential[0]);

        for(let i = 0; i < sequential.length; i++){
            await renderupdate(sequential[i]);
        }
    });
})

</script>
<style scope>

</style>