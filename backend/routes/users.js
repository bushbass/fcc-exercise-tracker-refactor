const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => {
      res.json(users);
      // console.log(users);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json({ message: 'User added!', username }))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  // const { username, description, duration, date } = req.body;
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;

      user
        .save()
        .then(() => res.json('user updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
