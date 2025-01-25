require("dotenv").config();
// Require the express app

const express = require("express");
const mongoose = require("mongoose");

const workoutsRoutes = require("./routes/workouts");

// Starting the express app

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutsRoutes);

// Connecting to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to DB & Server is running on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
