// import React from 'react';
// import { Heatmap } from '@ant-design/charts';

// const HeatmapChart = () => {
//   const data = [
//     { year: '2014', value: 3 },
//     { year: '2015', value: 4 },
//     { year: '2016', value: 3.5 },
//     { year: '2017', value: 5 },
//     { year: '2018', value: 4.9 },
//     { year: '2019', value: 6 },
//     { year: '2020', value: 7 },
//   ];

//   const config = {
//     data,
//     xField: 'year',
//     yField: 'value',
//     colorField: 'value',
//     color: ['#d3f261', '#fadb14', '#fadb14', '#faad14', '#ff7a45', '#f5222d'],
//   };

//   return <Heatmap {...config} />;
// };

// export default HeatmapChart;

import React from 'react';
import { Heatmap } from '@ant-design/charts';
import jsonData from './jsondata';


const HeatmapChart = ({data}) => {

  const config = {
    data,
    title:"Visualization of Region and Topic on Heatmap chart",
    xField: 'region',
    yField: 'topic',
    colorField: 'topic',
    shape: 'square',
    color: ['#ff6e6e', '#ffe6e6'],
  };

  return <Heatmap {...config} />;
};

export default HeatmapChart;
