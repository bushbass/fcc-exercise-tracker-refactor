const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// GET - list all exercises
// ROUTE - /exercises
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST - add new exercise
// ROUTE - /exercises/add
router.route('/add').post((req, res) => {
  const { username, description, duration, date } = req.body;
  const newExercise = new Exercise({
    username,
    description,
    duration: Number(duration),
    date: Date.parse(date)
  });

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET - show one exercise by ID
// ROUTE - /exercises/:id
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE - delete one exercise by id
// ROUTE - /exercises/:id
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(response => res.json(` Exercise ${response.description} deleted`))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST - update one exercise
// ROUTE - /exercises/update/:id
router.route('/update/:id').post((req, res) => {
  // const { username, description, duration, date } = req.body;
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
