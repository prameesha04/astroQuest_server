import express from "express";
import Innovation from "../Model/Innovation.js ";

const router = express.Router();

// SAVE INNOVATION
router.post("/add", async (req, res) => {
  try {
    const data = await Innovation.create(req.body);
    res.json({ message: "Innovation saved", data });
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET ALL INNOVATIONS
router.get("/all", async (req, res) => {
  const data = await Innovation.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;
