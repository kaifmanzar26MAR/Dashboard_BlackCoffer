import React from "react";
import { Area } from "@ant-design/charts";

const GradientAreaChartYear_Intensity = ({data:jsonData}) => {
  const data = jsonData.sort((a, b) => a.intensity - b.intensity);

  const config = {
    data,
    xField: "start_year",
    yField: "intensity",
    style: {
      fill: "linear-gradient(-90deg, white 0%, darkblue 100%)",
    },
    xAxis: {
      title: "Year",
      label: {
        formatter: "~s",
      },
    },
    yAxis: {
      title: "Intensity",
    },
    title: "Intensity vs Year",
    line: {
      style: {
        stroke: "darkblue",
        strokeWidth: 2,
      },
    },
  };

  return <Area {...config} />;
};

export default GradientAreaChartYear_Intensity;
