import { Pie } from '@ant-design/charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TopicPieChart = () => {
    
    const [data, setData] = useState([]);
   
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dashboard-blackcoffer.onrender.com/api/data/getTopicCount");
        console.log(res?.data.data)
        if (!res) throw new Error("Data not found");
  
        setData(res?.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {
      fetchData();
      
    }, []);
    if(data.length===0) return <>Loading</>
    
    const config = {
        data,
        title:"Topic Visualization using Pie Chart",
        angleField: 'count',
        colorField: '_id',
        radius: 0.8,
        label: {
            type: 'outer',
            content: '{name} {percentage}',
        },
        interactions: [{ type: 'element-active' }],
    };
    
  return <Pie {...config}/>
}

export default TopicPieChart
