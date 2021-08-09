const express = require('express');
const handlers = require('../handlers/budgets.handlers');

const router = express.Router();

router.get('/', handlers.getBudgetsHandler);
router.post('/', handlers.postBudgetHandler);

router.get('/:id', handlers.getBudgetByIDHandler);
router.put('/:id', handlers.putBudgetByIDHandler);
router.delete('/:id',handlers.deleteBudgetByIDHandler);

module.exports = router;