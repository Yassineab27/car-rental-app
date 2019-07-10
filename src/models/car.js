const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    carName: {
      type: String,
      required: true,
      trim: true
    },
    model: {
      type: String,
      required: true,
      trime: true
    }
  },
  {
    timestamps: true
  }
);

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
