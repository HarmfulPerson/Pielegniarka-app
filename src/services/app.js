const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

const app = express();
const pracownicyRoute = require('./routes/pracownicy');
const pacjenciRoute = require('./routes/pacjenci');
const addZlecenieRoute = require('./routes/add-zlecenie.js');
const openedZlecenia = require('./routes/opened-zlecenia');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if('OPTIONS' === req.method){
    res.sendStatus(200);
  } else {
    console.log(`${req.ip}, ${req.method}, ${req.url}`);
    next()
  }
});

app.use('/pracownicy', pracownicyRoute);
app.use('/pacjenci', pacjenciRoute);
app.use('/dodaj-zlecenie', addZlecenieRoute);
app.use('/otwarte-zlecenia', openedZlecenia);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('conntected');
});
app.listen(3000);
