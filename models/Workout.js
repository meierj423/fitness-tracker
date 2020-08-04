const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: {
    type: [
      {
        type: {
          type: String
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
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
  let total = 0;
  this.exercises.forEach(e => {
    total += e.duration;
  });
  return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
