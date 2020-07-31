const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();
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
