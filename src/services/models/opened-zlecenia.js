const mongoose  = require('mongoose');

const zlecenieSchema = mongoose.Schema({
  name: String,
  surname: String,
  medicine: String,
  daysLeft: Number,
  responsiblePerson: String,
  idOfResponsible: String,
  idOfDisease: String,
  idOfPatient: String
});
const openedZlecenie = mongoose.model('zlecenia', zlecenieSchema);

module.exports = openedZlecenie;
