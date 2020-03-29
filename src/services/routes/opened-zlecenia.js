const express = require('express');
const OpenedZlecenia = require('../models/opened-zlecenia');
const Pracownik = require('../models/pracownicy');
const Pacjent = require('../models/pacjenci');
const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const openedZlecenia = await OpenedZlecenia.find();
    res.send(openedZlecenia);
  }catch(err){
    console.log('error');
    res.json({error: err})
  }

  router.delete('/', async (req, res) => {
    console.log(req.body.ids);
    OpenedZlecenia.findByIdAndRemove({_id: req.body.ids.idOfZlecenie}).then(zlecenie => {
      res.send(zlecenie);
    });
    Pracownik.updateOne({_id: req.body.ids.idOfResponsible}, {$inc: { iloscPacjentow : -0.5 }}, (err, res) => {
    }).then(result => {
      console.log('Pracownik done')
    }).catch(err => {
      console.log(err);
      if (err) throw err;
    });
    if (req.body.ids.causeofDeletion === 'instant') {
      Pacjent.update({_id: req.body.ids.idOfPatient}, {$pull: {diseaseHistory: {_id: req.body.ids.idOfDisease}}}).then(() => {
        console.log('instant deletion of pacjent done');
      })
    }
  })
});

module.exports = router;
