const Book = require("../../models/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return next(error);
  }
};

const getOneBook = async (req, res, next) => {
  const title = req.params.title;

  try {
    const book = await Book.find({ title: title });
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(400).json({ message: "NO BOOK WITH SUCH TITLE :( " });
    }
  } catch (error) {
    return next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    return next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const title = req.body.title;

    await Book.deleteMany({ title: title });

    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

const updateBook = async (req, res, next) => {
  const title = req.params.title;

  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const updated = await Book.find({ title: title });
    return res.status(200).json(updated);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
};
