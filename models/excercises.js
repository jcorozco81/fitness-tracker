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

const excercises = new Schema({
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

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

