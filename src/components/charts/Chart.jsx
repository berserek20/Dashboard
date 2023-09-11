import React, { useEffect, useRef, useState } from 'react'
import { axisBottom, axisLeft, axisRight, curveCardinal, line, scaleBand, scaleLinear, select, style } from 'd3';
import styles from './Chart.module.css'
import { useMeasure } from "@uidotdev/usehooks";

// import revenue from './TotalRevenue.svg'

const Chart =()=> {
    const [svgRef, { width, height }] = useMeasure();

    // const data2 =[, , 15, 75, 60];
    // const data =["60", "25", "50", "75", "30"];
    const data = [
        {category: 'A', value: 10},
        {category: 'B', value: 20},
        {category: 'C', value: 30},
        {category: 'D', value: 40}
      ];
    // const data2 =["60", "25", "5", "60", "30"];
    const w=Math.floor(width);
    const h=Math.floor(height);
    
   
   
    useEffect(() => {
       const xScale = scaleBand().domain(data.map((val)=>val.category)).range([0,w]).padding(0.9);
       const xAxis = axisBottom(xScale).ticks(data.length);
       const yScale = scaleLinear().domain([0,50]).range([h,0]);
       const yAxis = axisLeft(yScale).ticks(5);
        

        if(svgRef.current){
            
            const svg = select(svgRef.current);
            svg.selectAll('.bar').remove();
            svg.select('.x-axis').style('transform',`translateY(${h}px)`).call(xAxis);
            svg.select('.y-axis').call(yAxis);


            

            svg.append("g").selectAll('bar').data(data).join('rect').attr('class','bar').attr('x',(val)=>{console.log(xScale(val.category));return xScale(val.category)-15})
            .attr('y',(val)=>{return yScale(val.value)}).attr('height',(val)=>{console.log(h-yScale(val.value));return h-yScale(val.value)}).attr('width',xScale.bandwidth())
            .attr('fill','blue')

            svg.append("g").selectAll('bar').data(data).join('rect').attr('class','bar').attr('x',(val)=>{console.log(xScale(val.category));return xScale(val.category)+15})
            .attr('y',(val)=>{return yScale(val.value)}).attr('height',(val)=>{console.log(h-yScale(val.value));return h-yScale(val.value)}).attr('width',xScale.bandwidth())
            .attr('fill','red')

            
        }
      

    },[w, h, svgRef])
    return (
        <>
            <div className={styles.Chart}>


                {/* <div className={styles.container}> */}
                    
                       
                <div>Svg</div>
                <svg className={styles.container} ref={svgRef} style={{height:"70%",width:"80%",overflow:"visible"}}>
                    <g className='x-axis' />
                    <g className='y-axis' />

                </svg>
                {/* </div> */}
            </div>
          
            

        </>
    )
}

export default Chart