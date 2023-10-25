const express = require('express');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);
app.listen(13999, () => process.stdout.write('🐣 Server Listen on port 13999'));
