import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { RawData } from "../models/rawData.models.js";

const getAllData = asyncHandler(async (req, res) => {
  const data = await RawData.find();

  return res.status(201).json(new ApiResponse(200, data, "got the data"));
});

const addData = asyncHandler(async (req, res) => {
  const newData = await RawData.create({
    end_year: "",
    intensity: 6,
    sector: "Enery",
    topic: "oi",
    insight: "N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report",
    url: "http:/www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm",
    region: "World",
    start_year: "",
    impact: "",
    added: "Jauary, 19 2017 00:55:52",
    published: "January, 18 2017 000000",
    country: "",
    relevance: "",
    pestle: "Econmic",
    source: "SWire",
    title:
      "Hih demand for n-Hexane in oil extraction owing to its effectiveness and high yield is expected to propel the global n-Hexane Market.",
    likelihood: 3,
  });

  if (!newData) {
    throw new ApiError(400, "something went wrong!!!");
  }

  return res.status(201).json(new ApiError(200, newData, "added Data"));
});

const getSectorCount = asyncHandler(async (req, res) => {
  
  const sectorCount = await RawData.aggregate([
    {
      '$group': {
        '_id': '$sector',
        'count': {
          '$sum': 1
        }
      }
    }
  ]);

  console.log(sectorCount);

  if(!sectorCount){
    throw new ApiError(400, "Unable  to get the sector count");

  }

  return res.status(201).json(new ApiResponse(200, sectorCount, "get the sector count!!"))
});



const getTopicCount = asyncHandler(async (req, res) => {
  
  const topicCount = await RawData.aggregate([
    {
      '$group': {
        '_id': '$topic',
        'count': {
          '$sum': 1
        }
      }
    }
  ]);

  console.log(topicCount);

  if(!topicCount){
    throw new ApiError(400, "Unable  to get the topic count");

  }

  return res.status(201).json(new ApiResponse(200, topicCount, "get the topic count!!"))
});



const getRegionCount = asyncHandler(async (req, res) => {
  
  const regionCount = await RawData.aggregate([
    {
      '$group': {
        '_id': '$region',
        'count': {
          '$sum': 1
        }
      }
    }
  ]);

  console.log(regionCount);

  if(!regionCount){
    throw new ApiError(400, "Unable  to get the region count");

  }

  return res.status(201).json(new ApiResponse(200, regionCount, "get the region count!!"))
});


const getCountryCount = asyncHandler(async (req, res) => {
  
  const countryCount = await RawData.aggregate([
    {
      '$group': {
        '_id': '$region',
        'count': {
          '$sum': 1
        }
      }
    }
  ]);

  console.log(countryCount);

  if(!countryCount){
    throw new ApiError(400, "Unable  to get the country count");

  }

  return res.status(201).json(new ApiResponse(200, countryCount, "get the country count!!"))
});
export { getAllData, addData , getSectorCount, getTopicCount, getRegionCount, getCountryCount};
