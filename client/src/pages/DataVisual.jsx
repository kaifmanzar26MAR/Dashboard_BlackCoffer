import axios from "axios";
import React, { useEffect, useState } from "react";
import {Table} from "antd"
import Loader from "../partials/Loader";
const DataVisual = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "End Year",
      dataIndex: "end_year",
      key: "end_year",
    },
    {
      title: "Intensity",
      dataIndex: "intensity",
      key: "intensity",
    },
    {
      title: "Sector",
      dataIndex: "sector",
      key: "sector",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Insight",
      dataIndex: "insight",
      key: "insight",
    },
    {
      title: "Link",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "Start Year",
      dataIndex: "start_year",
      key: "start_year",
    },
    {
      title: "Impact",
      dataIndex: "impact",
      key: "impact",
    },
    {
      title: "Added",
      dataIndex: "added",
      key: "added",
    },
    {
      title: "Published",
      dataIndex: "published",
      key: "published",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Relevance",
      dataIndex: "relevance",
      key: "relevance",
    },
    {
      title: "Pestle",
      dataIndex: "pestle",
      key: "pestle",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Likelihood",
      dataIndex: "likelihood",
      key: "likelihood",
    },
  ];

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dashboard-blackcoffer.onrender.com/api/data/getData");
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

  if (data.length === 0) {
    return <Loader/>
  }

  return (
    <div className="w-full h-fit p-5">
      <Table dataSource={data} columns={columns} scroll={{ x: 240 }} />
    </div>
  );
};

export default DataVisual;
