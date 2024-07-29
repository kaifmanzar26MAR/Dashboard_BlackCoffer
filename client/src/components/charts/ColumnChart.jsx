import React, { useEffect, useState } from 'react';
import { Column } from '@ant-design/charts';
import axios from 'axios';

const ColumnChart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dashboard-blackcoffer.onrender.com/api/data/getCountryCount");
      if (!res) throw new Error("Data not found");

      setData(res?.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    
  }, []);
  if(data.length===0) return <>Loading...</>

  const config = {
    data,
    title:"Country Frequency visualization using ColumnChart",
    xField: '_id',
    yField: 'count',
    seriesField: 'count',
    legend: { position: 'top-left' },
  };

  return <Column {...config} />;
};

export default ColumnChart;
