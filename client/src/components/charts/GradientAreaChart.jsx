import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import axios from 'axios';

const GradientAreaChart = ({data:jsonData}) => {
  const data=jsonData.sort((a, b) => a.intensity - b.intensity);

  const config = {
    data,
    xField: "intensity",
    yField: "likelihood",
    style: {
      fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
    },
    xAxis: {
      title: "Intensity",
      label: {
        formatter: '~s',
      },
    },
    yAxis: {
      title: 'Likelihood',
    },
    title: 'Intensity vs Likelihood',
    line: {
      style: {
        stroke: 'darkgreen',
        strokeWidth: 2,
      },
    },
  };
  
  return <Area {...config} />;
};

export default GradientAreaChart;
