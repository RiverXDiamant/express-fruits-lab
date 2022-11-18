const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean,
  },
  {
    timestamps: true,
  }
);

// All - model names - should be capitalized
// Fruit model
const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
