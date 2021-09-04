var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1,
    name: 'Nick',
  },
  {
    id: 2,
    name: 'Nataly',
  }
]

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(users);
});

router.get('/:id', (req, res, next) => {
  res.send(users.find(user => user.id === req.params.id))
})

module.exports = router;
