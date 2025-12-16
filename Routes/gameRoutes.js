import express from "express";
import Winner from "../Model/winner.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  const { userId, winner } = req.body;
  const data = new Winner({ userId, winner });
  await data.save();
  res.json({ message: "Winner saved" });
});

export default router;
