const express = require("express");
const Car = require("../models/car");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.send(cars);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).send(newCar);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).send({ error: "Car not found." });
    }
    await car.remove();
    res.send("The car was successfully deleted.");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
