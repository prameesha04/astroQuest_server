import express from "express";
import User from "../Model/user.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ unlockedLevel: user.unlockedLevel });
});

router.post("/update", async (req, res) => {
  const { userId, unlockedLevel } = req.body;

  await User.findByIdAndUpdate(userId, { unlockedLevel });
  res.json({ success: true });
});

export default router;
