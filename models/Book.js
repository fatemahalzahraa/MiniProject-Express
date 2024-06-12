const { Schema, model } = require("mongoose");

const BooksSchema = new Schema({
  Title: { type: String, required: true },
  Author: { type: String, required: true },
  Price: { type: String, default: "5 KD" },
  Image: { type: String, default: "" },
});

module.exports = model("Book", BooksSchema);
