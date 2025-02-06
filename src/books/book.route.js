const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

//post a book
router.post("/create-book", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

//single book endpoint
router.get("/:id", getSingleBook);

//update a book endpoint
router.put("/edit/:id", verifyAdminToken, updateBook);

//delete a book
router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;
