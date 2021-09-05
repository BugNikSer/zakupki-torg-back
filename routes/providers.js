const { json } = require('express');
const express = require('express');
const { ObjectId } = require('mongodb');
const { getCollection } = require('../database/mongo');
const router = express.Router();

router.get('/', (req, res) => {
    getCollection('providers')
        .then((data) => {
            res.json(data);
        })
        .catch(json.error);
});

router.get('/:id', (req, res) => {
    getCollection('providers', { _id: ObjectId(req.params.id) })
        .then((data) => {
            if (data.length > 0) {
                res.json(data[0]);
            } else {
                res.error({ error: 'No such user' });
            }
        })
        .catch(res.error);
});

module.exports = router;
