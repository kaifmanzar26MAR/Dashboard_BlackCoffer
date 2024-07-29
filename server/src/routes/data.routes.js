import { Router } from "express";
import {
  addData,
  getAllData,
  getCountryCount,
  getRegionCount,
  getSectorCount,
  getTopicCount,
} from "../controllers/data.controller.js";

const router = Router();

router.get("/getData", getAllData);
router.get("/addData", addData);
router.get("/getSectorCount", getSectorCount);
router.get("/getTopicCount", getTopicCount);
router.get("/getRegionCount", getRegionCount);
router.get("/getCountryCount", getCountryCount);

export default router;
