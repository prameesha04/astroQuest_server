import GameResult from "../Model/gameResult.js";

export const saveBoardWinner = async (req, res) => {
  try {
    const { winnerName, players } = req.body;

    const result = new GameResult({
      winnerName,
      players,
    });

    await result.save();

    res.status(201).json({
      success: true,
      message: "Board game winner saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
