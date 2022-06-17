const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => process.stdout.write('🐣 Server Listen on port 3000'));
