import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Db/db.js";
import astroQuestRoutes from "./Routes/astroQuestRoutes.js";
import progressRoutes from "./Routes/progressRoutes.js";
import adminMissionRoutes from "./Routes/adminMissionRoutes.js";
import boardRoutes from "./Routes/boardRoutes.js";
import innovationRoutes from "./Routes/innovation.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", astroQuestRoutes);
app.use("/progress", progressRoutes);
app.use("/api/admin/missions", adminMissionRoutes);
app.use("/api/board", boardRoutes);
app.use("/api/innovation", innovationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
