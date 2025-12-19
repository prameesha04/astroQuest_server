import express from "express";
import {
  createMission,
  getMissions,
  updateMission,
  deleteMission,
} from "../Controller/adminMissionController.js";
import { adminProtect } from "../Middleware/adminAuth.js";

const router = express.Router();

router.post("/create", adminProtect, createMission);
router.get("/", adminProtect, getMissions);
router.put("/:id", adminProtect, updateMission);
router.delete("/:id", adminProtect, deleteMission);

export default router;
