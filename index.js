import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Db/db.js";
import astroQuestRoutes from "./Routes/astroQuestRoutes.js";
import progressRoutes from "./Routes/progressRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", astroQuestRoutes); 
app.use("/progress", progressRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
