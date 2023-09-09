import React, { useEffect, useRef, useState } from 'react'
import styles from './PieChart.module.css'
import { useMeasure } from "@uidotdev/usehooks";

import { arc,pie, scaleOrdinal, schemeSet2, select } from 'd3';
function PIeChart() {
  const [svgRef, { width, height }] = useMeasure();
  const data = [{property:'a',value:4},{property:'b',value:6},{property:'c',value:10},{property:'d',value:2}];
    
  useEffect(()=>{
        console.log("PieChart");
       
        const radius= width/2;
        console.log("radius",radius);
        const svg = select(svgRef.current);
        svg.attr("width",width).attr("height",height).attr("overflow","visible");
        const formatData=  pie().value(d => d.value)(data);
        const createArc = arc().innerRadius(0).outerRadius(radius);
        const colors = scaleOrdinal().range(schemeSet2);
        svg.selectAll().data(formatData).join('path').attr('d',createArc).attr('fill',(d)=>colors(d.value)).attr('opacity',0.7).style('transform',`translate(${radius}px,${radius}px )`).attr("id", "mypiechart");                        
        svg.select("#mypiechart").remove();
        
    },[width,height])
  return (
    <div    className={styles.PIeChart}> 
        <div className={styles.box}>
            <h2>Top Products</h2>        
            <svg className={styles.container} ref={svgRef} style={{height:"60%",width:"60%",border:"2px solid black"}}></svg>
            
        </div>
        <div className={styles.box}>

        </div>
    </div>
  )
}

export default PIeChart