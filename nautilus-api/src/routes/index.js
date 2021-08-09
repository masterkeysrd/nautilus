const express = require('express');
const homeRouter =  require('./home.router');
const budgetRouter = require('./budget.router');

const router = express.Router();

router.use('/', homeRouter);
router.use('/budgets', budgetRouter);

module.exports = router;