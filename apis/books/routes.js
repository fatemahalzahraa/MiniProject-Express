const express = require("express");

const booksRouter = express.Router();

booksRouter.get("/"); //function is missing

booksRouter.get("/:title"); //function of get one book

booksRouter.post("/"); //function of creating one book and adding an image

booksRouter.delete("/:title"); //function of deleting a book of a specific title

booksRouter.put("/:title"); // function of updating a book of a specific title

module.exports = booksRouter;
