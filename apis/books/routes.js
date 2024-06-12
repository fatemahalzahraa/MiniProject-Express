const upload = require("../../middlewares/multer");
const {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
} = require("./controllers");
const express = require("express");
const booksRouter = express.Router();

booksRouter.get("/", getAllBooks); //function is missing

booksRouter.get("/:title", getOneBook); //function of get one book

booksRouter.post("/", upload.single("image"), createBook); //function of creating one book and adding an image

booksRouter.delete("/", deleteBook); //function of deleting a book of a specific title

booksRouter.put("/:title", upload.single("image"), updateBook); // function of updating a book of a specific title

module.exports = booksRouter;
