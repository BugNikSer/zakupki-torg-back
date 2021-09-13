const express = require('express');
const { select, insert } = require('../database/postgres');
const router = express.Router();

const auctions = 'auctions';
const customers = 'customers';

router.get('/', (req, res) => {
    const filters = Object.entries(req.query).reduce((result, [key, value]) => {
        result[key] = { $regex: value };
        return result;
    }, {});

    select(auctions, filters, { joining: customers, local: 'customerid', foreign: 'id' })
        .then((rows) => {
            res.json(rows)
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

router.get('/:id', (req, res) => {
    select(auctions, { id: req.params.id })
        .then((rows) => {
            res.json(rows[0]);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

router.post('/', (req, res) => {
    if (req.hasOwnProperty('body')) {
        insert(auctions, req.body)
            .then((id) => {
                res.json(id);
            })
            .catch((e) => {
                res.status(500).send(e);
            });
    } else {
        res.status(500).send('No body got');
    }
});

module.exports = router;
