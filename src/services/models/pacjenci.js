const mongoose  = require('mongoose');

const patientSchema = mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  street: String,
  houseNumber: Number,
  localNumber: Number,
  city: String,
  diseaseHistory: [{
    startedAt: Date,
    typeOfDisease: String,
    typeOfMedicine: String,
    daysOfTreatment: Number
  }]
});
const Patient = mongoose.model('patients', patientSchema);

module.exports = Patient;
