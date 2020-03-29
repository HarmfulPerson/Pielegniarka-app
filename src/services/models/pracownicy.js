const mongoose  = require('mongoose');

const pracownikSchema = mongoose.Schema({
  name: String,
  surname: String,
  typUmowy: String,
  iloscPacjentow: Number,
  dostepnosc: Boolean
});
const Pracownik = mongoose.model('pracownicy', pracownikSchema);

module.exports = Pracownik;
