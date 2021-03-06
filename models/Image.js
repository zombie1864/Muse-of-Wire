const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
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


module.exports = Image = mongoose.model("image", ImageSchema);
