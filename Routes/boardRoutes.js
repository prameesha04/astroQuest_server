import express from "express";
import { saveBoardWinner } from "../Controller/boardController.js";

const router = express.Router();

router.post("/save-winner", saveBoardWinner);

export default router;
