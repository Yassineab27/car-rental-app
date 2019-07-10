const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const rentalSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    car: {
      type: String,
      required: true
    },
    weeks: {
      type: String,
      required: true
    },
    allOptions: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;
