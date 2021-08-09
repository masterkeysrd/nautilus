const path = require('path');
const YAML = require('yamljs');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const loggerConfig = require('./config/logger.config');

const databaseConfig = require('./config/database.config');

mongoose.connect(
    `mongodb://${databaseConfig.server}:${databaseConfig.port}/${databaseConfig.instance}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express();
const swaggerDocument = YAML.load(
    path.join(__dirname,  '/../openapi.yml')
);


app.use(express.json());
app.use(express.urlencoded());

app.use(
    morgan(loggerConfig.morgan.format)
);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use('/api', routes);


module.exports = app;