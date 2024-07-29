import React, { useEffect, useState } from "react";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import ColumnChart from "../components/charts/ColumnChart";
import ScatterPlot from "../components/charts/ScatterPlot";
import HeatmapChart from "../components/charts/HeatmapChart";
import DonutChart from "../components/charts/DonutChart";
import BubbleChart from "../components/charts/BubbleChart";
import axios from "axios";
import TopicPieChart from "../components/charts/TopicPieChart";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/data/getData");
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

  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="w-1/3 h-[450px] p-2">
        <TopicPieChart />
      </div>
      <div className="w-1/3 h-[450px] p-2">
        <DonutChart />
      </div>
      <div className="w-1/3 h-[450px] p-2">
        <PieChart />
      </div>
      <div className="w-full md:w-1/2 h-fit p-2">
        <HeatmapChart data={data} />
      </div>
      <div className="w-full md:w-1/2 h-fit p-2">
        <ScatterPlot data={data} />
      </div>
      <div className="w-full md:w-1/2 h-fit p-2">
        <BarChart data={data} />
      </div>
      <div className="w-full md:w-1/2 h-fit p-2">
        <LineChart data={data} />
      </div>
      <div className="w-full md:w-1/2 h-fit p-2">
        <BubbleChart data={data} />
      </div>
      <div className="w-full md:w-1/2 h-fit p-2">
        <ColumnChart />
      </div>
    </div>
  );
}

export default Home;
