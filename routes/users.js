const express = require('express');
const { getAll } = require('../database/postgres');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    getAll('auctions')
        .then((rows) => res.json(rows))
        .catch((e) => res.json(e));
});

router.get('/:id', async (req, res) => {
    const userArr = await getCollection('users', {
        _id: ObjectId(req.params.id),
    });
    res.json(userArr.length > 0 ? userArr[0] : { error: 'No such user' });
});

module.exports = router;
