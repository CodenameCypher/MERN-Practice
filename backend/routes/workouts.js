const express = require("express");
const WorkoutModel = require("../models/Workout");
const Workout = require("../models/Workout");

const {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkout);

// GET a single workout
router.get("/:id", getSingleWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
router.patch("/:id", updateWorkout);

// all other routes
router.use((request, response) => {
  response.json({ msg: "INVALID ENDPOINT." });
});

module.exports = router;
