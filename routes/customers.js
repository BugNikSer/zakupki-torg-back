const express = require('express');
const { select, insert } = require('../database/postgres');
const router = express.Router();

const customers = 'customers';
const auctions = 'auctions';

router.get('/', (req, res) => {
    const filters = Object.entries(req.query).reduce((result, [key, value]) => {
        result[key] = { $regex: value };
        return result;
    }, {});

    select(customers, filters)
        .then((rows) => {
            res.json(rows);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    const customerPromise = select(customers, { id: id });
    const autcionsPromise = select(auctions, { customerid: id });

    Promise.allSettled([customerPromise, autcionsPromise]).then(([customer, auctionsList]) => {
        res.json({
            ...customer.value[0],
            auctions: auctionsList.value,
        })
    }).catch(e => {
        res.status(500).send(e);
    })
});

router.post('/', (req, res) => {
    if (req.hasOwnProperty('body')) {
        insert(customers, req.body)
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
