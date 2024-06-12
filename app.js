const express = require("express");
const books = require("./data");
const booksRouter = require("./apis/books/routes");
const connectDB = require("./database");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());

app.use("/media", express.static(path.join(__dirname, "media")));

app.use(morgan("dev"));
app.use(cors());

app.use("/api/books", booksRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(8000, () => {
  console.log("i am running at 8000");
});
