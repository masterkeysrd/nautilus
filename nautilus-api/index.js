const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('Nautilus-API is working...');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Nautilus-API Listening on http://localhost:${PORT}`);
});