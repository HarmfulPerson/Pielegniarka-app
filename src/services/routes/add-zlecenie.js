const moment = require('moment');
const express = require('express');
const Pracownik = require('../models/pracownicy');
const Pacjent = require('../models/pacjenci');
const OpenedZlecenie = require('../models/opened-zlecenia');
const router = express.Router();
const date = new Date;
function returnProperDate(days) {
  return days*60*60*1000*24;
}
router.post('/', async (req, res) => {
  Pacjent.updateOne({_id: req.body.idOfPatient}, {$push: {diseaseHistory:
        {
          startedAt: Date.now(),
          typeOfDisease: req.body.choroba,
          typeOfMedicine: req.body.lek,
          daysOfTreatment: req.body.dni
        }
    }})
    .then(result => {
        Pracownik.find({_id: req.body.idOfWorker}).then((pracownik) => {
            Pacjent.find({_id: req.body.idOfPatient}).then((pacjent) => {
              Pracownik.findOneAndUpdate({_id: req.body.idOfWorker}, {$inc: { iloscPacjentow : 0.5 }}, (err, res) => {
              }).then(result => {
                console.log('Pracownik done')
              });
                OpenedZlecenie.create({
                  name: pacjent[0].name,
                  surname: pacjent[0].surname,
                  medicine: req.body.lek,
                  daysLeft: date.getTime() + returnProperDate(req.body.dni),
                  responsiblePerson: pracownik[0].name + ' ' + pracownik[0].surname,
                  idOfResponsible: pracownik[0]._id,
                  idOfDisease: pacjent[0].diseaseHistory[pacjent[0].diseaseHistory.length - 1]._id,
                  idOfPatient: pacjent[0]._id
                }).then((result) => {
                  console.log('Zlecenie has been created');
                })
            })
        })
    })
    .catch(err => {if(err) throw err})
    .catch(err => {if(err) throw err})
    .catch((err) => {
      console.log(err);
      if (err) throw err;
      })
    .catch(err => {
      console.log(err);
      if (err) throw err;
    });

});
module.exports = router;
