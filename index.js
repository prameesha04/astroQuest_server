import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./Db/db.js";

import astroQuestRoutes from "./Routes/astroQuestRoutes.js";
import progressRoutes from "./Routes/progressRoutes.js";
import adminMissionRoutes from "./Routes/adminMissionRoutes.js";
import boardRoutes from "./Routes/boardRoutes.js";
import innovationRoutes from "./Routes/innovation.js";
import adminInnovationRoutes from "./Routes/adminInnovationRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", astroQuestRoutes);
app.use("/progress", progressRoutes);
app.use("/api/admin/missions", adminMissionRoutes);
app.use("/api/board", boardRoutes);
app.use("/api/innovation", innovationRoutes);

app.use("/api", adminInnovationRoutes);
app.use("/api/admin", adminRoutes);

// Test route (optional but recommended)
app.get("/health", (req, res) => {
  res.json({ status: "Server running OK 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Json web:", process.env.JSON_WEB);
  console.log("ADMIN VERIFY USING:", process.env.JWT_SECRET);

});
