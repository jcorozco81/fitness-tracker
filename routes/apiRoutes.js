const router = require("express").Router();
const Workout = require("../models/WorkoutSchema");


// "/api/workouts" getLastWorkout GET
router.get("/workouts", (req, res) => {
    // Workout.find({})
    Workout.aggregate(
      ( [
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" } ,
          }
        }
     ] )
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// "/api/workouts/" addExercise PUT updateOne
router.put("/workouts/:id", (req, res) => {
        // Workout.updateOne({_id: req.params.id}, {$push: {exercises: [{ type: 'cardio', name: 'r', distance: 2, duration: 2 }]}})

    Workout.updateOne({_id: req.params.id}, {$push: {exercises: [req.body]}})
      .then(dbWorkout => {
        console.log(req.params.id);
          console.log(req.body);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


// "/api/workouts" createWorkout POST

router.post("/workouts", ({body}, res) => {
    Workout.create({body})
      .then(dbWorkout => {
          console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

// "/api/workouts/range" getWorkoutsInRange GET

router.get("/workouts/range", (req, res) => {
    Workout.aggregate(
      ( [
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" } ,
          }
        }
     ] )
    )
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;





// Acceptance Criteria:

// * Add exercises to the most recent workout plan.

// * Add new exercises to a new workout plan.

// * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

// * View the total duration of each workout from the past seven workouts on the `stats` page.