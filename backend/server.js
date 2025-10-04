// env file reader package setup
require("dotenv").config();

// import express
const express = require("express");

// mongoose connection | MongoDB
const mongoose = require("mongoose");
const database = mongoose
  .connect(process.env.MONGO_URI)
  .then((response) => {
    console.log("Database connection succesful!");
  })
  .catch((error) => {
    console.log("Database connection error.");
  });

// express app init
const app = express();

// express json middleware
app.use(express.json());

// listen for requests || set port number
app.listen(process.env.PORT, () => {
  console.log("Listening to port: ", process.env.PORT);
});

// middleware
app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

// routes
const workoutRoutes = require("./routes/workouts");
app.use("/api/workouts", workoutRoutes);
