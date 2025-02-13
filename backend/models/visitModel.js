import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  date: {
    type: String, // Format: "YYYY-MM-DD"
    required: true,
    unique: true,
  },
  daily_count: {
    type: Number,
    default: 0,
  },
  total_count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("visitor", visitorSchema);
