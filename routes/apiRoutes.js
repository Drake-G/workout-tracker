const router = require("express").Router();
const Workout = require('../models/workout.js')
//post a workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
// //Seed bulk workouts
//   router.post("/api/workouts/bulk", ({ body }, res) => {
//     Workout.insertMany(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

  router.put("/api/workouts/:id", (req, res) =>{
    Workout.updateOne(
      {_id: req.paramsid},
      {$push: { exercises: req.body }},
      { new: true, runValidators: true }
    ).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  })


  router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
      $addFields:{totalDuration: {$sum: '$exercise.duration'}}
    }
    ]).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
      $addFields:{totalDuration: {$sum: '$exercise.duration'}}
    }
    ]).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;