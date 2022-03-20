const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  content: String,
});

module.exports = mongoose.model("Card", CardSchema)