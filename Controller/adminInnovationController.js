import Innovation from "../Model/Innovation.js";

export const getInnovations = async (req, res) => {
  try {
    const innovations = await Innovation.find();
    res.json(innovations);
  } catch {
    res.status(500).json("Failed to fetch innovations");
  }
};
