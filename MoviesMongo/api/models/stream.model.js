const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    movies: [
      { type: mongoose.Schema.Types.ObjectId, ref: "movie", required: true },
    ],
  },
  {
    timestamps: true,
  }
);

const Stream = mongoose.model("stream", streamSchema);
module.exports = Stream;
