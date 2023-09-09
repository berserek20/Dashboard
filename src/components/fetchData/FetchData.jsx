import React, { useState } from 'react'
import axios from 'axios'
import Chart from '../charts/Chart';

function FetchData() {
    const [data, setData] = useState([]);
    const [intensity,setIntensity]=useState([]);
    const [attributes,setAttributes]=useState([]);

      const InsertData=async ()=>{
        console.log("hello");
        const response = await axios.get('http://localhost:3047/user/insert');
        console.log("response",response)
    }
    const GetData=async ()=>{
        console.log("GetDAta");
        const item = await axios.get('http://localhost:3047/user/read');
        const arr =item.data;
        // setData((current)=>[...current,arr]);
        setData(arr);
        const intense = arr.map((e)=>{
            return e.intensity;
        })

        setIntensity(intense);
        const chart = arr.map((e)=>{
          return {intensity:e.intensity,country:e.country,likelihood:e.likelihood,relevance:e.relevance,end_year:e.end_year,start_year:e.start_year,topic:e.topic,region:e.region,city:e.city};
      })
        setAttributes(chart);
        console.log("item",arr,"intensity",intensity);

    }
  return (
    <div>FetchData
          <button onClick={InsertData}>Insert Data in DB</button>
            <button onClick={GetData}>Display Chart</button>
    </div>
  )
}

export default FetchData