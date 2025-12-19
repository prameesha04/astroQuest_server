import express from "express";
import { protectAdmin } from "../Middleware/authMiddleware.js";
import astroCollection from "../Model/astroQuestModel.js";
import Innovation from "../Model/Innovation.js";

const adminRoutes = express.Router();

// GET ALL USERS
adminRoutes.get("/users", async (req, res) => {
  const users = await astroCollection.find().select("-password");
  res.json(users);
});

// GET ALL INNOVATIONS
adminRoutes.get("/innovations", protectAdmin, async (req, res) => {
  const innovations = await Innovation.find().populate("user", "name email");
  res.json(innovations);
});

export default adminRoutes;
