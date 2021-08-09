const getBudgetsHandler = (req, res) => {
    return res.json([]);
};

const getBudgetByIDHandler = (req, res) => {
    return res.json({});
};

const postBudgetHandler = (req, res) => {
    return res.status(201).json({});
};


const putBudgetByIDHandler = (req, res) => {
    res.sendStatus(204);
};

const deleteBudgetByIDHandler = (req, res) => {
    res.sendStatus(204);
};

module.exports = {
    getBudgetsHandler,
    postBudgetHandler,
    getBudgetByIDHandler,
    putBudgetByIDHandler,
    deleteBudgetByIDHandler
};