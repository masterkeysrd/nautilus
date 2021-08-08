const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.json('Nautilus-API is working...');
});

module.exports = router;