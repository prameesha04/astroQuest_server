import Mission from "../Model/mission.js";

// CREATE MISSION
export const createMission = async (req, res) => {
  try {
    const { title, description } = req.body;

    const mission = new Mission({
      title,
      description,
    });

    await mission.save();
    res.status(201).json("Mission created successfully");
  } catch (err) {
    res.status(500).json("Error creating mission");
  }
};

// READ MISSIONS
export const getAllMissions = async (req, res) => {
  try {
    const missions = await Mission.find();
    res.json(missions);
  } catch (err) {
    res.status(500).json("Error fetching missions");
  }
};
// UPDATE MISSION
export const updateMission = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    await Mission.findByIdAndUpdate(id, {
      title,
      description
    });

    res.json("Mission updated successfully");
  } catch (err) {
    res.status(500).json("Error updating mission");
  }
};

// DELETE MISSION
export const deleteMission = async (req, res) => {
  try {
    const { id } = req.params;

    await Mission.findByIdAndDelete(id);
    res.json("Mission deleted successfully");
  } catch (err) {
    res.status(500).json("Error deleting mission");
  }
};
