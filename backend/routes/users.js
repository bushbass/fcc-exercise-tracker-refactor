const router = require('express').Router();
let User = require('../models/user.model');

// DELETE - show all users
// ROUTE - /users/
router.route('/').get((req, res) => {
  User.find()
    .then(users => {
      res.json(users);
      console.log('local users');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET - show one user by ID
// ROUTE - /users/:id
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET - add a user
// ROUTE - /users/:id
router.route('/add').post((req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json({ message: 'User added!', username }))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST - update user by ID
// ROUTE - /users/:id
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)

    .then(user => {
      user.username = req.body.username;
      user
        .save()
        .then(() => res.json(`user ${user.username} updated!`))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE - delete one user by id
// ROUTE - /users/:id
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(response => res.json(` User ${response.username} deleted`))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
