const express = require('express');
const db = require('./connection/connection.js');
const routes = require('./routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server is running on port ${PORT}!`);
    });
  });