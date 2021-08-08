const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('Nautilus-API is working...');
});


module.exports = app;