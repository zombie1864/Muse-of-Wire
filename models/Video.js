const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    runTime: {
      type: Number,
      required: true
    },
    mature: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Video = mongoose.model("video", VideoSchema);
