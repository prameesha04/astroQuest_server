import astroCollection from "../Model/astroQuestModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await astroCollection.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
