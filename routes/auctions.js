const { json } = require('express');
const express = require('express');
const { ObjectId } = require('mongodb');
const { joinCollection } = require('../database/mongo');
const router = express.Router();

const auctionAggregation = [
    { $addFields: { _customerId: { $toObjectId: '$customerId' } } },
    {
        $lookup: {
            from: 'customers',
            localField: '_customerId',
            foreignField: '_id',
            as: '_customer',
        },
    },
    {
        $addFields: { customer: '$_customer.title' },
    },
    {
        $unwind: '$customer',
    },
    {
        $project: {
            _customer: 0,
        },
    },
];

router.get('/', (req, res) => {
    joinCollection('auctions', auctionAggregation)
        .then((data) => {
            res.json(data);
        })
        .catch(json.error);
});

router.get('/:id', (req, res) => {
    joinCollection('auctions', [
        { $match: { _id: ObjectId(req.params.id) } },
        ...auctionAggregation,
    ])
        .then((data) => {
            if (data.length > 0) {
                res.json(data[0]);
            } else {
                res.error({ error: 'no such auction' });
            }
        })
        .catch(json.error);
});

module.exports = router;
