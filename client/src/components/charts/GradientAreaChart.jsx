// import React from 'react';
// import { Area } from '@ant-design/charts';
// import jsonData from './jsondata';

// const GradientAreaChart = () => {
//   const data = jsonData;

//   const config = {
//     data,
//     xField: 'added',
//     yField: 'country',
//     areaStyle: {
//       fill: 'l(270) 0:#ffffff 1:#5B8FF9', // Gradient from white to blue
//     },
//     point: {
//       size: 5,
//       shape: 'circle',
//     },
//     line: {
//       style: {
//         stroke: '#5B8FF9',
//         lineWidth: 2,
//       },
//     },
//     tooltip: {
//       showMarkers: true,
//     },
//     smooth: true,
//   };

//   return <Area {...config} />;
// };

// export default GradientAreaChart;




import React from 'react';
import { Area } from '@ant-design/charts';
import jsonData from './jsondata';

// const data = [
//   { published: '2017-01-09', intensity: 6, topic: 'gas' },
//   { published: '2017-01-09', intensity: 6, topic: 'oil' },
//   { published: '2017-01-09', intensity: 6, topic: 'consumption' },
//   // Add more data points here
// ];

const data=jsonData;

const GradientAreaChart = () => {
  const config = {
    data,
    xField: 'published',
    yField: 'intensity',
    seriesField: 'topic',
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#87e8de 1:#36cfc9', // Linear gradient from white to teal
      };
    },
    smooth: true,
    xAxis: {
      type: 'time',
      tickCount: 5,
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}`,
      },
    },
    legend: {
      position: 'top-left',
    },
    tooltip: {
      shared: true,
      showCrosshairs: true,
    },
  };

  return <Area {...config} />;
};

export default GradientAreaChart;
