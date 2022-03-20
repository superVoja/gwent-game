const express = require("express");
const router = express.Router();
const Card = require("../models/cards.model");

// Get all cards route
router.get("/", async (req, res) => {
  const cards = await Card.find();

  res.json(cards);
});

// Create new card route
router.post("/create", async (req, res) => {
  const newCard = new Card(req.body);

  const savedCard = await newCard.save();

  res.send(savedCard);
});

// Create single card route
router.get("/:id", async (req, res) => {
  const card = await Card.findById({ _id: req.params.id });

  res.json(card);
});

// Delete card route

router.delete("/:id", async (req, res) => {
  const result = await Card.findByIdAndDelete({ _id: req.params.id });

  res.json(result);
});

// Update card route

router.patch("/:id", async (req, res) => {
  const card = await Card.updateOne({ _id: req.params.id }, { $set: req.body });

  res.json(card);
});

module.exports = router;
