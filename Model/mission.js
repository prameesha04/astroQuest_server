import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  title: String,
  description: String,
  level: Number,
});

export default mongoose.model("Mission", missionSchema);
