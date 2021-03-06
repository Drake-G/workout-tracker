const mongoose = require('mongoose');

const { Schema } = mongoose;

 const workoutSchema = new Schema(
{
    exercise: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
            },
            duration: {
                type: Number,
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
            }
        }
    ],
    day: {
        type: Date,
        default: Date.now, }
   }
)

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;