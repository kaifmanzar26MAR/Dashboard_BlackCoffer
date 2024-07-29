import React, { useEffect, useState } from 'react';
import { Pie } from '@ant-design/charts';
import axios from 'axios';

// const data = [
//   { region: 'Northern America', value: 10 },
//   { region: 'Central America', value: 20 },
//   { region: 'World', value: 30 },
// ];

const DonutChart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/data/getRegionCount"
      );
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
  if (data.length === 0) return <>Loading</>;

  const config = {
    data,
    title:"Region visualization using Donut Chart",
    angleField: 'count',
    colorField: '_id',
    radius: 0.8,
    innerRadius: 0.5,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
      },
    },
  };

  return <Pie {...config} />;
};

export default DonutChart;
