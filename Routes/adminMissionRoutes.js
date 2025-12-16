import express from "express";
import {
  createMission,
  getAllMissions,
  updateMission,
  deleteMission,
} from "../Controller/adminMissionController.js";
import adminAuth from "../Middleware/adminAuth.js";

const router = express.Router();

router.post("/create", adminAuth, createMission);
router.get("/", adminAuth, getAllMissions);
router.put("/:id", adminAuth, updateMission);
router.delete("/:id", adminAuth, deleteMission);


export default router;
