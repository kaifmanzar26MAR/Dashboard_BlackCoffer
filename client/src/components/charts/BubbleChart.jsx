// import React from 'react';
// import { Bubble } from '@ant-design/charts';

// const BubbleChart = () => {
//   const data = [
//     { height: 161, weight: 51, size: 1 },
//     { height: 167, weight: 59, size: 2 },
//     { height: 159, weight: 49, size: 1.5 },
//     { height: 157, weight: 50, size: 1 },
//     { height: 155, weight: 48, size: 1.2 },
//   ];

//   const config = {
//     data,
//     xField: 'height',
//     yField: 'weight',
//     sizeField: 'size',
//     colorField: 'weight',
//     pointSize: [4, 30],
//     pointStyle: { fillOpacity: 0.5 },
//   };

//   return <Bubble {...config} />;
// };

// export default BubbleChart;


import React from 'react';
import { Scatter } from '@ant-design/charts';
import jsonData from './jsondata';


const BubbleChart = ({data}) => {
  const config = {
    data,
    title:"Visualization of Topic in Relevance and Likelihood in Bubble Chart",
    xField: 'relevance',
    yField: 'likelihood',
    sizeField: 'intensity',
    colorField: 'topic',
    shape: 'circle',
    pointSize: [5, 30],
    pointStyle: {
      fillOpacity: 0.8,
    },
  };

  return <Scatter {...config} />;
};

export default BubbleChart;
