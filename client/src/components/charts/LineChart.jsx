import React from 'react';
import { Line } from '@ant-design/charts';
import jsonData from './jsondata';

const LineChart = ({data}) => {

  const config = {
    data,
    title: 'Year and Likelihood line chart',
    xField: 'start_year',
    yField: 'likelihood',
    seriesField: 'likelihood',
    smooth: true,
  };

  return <Line {...config} />;
};

export default LineChart;
