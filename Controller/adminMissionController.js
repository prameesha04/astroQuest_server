import Mission from "../Model/mission.js";

// CREATE
export const createMission = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) return res.status(400).json("Title required");

    const mission = await Mission.create({ title, description });
    res.status(201).json(mission);
  } catch (err) {
    console.error(err);
    res.status(500).json("Mission creation failed");
  }
};

// READ
export const getMissions = async (req, res) => {
  try {
    const missions = await Mission.find().sort({ createdAt: -1 });
    res.json(missions);
  } catch {
    res.status(500).json("Failed to fetch missions");
  }
};

// UPDATE
export const updateMission = async (req, res) => {
  try {
    const { id } = req.params;
    await Mission.findByIdAndUpdate(id, req.body);
    res.json("Mission updated");
  } catch {
    res.status(500).json("Update failed");
  }
};

// DELETE
export const deleteMission = async (req, res) => {
  try {
    await Mission.findByIdAndDelete(req.params.id);
    res.json("Mission deleted");
  } catch {
    res.status(500).json("Delete failed");
  }
};
