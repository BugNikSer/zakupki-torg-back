const express = require('express');
const { ObjectId } = require('mongodb');
const getCollection = require('../database/mongo');
const router = express.Router();


/* GET users listing. */
router.get('/', async (req, res) => {
  res.json(await getCollection('customers'))
});

router.get('/:id', async (req, res) => {
  const userArr = await getCollection('customers', { _id: ObjectId(req.params.id) })
  res.json(userArr.length > 0 ? userArr[0] : {error: 'No such user'})
})

module.exports = router;