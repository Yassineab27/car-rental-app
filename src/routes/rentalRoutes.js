const express = require("express");

const Rental = require("../models/rental");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const rentals = await Rental.find().sort({ createdAt: -1 });
    res.send(rentals);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const rental = new Rental(req.body);
    await rental.save();
    res.status(201).send(rental);
    console.log(rental);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) {
      return res.status(404).send({ error: "Rental not found." });
    }
    await rental.remove();
    res.send("Rental was successfully deleted!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const allowedUpdates = [
      "firstName",
      "lastName",
      "car",
      "weeks",
      "allOptions"
    ];
    const updates = Object.keys(req.body);
    const validUpdates = updates.every(update =>
      allowedUpdates.includes(update)
    );
    if (!validUpdates) {
      return res.status(400).send({ error: "update invalid." });
    }
    const rental = await Rental.findById(req.params.id);
    if (!rental) {
      return res.status(404).send("Rental not found.");
    }
    updates.forEach(update => (rental[update] = req.body[update]));
    await rental.save();

    res.send(rental);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
