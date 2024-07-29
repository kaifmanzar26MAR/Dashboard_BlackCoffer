import React, { useEffect, useState } from 'react'
import GradientAreaChart from '../components/charts/GradientAreaChart'
import GradientAreaChartYear_Intensity from '../components/charts/GradientAreaChartYear_Intensity'
import axios from 'axios';
import Loader from '../partials/Loader';

const Logistics = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dashboard-blackcoffer.onrender.com/api/data/getData");
      console.log(res?.data.data);
      if (!res) throw new Error("Data not found");

      setData(res?.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (data.length === 0) return <Loader/>;

  return (
    <div>
      <GradientAreaChart data={data}/>
      <GradientAreaChartYear_Intensity data={data}/>
    </div>
  )
}

export default Logistics
