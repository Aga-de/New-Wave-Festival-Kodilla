const express = require('express');
const router = express.Router();
const ConcertController = require('../controllers/concerts.controller');

router.get('/concerts', ConcertController.getAll);
router.get('/concerts/random', ConcertController.getRandom);
router.get('/concerts/:id', ConcertController.getById);

router.get('/concerts/performer/:performer', ConcertController.getByPerformer);
router.get('/concerts/genre/:genre', ConcertController.getByGenre);
router.get('/concerts/price/:price_min/:price_max', ConcertController.getByPrice);
router.get('/concerts/day/:day', ConcertController.getByDay);

router.post('/concerts', ConcertController.postNew);
router.put('/concerts/:id', ConcertController.updateById);
router.delete('/concerts/:id', ConcertController.deleteById);


module.exports = router;