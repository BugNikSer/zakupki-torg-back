const express = require('express');
const { select, insert } = require('../database/postgres');
const router = express.Router();

const providers = 'providers';

router.get('/', (req, res) => {
    const filters = Object.entries(req.query).reduce((result, [key, value]) => {
        result[key] = { $regex: value };
        return result;
    }, {});

    select(providers, filters)
        .then((rows) => {
            res.json(rows);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

router.get('/:id', (req, res) => {
    select(providers, { id: req.params.id })
        .then((rows) => {
            res.json(rows[0]);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

router.post('/', (req, res) => {
    if (req.hasOwnProperty('body')) {
        insert(providers, req.body)
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
