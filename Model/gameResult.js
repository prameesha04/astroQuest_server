import mongoose from "mongoose";

const gameResultSchema = new mongoose.Schema({
  gameType: {
    type: String,
    default: "BOARD_GAME",
  },
  winnerName: {
    type: String,
    required: true,
  },
  players: [
    {
      name: String,
      color: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("GameResult", gameResultSchema);
