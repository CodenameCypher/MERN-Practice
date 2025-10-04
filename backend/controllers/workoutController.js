const { response } = require("express");
const workoutModel = require("../models/Workout");

// get all
const getAllWorkout = (request, response) => {
  workoutModel
    .find({})
    .sort({ createdAt: -1 })
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      response.status(400).json({ ErrorMsg: error.message });
    });
};

// get single
const getSingleWorkout = (request, response) => {
  const id = request.params.id;

  workoutModel
    .findById(id)
    .then((result) => {
      result
        ? response.status(200).json(result)
        : response
            .status(404)
            .json({ ErrorMsg: "Database Error: No such workout found." });
    })
    .catch((error) => {
      response
        .status(400)
        .json({ ErrorMsg: "Mongoose Error: " + error.message });
    });
};

// create new
const createWorkout = (request, response) => {
  const { title, load, reps } = request.body;
  workoutModel
    .create({ title, load, reps })
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      response.status(400).json({ ErrorMsg: error.message });
    });
};

// delete
const deleteWorkout = (request, response) => {
  const id = request.params.id;

  workoutModel
    .findByIdAndDelete(id)
    .then((result) => {
      result
        ? response.status(200).json({ ErrorMsg: "Success!" })
        : response
            .status(404)
            .json({ ErrorMsg: "Database Error: No such workout found." });
    })
    .catch((error) => {
      response
        .status(400)
        .json({ ErrorMsg: "Mongoose Error: " + error.message });
    });
};

// modify
const updateWorkout = async (request, response) => {
  const id = request.params.id;

  const workoutObject = await workoutModel
    .findOneAndUpdate(
      { _id: id },
      {
        ...request.body,
      }
    )
    .catch((error) => {
      response
        .status(400)
        .json({ ErrorMsg: "Mongoose Error: " + error.message });
    });

  if (!workoutObject) {
    return response
      .status(404)
      .json({ ErrorMsg: "Database Error: No such workout." });
  }

  return response
    .status(200)
    .json({ ErrorMsg: "Success!", Update: workoutObject });
};

module.exports = {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
