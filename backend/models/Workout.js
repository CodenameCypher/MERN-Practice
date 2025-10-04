// mongoose | MongoDB
const mongoose = require("mongoose");

// ORM Schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    reps: {
      type: Number,
      required: true,
    },

    load: {
      type: Number,
      required: true,
    },
  }, // fields
  { timestamps: true } // auto add timestamp
);

module.exports = mongoose.model("Workout", workoutSchema);
