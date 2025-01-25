const express = require("express");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workout
router.get("/", getWorkouts);

//GET workout by ID

router.get("/:id", getWorkout);

//POST a workout

router.post("/", createWorkout);
//DELETE a workout

router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
