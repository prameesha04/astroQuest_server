import mongoose from "mongoose";

const innovationSchema = new mongoose.Schema(
  {
    innovatorName: { type: String, required: true },
    controller: { type: String, required: true },
    innovationTitle: { type: String, required: true },
    innovationType: { type: String, required: true },
    innovationIdea: { type: String, required: true },
    toolsUsed: String,
  },
  { timestamps: true }
);

export default mongoose.model("Innovation", innovationSchema);
