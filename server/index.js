const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 5000;

const locations = require('./data/locations.json');
const hotels = require('./data/hotels.json');

app.get('/', (req, res) => {
  res.send('Booking BD Server Is Running');
});

app.get('/locations', (req, res) => {
  res.send(locations);
});

app.get('/hotels/:id', (req, res) => {
  const locationHotels = hotels.filter((hotel) => hotel.location_id === req.params.id);
  res.send(locationHotels);
});

app.listen(port, () => {
  console.log(`Booking BD app listening on port ${port}`);
});
