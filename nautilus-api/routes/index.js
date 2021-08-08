const express = require('express');
const homeRouter =  require('./home.router');

const router = express.Router();

router.use('/', homeRouter);

module.exports = router;