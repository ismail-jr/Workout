// const Workout = require("../models/workoutModel");
// const mongoose = require("mongoose");

// // get all workouts
// const getWorkouts = async (req, res) => {
//   const workout = await Workout.find({}).sort({ createdAt: -1 });
//   res.status(200).json(workout);
// };

// // get a single workout
// const getWorkout = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such workout" });
//   }
//   const workout = await Workout.findById(id);
//   if (!workout) {
//     res.status(404).json({ error: "No such workout" });
//   }
//   res.status(200).json(workout);
// };

// //create new workout
// const createWorkout = async (req, res) => {
//   const { title, repetition, load } = req.body;

//   try {
//     // add doc to db
//     const workout = await Workout.create({ title, repetition, load });
//     res.status(201).json(workout);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// //delete workout
// const deleteWorkout = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "No such workout" });
//   }
//   const workout = await Workout.findByIdAndDelete({ _id: id });
//   if (!workout) {
//     return res.status(404).json({ error: "No such workout" });
//   }
//   res.status(200).json(workout);
// };

// //update workout
// const updateWorkout = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such workout" });
//   }
//   const workout = await Workout.findByIdAndUpdate({ _id: id }, ...req.body);
//   if (!workout) {
//     return res.status(404).json({ error: "No such workout" });
//   }
//   res.status(200).json(workout);
// };

// module.exports = {
//   createWorkout,
//   getWorkouts,
//   getWorkout,
//   deleteWorkout,
//   updateWorkout,
// };
const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  return res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, repetition, load } = req.body;

  try {
    // add doc to db
    const workout = await Workout.create({ title, repetition, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  return res.status(200).json(workout);
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true });
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  return res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
