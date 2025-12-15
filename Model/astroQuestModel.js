import mongoose from "mongoose";

const astroQuestSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const astroCollection = mongoose.model("AstroUser", astroQuestSchema);
export default astroCollection;
