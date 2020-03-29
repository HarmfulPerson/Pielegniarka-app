const express = require('express');
const Pacjent = require('../models/pacjenci');
const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const pacjenci = await Pacjent.find();
    res.send(pacjenci);
  }catch(err){
    console.log('error');
    res.json({error: err})
  }
});
router.post('/nowy-pacjent', async (req, res) => {
  Pacjent.create(req.body).then(patient => {
    res.send(patient)
  });
});
router.delete('/:id', async (req, res) => {
  Pacjent.findByIdAndRemove({_id: req.params.id}).then(pracownik => {
    res.send(pracownik);
  });
});
router.get('/:id', async (req, res) => {
  try{
    const pacjenci = await Pacjent.find({_id: req.params.id}).select('diseaseHistory').then(result => {
      return result[0].diseaseHistory;
    });
    res.send(pacjenci);
  }catch(err){
    console.log('error');
    res.json({error: err})
  }
});
module.exports = router;
