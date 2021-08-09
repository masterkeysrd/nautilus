const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const loggerConfig = require('./config/logger.config');

const app = express();

app.use(
    morgan(loggerConfig.morgan.format)
);

app.use('/api', routes);


module.exports = app;