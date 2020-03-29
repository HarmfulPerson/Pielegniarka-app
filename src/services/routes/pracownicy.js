const express = require('express');
const Pracownik = require('../models/pracownicy');
const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const pracownicy = await Pracownik.find();
    res.send(pracownicy);
  }catch(err){
    res.json({error: err})
  }
});
router.post('/nowy-pracownik', async (req, res) => {
  Pracownik.create(req.body).then(user => {
    res.send(user)
  });
});
router.delete('/:id', async (req, res) => {
  Pracownik.findByIdAndRemove({_id: req.params.id}).then(pracownik => {
    res.send(pracownik);
  });
});

module.exports = router;
