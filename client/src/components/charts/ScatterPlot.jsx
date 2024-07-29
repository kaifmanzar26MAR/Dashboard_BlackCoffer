
import React from 'react';
import { Scatter } from '@ant-design/charts';
import jsonData from './jsondata';



const ScatterPlot = ({data}) => {
  const config = {
    data,
    title:"Visualization of Intensity and Relevance in ScatterPlot",
    xField: 'intensity',
    yField: 'relevance',
    colorField: 'relevance',
    shape: 'circle',
    pointSize: 5,
    pointStyle: {
      fillOpacity: 0.8,
    },
  };

  return <Scatter {...config} />;
};

export default ScatterPlot;
