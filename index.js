//  Make sure to npm i dotenv
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Declare routes right here.
// eslint-disable-next-line import/no-unresolved
const routes = require('./routes');

// Prepend / to any route declared inside of routes
app.use(routes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Port started on port: ${PORT}`));
