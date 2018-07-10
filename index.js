const middleware = require('./middleware');
const express = require('express');
require('dotenv').config();

const app = express();

middleware(app, express);

app.listen(process.env.PORT, () => {
  console.log('Server working');
});