import React, { useEffect, useState } from 'react';
import { Pie } from "@ant-design/charts";
import axios from 'axios';

const PieChart = () => {
  const [data, setData] = useState([]);
   
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/data/getSectorCount");
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
    data:data,
    title:"Sector Visualization using Pie Chart",
    angleField: 'count',
    colorField: '_id',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}', // Display name and percentage
    },
    interactions: [{ type: 'element-active' }],
  };
  if(data?.length==0){
    return <>Loading...</>
  }

  return <Pie {...config} />;
};

export default PieChart;