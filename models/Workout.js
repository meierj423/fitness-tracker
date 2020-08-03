const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  // Give exercises more validation later
  exercises: {
    type: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter the name of the exercise"
        },
        duration: {
          type: Number,
          required: "Please enter the duration of the exercise"
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

//{
//   day: new Date(new Date().setDate(new Date().getDate() - 7)),
//   exercises: [
//     {
//       type: "cardio",
//       name: "Running",
//       duration: 25,
//       distance: 4
//     }
//   ]
// },

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
