const express = require('express');
const port = 5000;
const app = express();

const location = require('./data/location.json');

app.get('/', (req, res) => {
  res.send('Booking BD Server Is Running');
});

app.get('/location', (req, res) => {
  res.send(location);
});

app.listen(port, () => {
  console.log(`Booking BD app listening on port ${port}`);
});
