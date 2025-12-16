import mongoose from "mongoose";

const winnerSchema = new mongoose.Schema({
  userId: String,
  winner: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Winner", winnerSchema);
