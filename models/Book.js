const { Schema, model } = require("mongoose");

const BooksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: String, default: "5 KD" },
  image: { type: String },

  // snake_case_okay
});

module.exports = model("Book", BooksSchema);
