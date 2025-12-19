import express from "express";
import { getInnovations } from "../Controller/adminInnovationController.js";
import { adminProtect } from "../Middleware/adminAuth.js";

const router = express.Router();

router.get("/admin/innovations", adminProtect, getInnovations);

export default router;
