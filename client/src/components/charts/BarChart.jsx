// import React from 'react';
// import { Bar } from '@ant-design/charts';
// import jsonData from './jsondata';

// const BarChart = () => {
//   const data = jsonData;

//   const config = {
//     data,
//     title:"Barchart",
//     xField: 'sector',
//     yField: 'likelihood',
//     seriesField: 'likelihood',
//   };

//   return <Bar {...config} />;
// };

// export default BarChart;



import React, { useEffect, useState } from 'react';
import { Bar } from '@ant-design/charts';
import axios from 'axios';




const BarChart = ({data}) => {
  
  const config = {
    data,
    title:"Year and Intensity Bar Chart",
    xField: 'start_year',
    yField: 'intensity',
    seriesField: 'start_year',
    innerHeight:"50vh",
    color: ['#1ca9e6', '#f88c24', '#fad337'],
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}`,
      },
    },
    legend: {
      position: 'top-left',
    },
  };

  return <Bar {...config} />;
};

export default BarChart;
