//     day: new Date(new Date().setDate(new Date().getDate() - 8)),
// exercises: [
//     {
//       type: 'resistance',
//       name: 'Lateral Pull',
//       duration: 20,
//       weight: 300,
//       reps: 10,
//       sets: 4,

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises:[{ 
        type: String, 
        name: String, 
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

