const express = require("express");
const books = require("./data");
const booksRouter = require("./apis/books/routes");
const connectDB = require("./database");

const app = express();

app.use(express.json());

app.get(
  "/books",
  booksRouter
  // (req, res, next) => {
  //   return res.json(books)};
);

connectDB();

app.listen(8000, () => {
  console.log("i am running at 8000");
});
