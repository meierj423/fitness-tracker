const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.get("*", (req, res) => {
  res.send("<h1>Hello, World</h1>");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// NEXT: Create separate routes folder and files and start
// by creating Route for GET /api/workouts
