import express from "express";
import Winner from "../Model/winner.js";

const router = express.Router();

router.post("/winner", async (req, res) => {
  await Winner.create(req.body);
  res.json({ message: "Winner saved" });
});

export default router;
