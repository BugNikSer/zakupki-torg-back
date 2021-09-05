const { json } = require('express');
const express = require('express');
const { ObjectId } = require('mongodb');
const { getCollection, joinCollection } = require('../database/mongo');
const router = express.Router();

router.get('/', (req, res) => {
    const filters = Object.entries(req.query).reduce((result, [key, value]) => {
        result[key] = { $regex: value };
        return result;
    }, {});

    getCollection('customers', filters)
        .then((data) => {
            res.json(data);
        })
        .catch(json.error);
});

router.get('/:id', (req, res) => {
    joinCollection('customers', [
        {
            $match: { _id: ObjectId(req.params.id) },
        },
        {
            $addFields: {
                id: { $toString: '$_id' },
            },
        },
        {
            $lookup: {
                from: 'auctions',
                localField: 'id',
                foreignField: 'customerId',
                as: 'auctions',
            },
        },
    ])
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
