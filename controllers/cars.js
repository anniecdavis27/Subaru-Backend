const express = require('express');
const router = express.Router();
const Cars = require('../models/car')
const seed = require('../db/seed.json');

router.get('/seed', async (req, res) => {
    await Cars.deleteMany({})
    Cars.insertMany(seed, (err, items) => {
        if (err) console.log(err)
        else res.send(items)
    })
});

router.get('/', (req, res) => {
    Cars.find({}, (err, allCars) => {
        if (err) console.log(err)
        else res.send(allCars)
    })
});

router.get("/year/:year", (req, res) => {
    Cars.find({ year: req.params.year }, (error, cars) => {
      if (error) console.log(error);
      else res.json(cars);
    });
  });

router.get("/color/:color", (req, res) => {
  Cars.find({ color: req.params.color }, (error, cars) => {
    if (error) console.log(error);
    else res.json(cars);
  });
});

router.get("/model/:model", (req, res) => {
    Cars.find({ model: req.params.model }, (error, cars) => {
      if (error) console.log(error);
      else res.json(cars);
    });
  });

  router.get("/:id", (req, res) => {
    Cars.findById(req.params.id, (error, car) => {
      if (error) console.log(error);
      else res.json(car);
    });
  });

module.exports = router