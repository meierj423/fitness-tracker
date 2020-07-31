const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  // Give exercises more validation later
  exercises: {
    type: [],
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// {
//     day: new Date(new Date().setDate(new Date().getDate() - 2)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Military Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   }

// {
//     day: new Date(new Date().setDate(new Date().getDate() - 3)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
