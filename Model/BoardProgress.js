import mongoose from "mongoose";

const boardProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  players: [
    {
      name: String,
      position: Number,
    },
  ],
  currentTurn: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("BoardProgress", boardProgressSchema);
